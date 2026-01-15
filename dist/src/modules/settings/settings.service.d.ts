import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSettingsDto } from './dto/create-settings.dto';
export declare class SettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    lookupCnpj(cnpj: string): Promise<{
        companyName: string;
        tradingName: string;
        cnpj: string;
        phone: string;
        email: string;
        address: string;
    }>;
    getSettings(): Promise<{
        id: string;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        appName: string;
        logoUrl: string | null;
        theme: string;
        currency: string;
        address: string | null;
        cnpj: string | null;
        companyName: string | null;
        phone: string | null;
        stateRegistration: string | null;
        tradingName: string | null;
    } | null>;
    saveSettings(dto: CreateSettingsDto): Promise<{
        id: string;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        appName: string;
        logoUrl: string | null;
        theme: string;
        currency: string;
        address: string | null;
        cnpj: string | null;
        companyName: string | null;
        phone: string | null;
        stateRegistration: string | null;
        tradingName: string | null;
    }>;
}
