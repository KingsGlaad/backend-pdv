import {
  Config,
  Sale,
  OrderItem,
  Payment,
  Product,
  Order,
  PrinterConfig,
} from '../../generated/prisma/client';

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

  /**
   * Gera o texto do recibo formatado para impressoras térmicas padrão
   * Retorna uma string que pode ser enviada diretamente para a impressora
   */
  generateReceiptText(sale: SaleWithDetails): string {
    const lines: string[] = [];
    const width = 48; // Largura padrão da impressora térmica (48 caracteres)

    // Função auxiliar para centralizar texto
    const center = (text: string): string => {
      const padding = Math.max(0, Math.floor((width - text.length) / 2));
      return ' '.repeat(padding) + text;
    };

    // Função auxiliar para criar linha divisória
    const divider = (): string => {
      return '-'.repeat(width);
    };

    // Função auxiliar para formatar linha com duas colunas
    const twoColumns = (left: string, right: string): string => {
      const spaces = width - left.length - right.length;
      return left + ' '.repeat(Math.max(1, spaces)) + right;
    };

    // 1. Header
    if (this.config?.companyName) {
      lines.push(center(this.config.companyName.toUpperCase()));
    }
    if (this.config?.tradingName && this.config.tradingName !== this.config.companyName) {
      lines.push(center(this.config.tradingName.toUpperCase()));
    }
    if (this.config?.cnpj) {
      lines.push(center(`CNPJ: ${this.config.cnpj}`));
    }
    if (this.config?.address) {
      lines.push(center(this.config.address));
    }
    if (this.config?.phone) {
      lines.push(center(`Tel: ${this.config.phone}`));
    }

    lines.push(divider());

    // 2. Sale Info
    lines.push(`Data: ${sale.createdAt.toLocaleString('pt-BR')}`);

    if (sale.orders && sale.orders.length > 0) {
      const commandNumbers = sale.orders.map((o) => o.number).join(', ');
      lines.push(`COMANDA: #${commandNumbers}`);
    }
    if (sale.code) {
      lines.push(`Venda: ${sale.code.slice(-6).toUpperCase()}`);
    }
    if (sale.customerCpf) {
      lines.push(`CPF: ${sale.customerCpf}`);
    }

    lines.push(divider());

    // 3. Items Header
    lines.push('ITEM                      QTD  VL.UN    TOTAL');
    lines.push(divider());

    // 4. Items
    sale.items.forEach((item) => {
      const total = Number(item.price) * item.quantity;
      const itemName = item.product.name.substring(0, 25).padEnd(25);
      const qty = item.quantity.toString().padStart(4);
      const unitPrice = Number(item.price).toFixed(2).padStart(7);
      const totalPrice = total.toFixed(2).padStart(9);

      lines.push(`${itemName} ${qty} ${unitPrice} ${totalPrice}`);
    });

    lines.push(divider());

    // 5. Totals
    const total = Number(sale.total);
    const discount = sale.discount ? Number(sale.discount) : 0;
    const final = Number(sale.finalAmount);

    lines.push(twoColumns('SUBTOTAL:', this.formatCurrency(total)));
    if (discount > 0) {
      lines.push(twoColumns('DESCONTO:', `-${this.formatCurrency(discount)}`));
    }
    lines.push('');
    lines.push(twoColumns('*** TOTAL:', `${this.formatCurrency(final)} ***`));

    lines.push(divider());

    // 6. Payments
    lines.push(center('FORMA DE PAGAMENTO'));
    lines.push('');

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
      lines.push(twoColumns(label.toUpperCase(), this.formatCurrency(Number(p.amount))));
    });

    // Change
    const cashPay = sale.payments.find((p) => p.method === 'CASH');
    if (cashPay) {
      const paid = Number(cashPay.amount);
      if (paid > final) {
        lines.push(twoColumns('TROCO', this.formatCurrency(paid - final)));
      }
    }

    lines.push('');
    lines.push(center('OBRIGADO PELA PREFERENCIA!'));
    lines.push('');

    // 7. Receipt URL
    const baseUrl = 'http://localhost:3000';
    const receiptUrl = `${baseUrl}/receipts/${sale.id}`;
    lines.push(center('Acesse seu recibo em:'));
    lines.push(center(receiptUrl));

    lines.push('');
    lines.push('');
    lines.push('');

    return lines.join('\n');
  }

  /**
   * Gera o texto do teste de impressão
   */
  generateTestText(): string {
    const lines: string[] = [];
    const width = 48;

    const center = (text: string): string => {
      const padding = Math.max(0, Math.floor((width - text.length) / 2));
      return ' '.repeat(padding) + text;
    };

    const divider = (): string => {
      return '-'.repeat(width);
    };

    lines.push(center('*** TESTE DE IMPRESSAO ***'));
    lines.push(divider());
    lines.push('');
    lines.push('Se voce esta lendo isso,');
    lines.push('sua impressora esta configurada');
    lines.push('corretamente!');
    lines.push('');
    lines.push(`Data: ${new Date().toLocaleString('pt-BR')}`);
    lines.push('');
    lines.push(center('Teste de caracteres especiais:'));
    lines.push('ACENTUACAO: á é í ó ú ã õ ç');
    lines.push('MAIUSCULAS: Á É Í Ó Ú Ã Õ Ç');
    lines.push('');
    lines.push('');
    lines.push('');

    return lines.join('\n');
  }

  /**
   * Envia texto diretamente para a impressora (Windows/Linux)
   * Para Windows: usar comando 'print /D:LPT1 arquivo.txt' ou similar
   * Para Linux: usar 'lp -d printer_name arquivo.txt'
   */
  async printText(text: string, printerName?: string): Promise<void> {
    const fs = require('fs');
    const { exec } = require('child_process');
    const path = require('path');

    // Criar arquivo temporário
    const tempFile = path.join('/tmp', `receipt_${Date.now()}.txt`);

    return new Promise((resolve, reject) => {
      // Escrever arquivo com encoding correto
      fs.writeFile(tempFile, text, { encoding: 'utf8' }, (err: any) => {
        if (err) {
          reject(err);
          return;
        }

        // Comando para imprimir (ajustar conforme o sistema)
        let command: string;

        if (process.platform === 'win32') {
          // Windows
          command = printerName
            ? `print /D:"${printerName}" "${tempFile}"`
            : `notepad /p "${tempFile}"`;
        } else {
          // Linux/Mac
          command = printerName ? `lp -d ${printerName} "${tempFile}"` : `lp "${tempFile}"`;
        }

        exec(command, (error: any) => {
          // Remover arquivo temporário
          fs.unlink(tempFile, () => {});

          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    });
  }

  /**
   * Método de conveniência para imprimir venda
   */
  async printSale(sale: SaleWithDetails, printerName?: string): Promise<void> {
    const text = this.generateReceiptText(sale);
    return this.printText(text, printerName);
  }

  /**
   * Método de conveniência para imprimir teste
   */
  async printTest(printerName?: string): Promise<void> {
    const text = this.generateTestText();
    return this.printText(text, printerName);
  }

  private formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
