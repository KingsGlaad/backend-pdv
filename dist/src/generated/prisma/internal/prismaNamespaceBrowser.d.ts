import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Product: "Product";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Sale: "Sale";
    readonly Payment: "Payment";
    readonly CashRegister: "CashRegister";
    readonly CashSession: "CashSession";
    readonly CashMovement: "CashMovement";
    readonly CashDrawerLog: "CashDrawerLog";
    readonly InventoryItem: "InventoryItem";
    readonly InventoryMovement: "InventoryMovement";
    readonly Config: "Config";
    readonly PrinterConfig: "PrinterConfig";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price: "price";
    readonly category: "category";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly code: "code";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly number: "number";
    readonly table: "table";
    readonly status: "status";
    readonly openedAt: "openedAt";
    readonly closedAt: "closedAt";
    readonly openedById: "openedById";
    readonly createdAt: "createdAt";
    readonly saleId: "saleId";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly saleId: "saleId";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const SaleScalarFieldEnum: {
    readonly id: "id";
    readonly discount: "discount";
    readonly createdAt: "createdAt";
    readonly cashSessionId: "cashSessionId";
    readonly code: "code";
    readonly customerCpf: "customerCpf";
    readonly paymentMethod: "paymentMethod";
    readonly total: "total";
    readonly userId: "userId";
    readonly finalAmount: "finalAmount";
    readonly status: "status";
};
export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly saleId: "saleId";
    readonly method: "method";
    readonly amount: "amount";
    readonly status: "status";
    readonly reference: "reference";
    readonly createdAt: "createdAt";
    readonly cashMovementId: "cashMovementId";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const CashRegisterScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly isActive: "isActive";
};
export type CashRegisterScalarFieldEnum = (typeof CashRegisterScalarFieldEnum)[keyof typeof CashRegisterScalarFieldEnum];
export declare const CashSessionScalarFieldEnum: {
    readonly id: "id";
    readonly cashRegisterId: "cashRegisterId";
    readonly openedAt: "openedAt";
    readonly closedAt: "closedAt";
    readonly difference: "difference";
    readonly finalBalance: "finalBalance";
    readonly initialBalance: "initialBalance";
    readonly systemBalance: "systemBalance";
    readonly userId: "userId";
    readonly status: "status";
};
export type CashSessionScalarFieldEnum = (typeof CashSessionScalarFieldEnum)[keyof typeof CashSessionScalarFieldEnum];
export declare const CashMovementScalarFieldEnum: {
    readonly id: "id";
    readonly amount: "amount";
    readonly createdAt: "createdAt";
    readonly reason: "reason";
    readonly sessionId: "sessionId";
    readonly type: "type";
};
export type CashMovementScalarFieldEnum = (typeof CashMovementScalarFieldEnum)[keyof typeof CashMovementScalarFieldEnum];
export declare const CashDrawerLogScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly action: "action";
    readonly cashRegisterId: "cashRegisterId";
    readonly userId: "userId";
};
export type CashDrawerLogScalarFieldEnum = (typeof CashDrawerLogScalarFieldEnum)[keyof typeof CashDrawerLogScalarFieldEnum];
export declare const InventoryItemScalarFieldEnum: {
    readonly id: "id";
    readonly updatedAt: "updatedAt";
    readonly minStock: "minStock";
    readonly quantity: "quantity";
    readonly productId: "productId";
};
export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum];
export declare const InventoryMovementScalarFieldEnum: {
    readonly id: "id";
    readonly inventoryItemId: "inventoryItemId";
    readonly quantity: "quantity";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
    readonly type: "type";
};
export type InventoryMovementScalarFieldEnum = (typeof InventoryMovementScalarFieldEnum)[keyof typeof InventoryMovementScalarFieldEnum];
export declare const ConfigScalarFieldEnum: {
    readonly id: "id";
    readonly appName: "appName";
    readonly logoUrl: "logoUrl";
    readonly theme: "theme";
    readonly currency: "currency";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly address: "address";
    readonly cnpj: "cnpj";
    readonly companyName: "companyName";
    readonly email: "email";
    readonly phone: "phone";
    readonly stateRegistration: "stateRegistration";
    readonly tradingName: "tradingName";
};
export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum];
export declare const PrinterConfigScalarFieldEnum: {
    readonly id: "id";
    readonly terminalId: "terminalId";
    readonly name: "name";
    readonly printerName: "printerName";
    readonly printerType: "printerType";
    readonly connection: "connection";
    readonly width: "width";
    readonly enabled: "enabled";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PrinterConfigScalarFieldEnum = (typeof PrinterConfigScalarFieldEnum)[keyof typeof PrinterConfigScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
