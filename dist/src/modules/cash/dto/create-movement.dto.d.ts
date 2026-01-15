export declare enum MovementType {
    SUPPLY = "SUPPLY",
    BLEED = "BLEED",
    SALE = "SALE",
    WITHDRAW = "WITHDRAW"
}
export declare class CreateMovementDto {
    sessionId: string;
    type: MovementType;
    amount: number;
    reason?: string;
}
