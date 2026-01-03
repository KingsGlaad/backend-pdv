import { Config, Sale, OrderItem, Payment, Product, Order } from '../../generated/prisma/client';

type SaleWithDetails = Sale & {
  items: (OrderItem & { product: Product })[];
  payments: Payment[];
  orders?: Order[];
};

export class ReceiptGenerator {
  private width = 40; // Default width, can be adjusted based on printer config

  constructor(private config?: Config) {
    // If we have printer width in config in future, use it
  }

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
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
