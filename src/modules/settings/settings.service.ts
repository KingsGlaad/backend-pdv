import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSettingsDto } from './dto/create-settings.dto';

interface BrasilApiResponse {
  razao_social: string;
  nome_fantasia: string;
  cnpj: string;
  ddd_telefone_1: string;
  email: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
}

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async lookupCnpj(cnpj: string) {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    if (cleanCnpj.length !== 14) {
      throw new BadRequestException('CNPJ inválido. Deve conter 14 dígitos.');
    }

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCnpj}`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new BadRequestException('CNPJ não encontrado na Receita Federal.');
        } else if (response.status === 429) {
          throw new BadRequestException('Muitas requisições. Tente novamente mais tarde.');
        }
        throw new Error(`Erro na API externa: ${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as BrasilApiResponse;
      return {
        companyName: data.razao_social,
        tradingName: data.nome_fantasia || data.razao_social,
        cnpj: data.cnpj,
        phone: data.ddd_telefone_1,
        email: data.email,
        address: `${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Erro detalhado ao consultar CNPJ:', error);
      throw new InternalServerErrorException('Falha ao consultar serviço de CNPJ.');
    }
  }

  async getSettings() {
    return await this.prisma.config.findFirst();
  }

  async saveSettings(dto: CreateSettingsDto) {
    const settings = await this.prisma.config.findFirst();

    if (settings) {
      // Remove id from dto if it exists to avoid trying to update the primary key with same/different value
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...data } = dto;
      return this.prisma.config.update({
        where: { id: settings.id },
        data,
      });
    }

    return this.prisma.config.create({ data: dto });
  }
}
