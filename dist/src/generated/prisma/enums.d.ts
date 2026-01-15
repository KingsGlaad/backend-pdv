export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly CASHIER: "CASHIER";
    readonly WAITER: "WAITER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const OrderStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
    readonly CANCELED: "CANCELED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const OrderItemStatus: {
    readonly SENT: "SENT";
    readonly PREPARING: "PREPARING";
    readonly DONE: "DONE";
    readonly CANCELED: "CANCELED";
};
export type OrderItemStatus = (typeof OrderItemStatus)[keyof typeof OrderItemStatus];
export declare const SaleStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
};
export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly PIX: "PIX";
    readonly CARD: "CARD";
    readonly OTHER: "OTHER";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELED: "CANCELED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const CashRegisterStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
};
export type CashRegisterStatus = (typeof CashRegisterStatus)[keyof typeof CashRegisterStatus];
export declare const CashMovementType: {
    readonly SALE: "SALE";
    readonly SUPPLY: "SUPPLY";
    readonly WITHDRAW: "WITHDRAW";
    readonly ADJUSTMENT: "ADJUSTMENT";
};
export type CashMovementType = (typeof CashMovementType)[keyof typeof CashMovementType];
export declare const DrawerOpenReason: {
    readonly SALE: "SALE";
    readonly MANUAL: "MANUAL";
    readonly ERROR: "ERROR";
};
export type DrawerOpenReason = (typeof DrawerOpenReason)[keyof typeof DrawerOpenReason];
export declare const InventoryMovementType: {
    readonly IN: "IN";
    readonly OUT: "OUT";
    readonly LOSS: "LOSS";
    readonly ADJUSTMENT: "ADJUSTMENT";
};
export type InventoryMovementType = (typeof InventoryMovementType)[keyof typeof InventoryMovementType];
export declare const ProductUnit: {
    readonly UNIT: "UNIT";
    readonly GRAM: "GRAM";
    readonly KILOGRAM: "KILOGRAM";
    readonly LITER: "LITER";
    readonly MILLILITER: "MILLILITER";
};
export type ProductUnit = (typeof ProductUnit)[keyof typeof ProductUnit];
