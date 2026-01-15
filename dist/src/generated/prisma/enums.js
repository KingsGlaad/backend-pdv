"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnit = exports.InventoryMovementType = exports.DrawerOpenReason = exports.CashMovementType = exports.CashRegisterStatus = exports.PaymentStatus = exports.PaymentMethod = exports.SaleStatus = exports.OrderItemStatus = exports.OrderStatus = exports.UserRole = void 0;
exports.UserRole = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    CASHIER: 'CASHIER',
    WAITER: 'WAITER'
};
exports.OrderStatus = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED',
    CANCELED: 'CANCELED'
};
exports.OrderItemStatus = {
    SENT: 'SENT',
    PREPARING: 'PREPARING',
    DONE: 'DONE',
    CANCELED: 'CANCELED'
};
exports.SaleStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    CANCELED: 'CANCELED'
};
exports.PaymentMethod = {
    CASH: 'CASH',
    PIX: 'PIX',
    CARD: 'CARD',
    OTHER: 'OTHER'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELED: 'CANCELED'
};
exports.CashRegisterStatus = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
};
exports.CashMovementType = {
    SALE: 'SALE',
    SUPPLY: 'SUPPLY',
    WITHDRAW: 'WITHDRAW',
    ADJUSTMENT: 'ADJUSTMENT'
};
exports.DrawerOpenReason = {
    SALE: 'SALE',
    MANUAL: 'MANUAL',
    ERROR: 'ERROR'
};
exports.InventoryMovementType = {
    IN: 'IN',
    OUT: 'OUT',
    LOSS: 'LOSS',
    ADJUSTMENT: 'ADJUSTMENT'
};
exports.ProductUnit = {
    UNIT: 'UNIT',
    GRAM: 'GRAM',
    KILOGRAM: 'KILOGRAM',
    LITER: 'LITER',
    MILLILITER: 'MILLILITER'
};
//# sourceMappingURL=enums.js.map