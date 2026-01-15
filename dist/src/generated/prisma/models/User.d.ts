import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    active: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: $Enums.UserRole;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    active?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogListRelationFilter;
    cashSessions?: Prisma.CashSessionListRelationFilter;
    inventoryMovirements?: Prisma.InventoryMovementListRelationFilter;
    ordersOpened?: Prisma.OrderListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    drawerLogs?: Prisma.CashDrawerLogOrderByRelationAggregateInput;
    cashSessions?: Prisma.CashSessionOrderByRelationAggregateInput;
    inventoryMovirements?: Prisma.InventoryMovementOrderByRelationAggregateInput;
    ordersOpened?: Prisma.OrderOrderByRelationAggregateInput;
    sales?: Prisma.SaleOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    active?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogListRelationFilter;
    cashSessions?: Prisma.CashSessionListRelationFilter;
    inventoryMovirements?: Prisma.InventoryMovementListRelationFilter;
    ordersOpened?: Prisma.OrderListRelationFilter;
    sales?: Prisma.SaleListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    active?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderUncheckedCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUncheckedUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUncheckedUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserCreateNestedOneWithoutOrdersOpenedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersOpenedInput, Prisma.UserUncheckedCreateWithoutOrdersOpenedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersOpenedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersOpenedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersOpenedInput, Prisma.UserUncheckedCreateWithoutOrdersOpenedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersOpenedInput;
    upsert?: Prisma.UserUpsertWithoutOrdersOpenedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersOpenedInput, Prisma.UserUpdateWithoutOrdersOpenedInput>, Prisma.UserUncheckedUpdateWithoutOrdersOpenedInput>;
};
export type UserCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.UserUpsertWithoutSalesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSalesInput, Prisma.UserUpdateWithoutSalesInput>, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserCreateNestedOneWithoutCashSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCashSessionsInput, Prisma.UserUncheckedCreateWithoutCashSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCashSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCashSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCashSessionsInput, Prisma.UserUncheckedCreateWithoutCashSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCashSessionsInput;
    upsert?: Prisma.UserUpsertWithoutCashSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCashSessionsInput, Prisma.UserUpdateWithoutCashSessionsInput>, Prisma.UserUncheckedUpdateWithoutCashSessionsInput>;
};
export type UserCreateNestedOneWithoutDrawerLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDrawerLogsInput, Prisma.UserUncheckedCreateWithoutDrawerLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDrawerLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDrawerLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDrawerLogsInput, Prisma.UserUncheckedCreateWithoutDrawerLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDrawerLogsInput;
    upsert?: Prisma.UserUpsertWithoutDrawerLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDrawerLogsInput, Prisma.UserUpdateWithoutDrawerLogsInput>, Prisma.UserUncheckedUpdateWithoutDrawerLogsInput>;
};
export type UserCreateNestedOneWithoutInventoryMovirementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInventoryMovirementsInput, Prisma.UserUncheckedCreateWithoutInventoryMovirementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInventoryMovirementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutInventoryMovirementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInventoryMovirementsInput, Prisma.UserUncheckedCreateWithoutInventoryMovirementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInventoryMovirementsInput;
    upsert?: Prisma.UserUpsertWithoutInventoryMovirementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInventoryMovirementsInput, Prisma.UserUpdateWithoutInventoryMovirementsInput>, Prisma.UserUncheckedUpdateWithoutInventoryMovirementsInput>;
};
export type UserCreateWithoutOrdersOpenedInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersOpenedInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutUserInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersOpenedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersOpenedInput, Prisma.UserUncheckedCreateWithoutOrdersOpenedInput>;
};
export type UserUpsertWithoutOrdersOpenedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersOpenedInput, Prisma.UserUncheckedUpdateWithoutOrdersOpenedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersOpenedInput, Prisma.UserUncheckedCreateWithoutOrdersOpenedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersOpenedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersOpenedInput, Prisma.UserUncheckedUpdateWithoutOrdersOpenedInput>;
};
export type UserUpdateWithoutOrdersOpenedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersOpenedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUncheckedUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutUserNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSalesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderCreateNestedManyWithoutOpenedByInput;
};
export type UserUncheckedCreateWithoutSalesInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderUncheckedCreateNestedManyWithoutOpenedByInput;
};
export type UserCreateOrConnectWithoutSalesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
};
export type UserUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSalesInput, Prisma.UserUncheckedCreateWithoutSalesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSalesInput, Prisma.UserUncheckedUpdateWithoutSalesInput>;
};
export type UserUpdateWithoutSalesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUpdateManyWithoutOpenedByNestedInput;
};
export type UserUncheckedUpdateWithoutSalesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUncheckedUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUncheckedUpdateManyWithoutOpenedByNestedInput;
};
export type UserCreateWithoutCashSessionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCashSessionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderUncheckedCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCashSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCashSessionsInput, Prisma.UserUncheckedCreateWithoutCashSessionsInput>;
};
export type UserUpsertWithoutCashSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCashSessionsInput, Prisma.UserUncheckedUpdateWithoutCashSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCashSessionsInput, Prisma.UserUncheckedCreateWithoutCashSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCashSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCashSessionsInput, Prisma.UserUncheckedUpdateWithoutCashSessionsInput>;
};
export type UserUpdateWithoutCashSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCashSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUncheckedUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDrawerLogsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    cashSessions?: Prisma.CashSessionCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutDrawerLogsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    cashSessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutUserInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderUncheckedCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutDrawerLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDrawerLogsInput, Prisma.UserUncheckedCreateWithoutDrawerLogsInput>;
};
export type UserUpsertWithoutDrawerLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDrawerLogsInput, Prisma.UserUncheckedUpdateWithoutDrawerLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDrawerLogsInput, Prisma.UserUncheckedCreateWithoutDrawerLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDrawerLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDrawerLogsInput, Prisma.UserUncheckedUpdateWithoutDrawerLogsInput>;
};
export type UserUpdateWithoutDrawerLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cashSessions?: Prisma.CashSessionUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDrawerLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cashSessions?: Prisma.CashSessionUncheckedUpdateManyWithoutUserNestedInput;
    inventoryMovirements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUncheckedUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutInventoryMovirementsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutInventoryMovirementsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    active?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutUserInput;
    cashSessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutUserInput;
    ordersOpened?: Prisma.OrderUncheckedCreateNestedManyWithoutOpenedByInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutInventoryMovirementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInventoryMovirementsInput, Prisma.UserUncheckedCreateWithoutInventoryMovirementsInput>;
};
export type UserUpsertWithoutInventoryMovirementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInventoryMovirementsInput, Prisma.UserUncheckedUpdateWithoutInventoryMovirementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInventoryMovirementsInput, Prisma.UserUncheckedCreateWithoutInventoryMovirementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInventoryMovirementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInventoryMovirementsInput, Prisma.UserUncheckedUpdateWithoutInventoryMovirementsInput>;
};
export type UserUpdateWithoutInventoryMovirementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutInventoryMovirementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    drawerLogs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput;
    cashSessions?: Prisma.CashSessionUncheckedUpdateManyWithoutUserNestedInput;
    ordersOpened?: Prisma.OrderUncheckedUpdateManyWithoutOpenedByNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    drawerLogs: number;
    cashSessions: number;
    inventoryMovirements: number;
    ordersOpened: number;
    sales: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    drawerLogs?: boolean | UserCountOutputTypeCountDrawerLogsArgs;
    cashSessions?: boolean | UserCountOutputTypeCountCashSessionsArgs;
    inventoryMovirements?: boolean | UserCountOutputTypeCountInventoryMovirementsArgs;
    ordersOpened?: boolean | UserCountOutputTypeCountOrdersOpenedArgs;
    sales?: boolean | UserCountOutputTypeCountSalesArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountDrawerLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashDrawerLogWhereInput;
};
export type UserCountOutputTypeCountCashSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashSessionWhereInput;
};
export type UserCountOutputTypeCountInventoryMovirementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
};
export type UserCountOutputTypeCountOrdersOpenedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    drawerLogs?: boolean | Prisma.User$drawerLogsArgs<ExtArgs>;
    cashSessions?: boolean | Prisma.User$cashSessionsArgs<ExtArgs>;
    inventoryMovirements?: boolean | Prisma.User$inventoryMovirementsArgs<ExtArgs>;
    ordersOpened?: boolean | Prisma.User$ordersOpenedArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    active?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "active" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    drawerLogs?: boolean | Prisma.User$drawerLogsArgs<ExtArgs>;
    cashSessions?: boolean | Prisma.User$cashSessionsArgs<ExtArgs>;
    inventoryMovirements?: boolean | Prisma.User$inventoryMovirementsArgs<ExtArgs>;
    ordersOpened?: boolean | Prisma.User$ordersOpenedArgs<ExtArgs>;
    sales?: boolean | Prisma.User$salesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        drawerLogs: Prisma.$CashDrawerLogPayload<ExtArgs>[];
        cashSessions: Prisma.$CashSessionPayload<ExtArgs>[];
        inventoryMovirements: Prisma.$InventoryMovementPayload<ExtArgs>[];
        ordersOpened: Prisma.$OrderPayload<ExtArgs>[];
        sales: Prisma.$SalePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: $Enums.UserRole;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    drawerLogs<T extends Prisma.User$drawerLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$drawerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cashSessions<T extends Prisma.User$cashSessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cashSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventoryMovirements<T extends Prisma.User$inventoryMovirementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$inventoryMovirementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersOpened<T extends Prisma.User$ordersOpenedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersOpenedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sales<T extends Prisma.User$salesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly active: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$drawerLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    where?: Prisma.CashDrawerLogWhereInput;
    orderBy?: Prisma.CashDrawerLogOrderByWithRelationInput | Prisma.CashDrawerLogOrderByWithRelationInput[];
    cursor?: Prisma.CashDrawerLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashDrawerLogScalarFieldEnum | Prisma.CashDrawerLogScalarFieldEnum[];
};
export type User$cashSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where?: Prisma.CashSessionWhereInput;
    orderBy?: Prisma.CashSessionOrderByWithRelationInput | Prisma.CashSessionOrderByWithRelationInput[];
    cursor?: Prisma.CashSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashSessionScalarFieldEnum | Prisma.CashSessionScalarFieldEnum[];
};
export type User$inventoryMovirementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where?: Prisma.InventoryMovementWhereInput;
    orderBy?: Prisma.InventoryMovementOrderByWithRelationInput | Prisma.InventoryMovementOrderByWithRelationInput[];
    cursor?: Prisma.InventoryMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryMovementScalarFieldEnum | Prisma.InventoryMovementScalarFieldEnum[];
};
export type User$ordersOpenedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type User$salesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleScalarFieldEnum | Prisma.SaleScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
