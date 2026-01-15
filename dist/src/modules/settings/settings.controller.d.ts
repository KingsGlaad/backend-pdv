import { SettingsService } from './settings.service';
import { CreateSettingsDto } from './dto/create-settings.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
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
    lookupCnpj(cnpj: string): Promise<{
        companyName: string;
        tradingName: string;
        cnpj: string;
        phone: string;
        email: string;
        address: string;
    }>;
    createSettings(dto: CreateSettingsDto): Promise<{
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
    uploadLogo(file: Express.Multer.File): {
        url: string;
    };
}
