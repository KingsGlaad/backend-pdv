"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptGenerator = void 0;
class ReceiptGenerator {
    config;
    printerConfig;
    constructor(config, printerConfig) {
        this.config = config;
        this.printerConfig = printerConfig;
    }
    generateReceiptText(sale) {
        const lines = [];
        const width = 48;
        const center = (text) => {
            const padding = Math.max(0, Math.floor((width - text.length) / 2));
            return ' '.repeat(padding) + text;
        };
        const divider = () => {
            return '-'.repeat(width);
        };
        const twoColumns = (left, right) => {
            const spaces = width - left.length - right.length;
            return left + ' '.repeat(Math.max(1, spaces)) + right;
        };
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
        lines.push('ITEM                      QTD  VL.UN    TOTAL');
        lines.push(divider());
        sale.items.forEach((item) => {
            const total = Number(item.price) * item.quantity;
            const itemName = item.product.name.substring(0, 25).padEnd(25);
            const qty = item.quantity.toString().padStart(4);
            const unitPrice = Number(item.price).toFixed(2).padStart(7);
            const totalPrice = total.toFixed(2).padStart(9);
            lines.push(`${itemName} ${qty} ${unitPrice} ${totalPrice}`);
        });
        lines.push(divider());
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
        lines.push(center('FORMA DE PAGAMENTO'));
        lines.push('');
        sale.payments.forEach((p) => {
            const methodMap = {
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
        const baseUrl = 'http://localhost:3000';
        const receiptUrl = `${baseUrl}/receipts/${sale.id}`;
        lines.push(center('Acesse seu recibo em:'));
        lines.push(center(receiptUrl));
        lines.push('');
        lines.push('');
        lines.push('');
        return lines.join('\n');
    }
    generateTestText() {
        const lines = [];
        const width = 48;
        const center = (text) => {
            const padding = Math.max(0, Math.floor((width - text.length) / 2));
            return ' '.repeat(padding) + text;
        };
        const divider = () => {
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
    async printText(text, printerName) {
        const fs = require('fs');
        const { exec } = require('child_process');
        const path = require('path');
        const tempFile = path.join('/tmp', `receipt_${Date.now()}.txt`);
        return new Promise((resolve, reject) => {
            fs.writeFile(tempFile, text, { encoding: 'utf8' }, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                let command;
                if (process.platform === 'win32') {
                    command = printerName
                        ? `print /D:"${printerName}" "${tempFile}"`
                        : `notepad /p "${tempFile}"`;
                }
                else {
                    command = printerName ? `lp -d ${printerName} "${tempFile}"` : `lp "${tempFile}"`;
                }
                exec(command, (error) => {
                    fs.unlink(tempFile, () => { });
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    }
    async printSale(sale, printerName) {
        const text = this.generateReceiptText(sale);
        return this.printText(text, printerName);
    }
    async printTest(printerName) {
        const text = this.generateTestText();
        return this.printText(text, printerName);
    }
    formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
exports.ReceiptGenerator = ReceiptGenerator;
//# sourceMappingURL=receipt.generator.js.map