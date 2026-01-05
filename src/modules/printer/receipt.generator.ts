import {
  Config,
  Sale,
  OrderItem,
  Payment,
  Product,
  Order,
  PrinterConfig,
} from '../../generated/prisma/client';
import * as escpos from 'escpos';
import * as path from 'path';

type SaleWithDetails = Sale & {
  items: (OrderItem & { product: Product })[];
  payments: Payment[];
  orders?: Order[];
};

export class ReceiptGenerator {
  constructor(
    private config?: Config,
    private printerConfig?: PrinterConfig,
  ) {}

  async printSale(printer: escpos.Printer, sale: SaleWithDetails) {
    // 1. Logo (Removed/Text Only requested)
    // if (this.config?.logoUrl) { ... }

    // 2. Header
    printer.align('ct');

    if (this.config?.companyName) {
      printer.style('b').text(this.config.companyName.toUpperCase()).style('n');
    }
    if (this.config?.tradingName && this.config.tradingName !== this.config.companyName) {
      printer.text(this.config.tradingName.toUpperCase());
    }
    if (this.config?.cnpj) {
      printer.text(`CNPJ: ${this.config.cnpj}`);
    }
    if (this.config?.address) {
      printer.text(this.config.address);
    }
    if (this.config?.phone) {
      printer.text(`Tel: ${this.config.phone}`);
    }

    printer.text('--------------------------------');

    // 3. Sale Info
    printer.align('lt');
    printer.text(`Data: ${sale.createdAt.toLocaleString('pt-BR')}`);

    if (sale.orders && sale.orders.length > 0) {
      const commandNumbers = sale.orders.map((o) => o.number).join(', ');
      printer.text(`COMANDA: #${commandNumbers}`);
    }
    if (sale.code) {
      printer.text(`Venda: ${sale.code.slice(-6).toUpperCase()}`);
    }
    if (sale.customerCpf) {
      printer.text(`CPF: ${sale.customerCpf}`);
    }

    printer.text('--------------------------------');

    // 4. Items
    // Using tableCustom for better column control [Text, Align, Width ratio]
    // Standard width is roughly 32-48 chars.
    // We will use simple text formatting to ensure it fits any width.

    printer.tableCustom([
      { text: 'ITEM', align: 'LEFT', width: 0.45 },
      { text: 'QTD', align: 'CENTER', width: 0.15 },
      { text: 'VL.UN', align: 'RIGHT', width: 0.2 },
      { text: 'TOTAL', align: 'RIGHT', width: 0.2 },
    ]);

    sale.items.forEach((item) => {
      const total = Number(item.price) * item.quantity;
      printer.tableCustom([
        { text: item.product.name.substring(0, 20), align: 'LEFT', width: 0.45 },
        { text: item.quantity.toString(), align: 'CENTER', width: 0.15 },
        { text: Number(item.price).toFixed(2), align: 'RIGHT', width: 0.2 },
        { text: total.toFixed(2), align: 'RIGHT', width: 0.2 },
      ]);
    });

    printer.text('--------------------------------');

    // 5. Totals
    const total = Number(sale.total);
    const discount = sale.discount ? Number(sale.discount) : 0;
    const final = Number(sale.finalAmount);

    printer.align('rt');
    printer.text(`SUBTOTAL: ${this.formatCurrency(total)}`);
    if (discount > 0) {
      printer.text(`DESCONTO: -${this.formatCurrency(discount)}`);
    }
    printer
      .style('b')
      .size(1, 1)
      .text(`TOTAL: ${this.formatCurrency(final)}`)
      .style('n')
      .size(0, 0);

    printer.text('--------------------------------');

    // 6. Payments
    printer.align('ct').text('FORMA DE PAGAMENTO').align('lt');

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
      const label = methodMap[p.method] || p.method;
      printer.tableCustom([
        { text: label.toUpperCase(), align: 'LEFT', width: 0.5 },
        { text: this.formatCurrency(Number(p.amount)), align: 'RIGHT', width: 0.5 },
      ]);
    });

    // Change
    const cashPay = sale.payments.find((p) => p.method === 'CASH');
    if (cashPay) {
      const paid = Number(cashPay.amount);
      if (paid > final) {
        printer.tableCustom([
          { text: 'TROCO', align: 'LEFT', width: 0.5 },
          { text: this.formatCurrency(paid - final), align: 'RIGHT', width: 0.5 },
        ]);
      }
    }

    printer.feed(1);
    printer.align('ct').text('OBRIGADO PELA PREFERENCIA!');

    // 7. QRCode for Receipt URL
    const baseUrl = 'http://localhost:3000'; // Default
    const receiptUrl = `${baseUrl}/receipts/${sale.id}`;

    printer.feed(1);

    return new Promise<void>((resolve) => {
      try {
        printer.qrimage(receiptUrl, function (err) {
          if (err) {
            console.error('QR Code error:', err);
            // Fallback if QR fails? execute closing anyway
          }
          // Use 'printer' instance from closure instead of 'this' to be safe
          printer.feed(2);
          printer.cut();
          printer.close();
          resolve();
        });
      } catch (e) {
        console.error('QR generation failed synchronously:', e);
        printer.feed(2);
        printer.cut();
        printer.close();
        resolve(); // Resolve even on error to finish flow
      }
    });
  }

  async printTest(printer: escpos.Printer) {
    printer.align('ct').style('b').text('TESTE DE IMPRESSAO').style('n');
    printer.text('--------------------------------');
    printer.align('lt');
    printer.text('Se voce esta lendo isso,');
    printer.text('sua impressora esta configurada');
    printer.text('corretamente!');
    printer.feed(1);
    printer.text(`Data: ${new Date().toLocaleString('pt-BR')}`);
    printer.feed(2);
    printer.cut();
    printer.close();
  }

  private formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
