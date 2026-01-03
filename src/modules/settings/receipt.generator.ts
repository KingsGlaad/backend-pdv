import { Config, Sale, OrderItem, Payment, Product, Order } from '../../generated/prisma/client';
import iconv from 'iconv-lite';

type SaleWithDetails = Sale & {
  items: (OrderItem & { product: Product })[];
  payments: Payment[];
  orders?: Order[];
};

export class ReceiptGenerator {
  private width = 40; // Default width

  // ESC/POS Commands
  private readonly ENC = 'cp850'; // Using CP850 as a safe default for thermal printers usually. Or cp860 (Portuguese). Let's try cp850 or cp860. Most EPSON compatible defaults to 437 or 850.
  // Actually PC850 is common for Latin1. Let's use 'cp850'.

  private readonly CMD = {
    INIT: Buffer.from([0x1b, 0x40]),
    CUT: Buffer.from([0x1d, 0x56, 0x42, 0x00]),

    // Formatting
    TXT_NORMAL: Buffer.from([0x1b, 0x21, 0x00]),
    TXT_BOLD_ON: Buffer.from([0x1b, 0x45, 0x01]),
    TXT_BOLD_OFF: Buffer.from([0x1b, 0x45, 0x00]),

    // Alignment
    ALIGN_LEFT: Buffer.from([0x1b, 0x61, 0x00]),
    ALIGN_CENTER: Buffer.from([0x1b, 0x61, 0x01]),
    ALIGN_RIGHT: Buffer.from([0x1b, 0x61, 0x02]),
  };

  constructor(private config?: Config) {
    // If we have printer width in config in future, use it
  }

  generateEscPos(sale: SaleWithDetails, printerWidth = 40): Buffer {
    this.width = printerWidth;
    let buffer = Buffer.alloc(0);

    const add = (chunk: Buffer) => {
      buffer = Buffer.concat([buffer, chunk]);
    };

    const text = (str: string) => {
      // Normalize and encode to CP850
      // iconv-lite 'cp850'
      const encoded = iconv.encode(str, 'cp850');
      add(encoded);
    };

    const textLn = (str: string) => {
      text(str + '\n');
    };

    // INIT
    add(this.CMD.INIT);

    // Header
    add(this.CMD.ALIGN_CENTER);
    add(this.CMD.TXT_BOLD_ON);
    textLn('COMPROVANTE DE VENDA');
    add(this.CMD.TXT_BOLD_OFF);
    textLn(this.separator());

    if (this.config?.companyName) {
      add(this.CMD.TXT_BOLD_ON);
      textLn(this.config.companyName.toUpperCase());
      add(this.CMD.TXT_BOLD_OFF);
    }
    if (this.config?.tradingName && this.config.tradingName !== this.config.companyName) {
      textLn(this.config.tradingName.toUpperCase());
    }
    if (this.config?.cnpj) {
      textLn(`CNPJ: ${this.config.cnpj}`);
    }
    if (this.config?.phone) {
      textLn(`Tel: ${this.config.phone}`);
    }
    if (this.config?.address) {
      textLn(this.config.address);
    }

    textLn(this.separator());
    add(this.CMD.ALIGN_LEFT);
    textLn(`Data: ${sale.createdAt.toLocaleString('pt-BR')}`);

    if (sale.orders && sale.orders.length > 0) {
      const commandNumbers = sale.orders.map((o) => o.number).join(', ');
      add(this.CMD.TXT_BOLD_ON);
      textLn(`COMANDA: #${commandNumbers}`);
      add(this.CMD.TXT_BOLD_OFF);
    }

    if (sale.code) {
      textLn(`Venda No: ${sale.code.slice(-6).toUpperCase()}`);
    }
    if (sale.customerCpf) {
      textLn(`CPF Cliente: ${sale.customerCpf}`);
    }

    textLn(this.separator());

    // Items
    textLn('ITEM  COD   QTD   UN.VL     TOTAL');

    sale.items.forEach((item, index) => {
      const name = item.product.name.slice(0, this.width).toUpperCase();
      textLn(name);

      const seq = (index + 1).toString().padStart(3, '0');
      const code = item.product.code.slice(0, 4);
      const qtd = item.quantity.toString().padStart(3, ' ');
      const price = Number(item.price).toFixed(2).replace('.', ',');
      const total = (Number(item.price) * item.quantity).toFixed(2).replace('.', ',');

      const line = `${seq} ${code.padEnd(5)} ${qtd} x ${price.padStart(8)} ${total.padStart(9)}`;

      const paddedLine = line.padStart(this.width);
      textLn(paddedLine);
    });

    textLn(this.separator());

    // Totals
    const total = Number(sale.total);
    const discount = sale.discount ? Number(sale.discount) : 0;
    const final = Number(sale.finalAmount);

    add(this.CMD.ALIGN_RIGHT);
    textLn(`SUBTOTAL: ${this.formatCurrency(total)}`);
    if (discount > 0) {
      textLn(`DESCONTO: -${this.formatCurrency(discount)}`);
    }
    add(this.CMD.TXT_BOLD_ON);
    textLn(`TOTAL A PAGAR: ${this.formatCurrency(final)}`);
    add(this.CMD.TXT_BOLD_OFF);
    add(this.CMD.ALIGN_LEFT);

    textLn(this.separator());

    // Payments
    add(this.CMD.ALIGN_CENTER);
    textLn('FORMA DE PAGAMENTO');
    add(this.CMD.ALIGN_LEFT);

    sale.payments.forEach((p) => {
      const methodMap: Record<string, string> = {
        money: 'DINHEIRO',
        credit: 'CREDITO',
        debit: 'DEBITO',
        pix: 'PIX',
        CASH: 'DINHEIRO',
        CARD: 'CARTAO',
        OTHER: 'OUTROS',
      };
      const methodLabel = methodMap[p.method] || p.method.toUpperCase();

      const val = this.formatCurrency(Number(p.amount));
      const spaceLen = this.width - methodLabel.length - val.length;
      const space = ' '.repeat(Math.max(0, spaceLen));
      textLn(`${methodLabel}${space}${val}`);
    });

    const cashPay = sale.payments.find((p) => p.method === 'CASH');
    if (cashPay) {
      const paid = Number(cashPay.amount);
      if (paid > final) {
        const troco = this.formatCurrency(paid - final);
        const label = 'TROCO:';
        const spaceLen = this.width - label.length - troco.length;
        const space = ' '.repeat(Math.max(0, spaceLen));
        textLn(`${label}${space}${troco}`);
      }
    }

    add(this.CMD.ALIGN_CENTER);
    textLn('');
    textLn('OBRIGADO PELA PREFERENCIA!');
    textLn('VOLTE SEMPRE');
    textLn('');
    textLn('');

    // Feed and Cut
    add(this.CMD.CUT);

    return buffer;
  }

  // Keeping the string generate method for other use cases or fallback
  generate(sale: SaleWithDetails, printerWidth = 40): string {
    this.width = printerWidth;
    let buffer = '';

    // --- Header ---
    buffer += this.center('COMPROVANTE DE VENDA') + '\n';
    buffer += this.separator() + '\n';

    if (this.config?.companyName) {
      buffer += this.center(this.config.companyName.toUpperCase()) + '\n';
    }
    if (this.config?.tradingName && this.config.tradingName !== this.config.companyName) {
      buffer += this.center(this.config.tradingName.toUpperCase()) + '\n';
    }
    if (this.config?.cnpj) {
      buffer += this.center(`CNPJ: ${this.config.cnpj}`) + '\n';
    }
    if (this.config?.phone) {
      buffer += this.center(`Tel: ${this.config.phone}`) + '\n';
    }
    if (this.config?.address) {
      const addr = this.config.address;
      if (addr.length > this.width) {
        // simple wrap logic or just print
        const parts = addr.split(','); // simple split attempt
        parts.forEach((p) => (buffer += this.center(p.trim()) + '\n'));
      } else {
        buffer += this.center(addr) + '\n';
      }
    }

    buffer += this.separator() + '\n';
    buffer += `Data: ${sale.createdAt.toLocaleString('pt-BR')}\n`;

    // Command Number
    if (sale.orders && sale.orders.length > 0) {
      const commandNumbers = sale.orders.map((o) => o.number).join(', ');
      buffer += `COMANDA: #${commandNumbers}\n`;
    }

    if (sale.code) {
      buffer += `Venda No: ${sale.code.slice(-6).toUpperCase()}\n`;
    }
    if (sale.customerCpf) {
      buffer += `CPF Cliente: ${sale.customerCpf}\n`;
    }

    buffer += this.separator() + '\n';

    // --- Items ---
    buffer += 'ITEM  COD   QTD   UN.VL     TOTAL\n';

    sale.items.forEach((item, index) => {
      const name = item.product.name.slice(0, this.width).toUpperCase();
      buffer += `${name}\n`;

      const seq = (index + 1).toString().padStart(3, '0');
      const code = item.product.code.slice(0, 4);
      const qtd = item.quantity.toString().padStart(3, ' ');
      const price = Number(item.price).toFixed(2).replace('.', ',');
      const total = (Number(item.price) * item.quantity).toFixed(2).replace('.', ',');

      const line = `${seq} ${code.padEnd(5)} ${qtd} x ${price.padStart(8)} ${total.padStart(9)}`;
      buffer += line.padStart(this.width) + '\n';
    });

    buffer += this.separator() + '\n';

    // --- Totals ---
    const total = Number(sale.total);
    const discount = sale.discount ? Number(sale.discount) : 0;
    const final = Number(sale.finalAmount);

    buffer += this.row('SUBTOTAL:', this.formatCurrency(total));
    if (discount > 0) {
      buffer += this.row('DESCONTO:', `-${this.formatCurrency(discount)}`);
    }
    buffer += this.row('TOTAL A PAGAR:', this.formatCurrency(final));

    buffer += this.separator() + '\n';

    // --- Payments ---
    buffer += this.center('FORMA DE PAGAMENTO') + '\n';
    sale.payments.forEach((p) => {
      const methodMap: Record<string, string> = {
        money: 'DINHEIRO',
        credit: 'CREDITO',
        debit: 'DEBITO',
        pix: 'PIX',
        CASH: 'DINHEIRO',
        CARD: 'CARTAO',
        OTHER: 'OUTROS',
      };

      const methodLabel = methodMap[p.method] || p.method.toUpperCase();
      buffer += this.row(methodLabel, this.formatCurrency(Number(p.amount)));
    });

    // Change (Troco) calculation
    const cashPay = sale.payments.find((p) => p.method === 'CASH');
    if (cashPay) {
      const paid = Number(cashPay.amount);
      // Heuristic: if cash payment causes overpayment, show change.
      // Note: sale.finalAmount is what was *charged*.
      // If system stored 'receivedAmount' separately we would use that.
      // Assuming 'payment.amount' is what was recorded as *paid* (received).
      if (paid > final && sale.payments.length === 1) {
        buffer += this.row('TROCO:', this.formatCurrency(paid - final));
      }
    }

    buffer += '\n';
    buffer += this.center('OBRIGADO PELA PREFERENCIA!') + '\n';
    buffer += this.center('VOLTE SEMPRE') + '\n';
    buffer += '\n\n\n';

    return buffer;
  }

  private center(text: string): string {
    const space = Math.max(0, this.width - text.length);
    const left = Math.floor(space / 2);
    return ' '.repeat(left) + text;
  }

  private separator(): string {
    return '-'.repeat(this.width);
  }

  private row(label: string, value: string): string {
    const space = Math.max(0, this.width - label.length - value.length);
    return label + ' '.repeat(space) + value + '\n';
  }

  private formatCurrency(value: number): string {
    // Basic formatting if locale fails in backend node env sometimes, but pt-BR usually works
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
