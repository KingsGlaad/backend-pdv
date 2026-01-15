"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SettingsService = class SettingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lookupCnpj(cnpj) {
        const cleanCnpj = cnpj.replace(/\D/g, '');
        if (cleanCnpj.length !== 14) {
            throw new common_1.BadRequestException('CNPJ inválido. Deve conter 14 dígitos.');
        }
        try {
            const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCnpj}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                },
            });
            if (!response.ok) {
                if (response.status === 404) {
                    throw new common_1.BadRequestException('CNPJ não encontrado na Receita Federal.');
                }
                else if (response.status === 429) {
                    throw new common_1.BadRequestException('Muitas requisições. Tente novamente mais tarde.');
                }
                throw new Error(`Erro na API externa: ${response.status} ${response.statusText}`);
            }
            const data = (await response.json());
            return {
                companyName: data.razao_social,
                tradingName: data.nome_fantasia || data.razao_social,
                cnpj: data.cnpj,
                phone: data.ddd_telefone_1,
                email: data.email,
                address: `${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Erro detalhado ao consultar CNPJ:', error);
            throw new common_1.InternalServerErrorException('Falha ao consultar serviço de CNPJ.');
        }
    }
    async getSettings() {
        return await this.prisma.config.findFirst();
    }
    async saveSettings(dto) {
        const settings = await this.prisma.config.findFirst();
        if (settings) {
            const { id, ...data } = dto;
            return this.prisma.config.update({
                where: { id: settings.id },
                data,
            });
        }
        return this.prisma.config.create({ data: dto });
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SettingsService);
//# sourceMappingURL=settings.service.js.map