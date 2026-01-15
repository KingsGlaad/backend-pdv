import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$CashSessionPayload>;
export type AggregateCashSession = {
    _count: CashSessionCountAggregateOutputType | null;
    _avg: CashSessionAvgAggregateOutputType | null;
    _sum: CashSessionSumAggregateOutputType | null;
    _min: CashSessionMinAggregateOutputType | null;
    _max: CashSessionMaxAggregateOutputType | null;
};
export type CashSessionAvgAggregateOutputType = {
    difference: runtime.Decimal | null;
    finalBalance: runtime.Decimal | null;
    initialBalance: runtime.Decimal | null;
    systemBalance: runtime.Decimal | null;
};
export type CashSessionSumAggregateOutputType = {
    difference: runtime.Decimal | null;
    finalBalance: runtime.Decimal | null;
    initialBalance: runtime.Decimal | null;
    systemBalance: runtime.Decimal | null;
};
export type CashSessionMinAggregateOutputType = {
    id: string | null;
    cashRegisterId: string | null;
    openedAt: Date | null;
    closedAt: Date | null;
    difference: runtime.Decimal | null;
    finalBalance: runtime.Decimal | null;
    initialBalance: runtime.Decimal | null;
    systemBalance: runtime.Decimal | null;
    userId: string | null;
    status: string | null;
};
export type CashSessionMaxAggregateOutputType = {
    id: string | null;
    cashRegisterId: string | null;
    openedAt: Date | null;
    closedAt: Date | null;
    difference: runtime.Decimal | null;
    finalBalance: runtime.Decimal | null;
    initialBalance: runtime.Decimal | null;
    systemBalance: runtime.Decimal | null;
    userId: string | null;
    status: string | null;
};
export type CashSessionCountAggregateOutputType = {
    id: number;
    cashRegisterId: number;
    openedAt: number;
    closedAt: number;
    difference: number;
    finalBalance: number;
    initialBalance: number;
    systemBalance: number;
    userId: number;
    status: number;
    _all: number;
};
export type CashSessionAvgAggregateInputType = {
    difference?: true;
    finalBalance?: true;
    initialBalance?: true;
    systemBalance?: true;
};
export type CashSessionSumAggregateInputType = {
    difference?: true;
    finalBalance?: true;
    initialBalance?: true;
    systemBalance?: true;
};
export type CashSessionMinAggregateInputType = {
    id?: true;
    cashRegisterId?: true;
    openedAt?: true;
    closedAt?: true;
    difference?: true;
    finalBalance?: true;
    initialBalance?: true;
    systemBalance?: true;
    userId?: true;
    status?: true;
};
export type CashSessionMaxAggregateInputType = {
    id?: true;
    cashRegisterId?: true;
    openedAt?: true;
    closedAt?: true;
    difference?: true;
    finalBalance?: true;
    initialBalance?: true;
    systemBalance?: true;
    userId?: true;
    status?: true;
};
export type CashSessionCountAggregateInputType = {
    id?: true;
    cashRegisterId?: true;
    openedAt?: true;
    closedAt?: true;
    difference?: true;
    finalBalance?: true;
    initialBalance?: true;
    systemBalance?: true;
    userId?: true;
    status?: true;
    _all?: true;
};
export type CashSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashSessionWhereInput;
    orderBy?: Prisma.CashSessionOrderByWithRelationInput | Prisma.CashSessionOrderByWithRelationInput[];
    cursor?: Prisma.CashSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashSessionCountAggregateInputType;
    _avg?: CashSessionAvgAggregateInputType;
    _sum?: CashSessionSumAggregateInputType;
    _min?: CashSessionMinAggregateInputType;
    _max?: CashSessionMaxAggregateInputType;
};
export type GetCashSessionAggregateType<T extends CashSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateCashSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashSession[P]> : Prisma.GetScalarType<T[P], AggregateCashSession[P]>;
};
export type CashSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashSessionWhereInput;
    orderBy?: Prisma.CashSessionOrderByWithAggregationInput | Prisma.CashSessionOrderByWithAggregationInput[];
    by: Prisma.CashSessionScalarFieldEnum[] | Prisma.CashSessionScalarFieldEnum;
    having?: Prisma.CashSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashSessionCountAggregateInputType | true;
    _avg?: CashSessionAvgAggregateInputType;
    _sum?: CashSessionSumAggregateInputType;
    _min?: CashSessionMinAggregateInputType;
    _max?: CashSessionMaxAggregateInputType;
};
export type CashSessionGroupByOutputType = {
    id: string;
    cashRegisterId: string;
    openedAt: Date;
    closedAt: Date | null;
    difference: runtime.Decimal | null;
    finalBalance: runtime.Decimal | null;
    initialBalance: runtime.Decimal;
    systemBalance: runtime.Decimal | null;
    userId: string;
    status: string;
    _count: CashSessionCountAggregateOutputType | null;
    _avg: CashSessionAvgAggregateOutputType | null;
    _sum: CashSessionSumAggregateOutputType | null;
    _min: CashSessionMinAggregateOutputType | null;
    _max: CashSessionMaxAggregateOutputType | null;
};
type GetCashSessionGroupByPayload<T extends CashSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashSessionGroupByOutputType[P]>;
}>>;
export type CashSessionWhereInput = {
    AND?: Prisma.CashSessionWhereInput | Prisma.CashSessionWhereInput[];
    OR?: Prisma.CashSessionWhereInput[];
    NOT?: Prisma.CashSessionWhereInput | Prisma.CashSessionWhereInput[];
    id?: Prisma.StringFilter<"CashSession"> | string;
    cashRegisterId?: Prisma.StringFilter<"CashSession"> | string;
    openedAt?: Prisma.DateTimeFilter<"CashSession"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"CashSession"> | Date | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFilter<"CashSession"> | string;
    status?: Prisma.StringFilter<"CashSession"> | string;
    movements?: Prisma.CashMovementListRelationFilter;
    cashRegister?: Prisma.XOR<Prisma.CashRegisterScalarRelationFilter, Prisma.CashRegisterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sales?: Prisma.SaleListRelationFilter;
};
export type CashSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    difference?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalBalance?: Prisma.SortOrderInput | Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    movements?: Prisma.CashMovementOrderByRelationAggregateInput;
    cashRegister?: Prisma.CashRegisterOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    sales?: Prisma.SaleOrderByRelationAggregateInput;
};
export type CashSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CashSessionWhereInput | Prisma.CashSessionWhereInput[];
    OR?: Prisma.CashSessionWhereInput[];
    NOT?: Prisma.CashSessionWhereInput | Prisma.CashSessionWhereInput[];
    cashRegisterId?: Prisma.StringFilter<"CashSession"> | string;
    openedAt?: Prisma.DateTimeFilter<"CashSession"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"CashSession"> | Date | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFilter<"CashSession"> | string;
    status?: Prisma.StringFilter<"CashSession"> | string;
    movements?: Prisma.CashMovementListRelationFilter;
    cashRegister?: Prisma.XOR<Prisma.CashRegisterScalarRelationFilter, Prisma.CashRegisterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sales?: Prisma.SaleListRelationFilter;
}, "id">;
export type CashSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    difference?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalBalance?: Prisma.SortOrderInput | Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.CashSessionCountOrderByAggregateInput;
    _avg?: Prisma.CashSessionAvgOrderByAggregateInput;
    _max?: Prisma.CashSessionMaxOrderByAggregateInput;
    _min?: Prisma.CashSessionMinOrderByAggregateInput;
    _sum?: Prisma.CashSessionSumOrderByAggregateInput;
};
export type CashSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashSessionScalarWhereWithAggregatesInput | Prisma.CashSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashSessionScalarWhereWithAggregatesInput | Prisma.CashSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CashSession"> | string;
    cashRegisterId?: Prisma.StringWithAggregatesFilter<"CashSession"> | string;
    openedAt?: Prisma.DateTimeWithAggregatesFilter<"CashSession"> | Date | string;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CashSession"> | Date | string | null;
    difference?: Prisma.DecimalNullableWithAggregatesFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.DecimalNullableWithAggregatesFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalWithAggregatesFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.DecimalNullableWithAggregatesFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"CashSession"> | string;
    status?: Prisma.StringWithAggregatesFilter<"CashSession"> | string;
};
export type CashSessionCreateInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    movements?: Prisma.CashMovementCreateNestedManyWithoutSessionInput;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutSessionsInput;
    user: Prisma.UserCreateNestedOneWithoutCashSessionsInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionUncheckedCreateInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
    movements?: Prisma.CashMovementUncheckedCreateNestedManyWithoutSessionInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUpdateManyWithoutSessionNestedInput;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutSessionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCashSessionsNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUncheckedUpdateManyWithoutSessionNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionCreateManyInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
};
export type CashSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashSessionListRelationFilter = {
    every?: Prisma.CashSessionWhereInput;
    some?: Prisma.CashSessionWhereInput;
    none?: Prisma.CashSessionWhereInput;
};
export type CashSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashSessionNullableScalarRelationFilter = {
    is?: Prisma.CashSessionWhereInput | null;
    isNot?: Prisma.CashSessionWhereInput | null;
};
export type CashSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    finalBalance?: Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type CashSessionAvgOrderByAggregateInput = {
    difference?: Prisma.SortOrder;
    finalBalance?: Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrder;
};
export type CashSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    finalBalance?: Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type CashSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    difference?: Prisma.SortOrder;
    finalBalance?: Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type CashSessionSumOrderByAggregateInput = {
    difference?: Prisma.SortOrder;
    finalBalance?: Prisma.SortOrder;
    initialBalance?: Prisma.SortOrder;
    systemBalance?: Prisma.SortOrder;
};
export type CashSessionScalarRelationFilter = {
    is?: Prisma.CashSessionWhereInput;
    isNot?: Prisma.CashSessionWhereInput;
};
export type CashSessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput> | Prisma.CashSessionCreateWithoutUserInput[] | Prisma.CashSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutUserInput | Prisma.CashSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashSessionCreateManyUserInputEnvelope;
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
};
export type CashSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput> | Prisma.CashSessionCreateWithoutUserInput[] | Prisma.CashSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutUserInput | Prisma.CashSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashSessionCreateManyUserInputEnvelope;
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
};
export type CashSessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput> | Prisma.CashSessionCreateWithoutUserInput[] | Prisma.CashSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutUserInput | Prisma.CashSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.CashSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashSessionCreateManyUserInputEnvelope;
    set?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    disconnect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    delete?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    update?: Prisma.CashSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.CashSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashSessionUpdateManyWithWhereWithoutUserInput | Prisma.CashSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
};
export type CashSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput> | Prisma.CashSessionCreateWithoutUserInput[] | Prisma.CashSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutUserInput | Prisma.CashSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.CashSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashSessionCreateManyUserInputEnvelope;
    set?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    disconnect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    delete?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    update?: Prisma.CashSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.CashSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashSessionUpdateManyWithWhereWithoutUserInput | Prisma.CashSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
};
export type CashSessionCreateNestedOneWithoutSalesInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutSalesInput, Prisma.CashSessionUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutSalesInput;
    connect?: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionUpdateOneWithoutSalesNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutSalesInput, Prisma.CashSessionUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutSalesInput;
    upsert?: Prisma.CashSessionUpsertWithoutSalesInput;
    disconnect?: Prisma.CashSessionWhereInput | boolean;
    delete?: Prisma.CashSessionWhereInput | boolean;
    connect?: Prisma.CashSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashSessionUpdateToOneWithWhereWithoutSalesInput, Prisma.CashSessionUpdateWithoutSalesInput>, Prisma.CashSessionUncheckedUpdateWithoutSalesInput>;
};
export type CashSessionCreateNestedManyWithoutCashRegisterInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput> | Prisma.CashSessionCreateWithoutCashRegisterInput[] | Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput | Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput[];
    createMany?: Prisma.CashSessionCreateManyCashRegisterInputEnvelope;
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
};
export type CashSessionUncheckedCreateNestedManyWithoutCashRegisterInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput> | Prisma.CashSessionCreateWithoutCashRegisterInput[] | Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput | Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput[];
    createMany?: Prisma.CashSessionCreateManyCashRegisterInputEnvelope;
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
};
export type CashSessionUpdateManyWithoutCashRegisterNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput> | Prisma.CashSessionCreateWithoutCashRegisterInput[] | Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput | Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput[];
    upsert?: Prisma.CashSessionUpsertWithWhereUniqueWithoutCashRegisterInput | Prisma.CashSessionUpsertWithWhereUniqueWithoutCashRegisterInput[];
    createMany?: Prisma.CashSessionCreateManyCashRegisterInputEnvelope;
    set?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    disconnect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    delete?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    update?: Prisma.CashSessionUpdateWithWhereUniqueWithoutCashRegisterInput | Prisma.CashSessionUpdateWithWhereUniqueWithoutCashRegisterInput[];
    updateMany?: Prisma.CashSessionUpdateManyWithWhereWithoutCashRegisterInput | Prisma.CashSessionUpdateManyWithWhereWithoutCashRegisterInput[];
    deleteMany?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
};
export type CashSessionUncheckedUpdateManyWithoutCashRegisterNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput> | Prisma.CashSessionCreateWithoutCashRegisterInput[] | Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput | Prisma.CashSessionCreateOrConnectWithoutCashRegisterInput[];
    upsert?: Prisma.CashSessionUpsertWithWhereUniqueWithoutCashRegisterInput | Prisma.CashSessionUpsertWithWhereUniqueWithoutCashRegisterInput[];
    createMany?: Prisma.CashSessionCreateManyCashRegisterInputEnvelope;
    set?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    disconnect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    delete?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    connect?: Prisma.CashSessionWhereUniqueInput | Prisma.CashSessionWhereUniqueInput[];
    update?: Prisma.CashSessionUpdateWithWhereUniqueWithoutCashRegisterInput | Prisma.CashSessionUpdateWithWhereUniqueWithoutCashRegisterInput[];
    updateMany?: Prisma.CashSessionUpdateManyWithWhereWithoutCashRegisterInput | Prisma.CashSessionUpdateManyWithWhereWithoutCashRegisterInput[];
    deleteMany?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
};
export type CashSessionCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutMovementsInput, Prisma.CashSessionUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.CashSessionCreateWithoutMovementsInput, Prisma.CashSessionUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.CashSessionCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.CashSessionUpsertWithoutMovementsInput;
    connect?: Prisma.CashSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashSessionUpdateToOneWithWhereWithoutMovementsInput, Prisma.CashSessionUpdateWithoutMovementsInput>, Prisma.CashSessionUncheckedUpdateWithoutMovementsInput>;
};
export type CashSessionCreateWithoutUserInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    movements?: Prisma.CashMovementCreateNestedManyWithoutSessionInput;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutSessionsInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    movements?: Prisma.CashMovementUncheckedCreateNestedManyWithoutSessionInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput>;
};
export type CashSessionCreateManyUserInputEnvelope = {
    data: Prisma.CashSessionCreateManyUserInput | Prisma.CashSessionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CashSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashSessionUpdateWithoutUserInput, Prisma.CashSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutUserInput, Prisma.CashSessionUncheckedCreateWithoutUserInput>;
};
export type CashSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateWithoutUserInput, Prisma.CashSessionUncheckedUpdateWithoutUserInput>;
};
export type CashSessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CashSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateManyMutationInput, Prisma.CashSessionUncheckedUpdateManyWithoutUserInput>;
};
export type CashSessionScalarWhereInput = {
    AND?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
    OR?: Prisma.CashSessionScalarWhereInput[];
    NOT?: Prisma.CashSessionScalarWhereInput | Prisma.CashSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"CashSession"> | string;
    cashRegisterId?: Prisma.StringFilter<"CashSession"> | string;
    openedAt?: Prisma.DateTimeFilter<"CashSession"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"CashSession"> | Date | string | null;
    difference?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.DecimalNullableFilter<"CashSession"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFilter<"CashSession"> | string;
    status?: Prisma.StringFilter<"CashSession"> | string;
};
export type CashSessionCreateWithoutSalesInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    movements?: Prisma.CashMovementCreateNestedManyWithoutSessionInput;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutSessionsInput;
    user: Prisma.UserCreateNestedOneWithoutCashSessionsInput;
};
export type CashSessionUncheckedCreateWithoutSalesInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
    movements?: Prisma.CashMovementUncheckedCreateNestedManyWithoutSessionInput;
};
export type CashSessionCreateOrConnectWithoutSalesInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutSalesInput, Prisma.CashSessionUncheckedCreateWithoutSalesInput>;
};
export type CashSessionUpsertWithoutSalesInput = {
    update: Prisma.XOR<Prisma.CashSessionUpdateWithoutSalesInput, Prisma.CashSessionUncheckedUpdateWithoutSalesInput>;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutSalesInput, Prisma.CashSessionUncheckedCreateWithoutSalesInput>;
    where?: Prisma.CashSessionWhereInput;
};
export type CashSessionUpdateToOneWithWhereWithoutSalesInput = {
    where?: Prisma.CashSessionWhereInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateWithoutSalesInput, Prisma.CashSessionUncheckedUpdateWithoutSalesInput>;
};
export type CashSessionUpdateWithoutSalesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUpdateManyWithoutSessionNestedInput;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutSessionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCashSessionsNestedInput;
};
export type CashSessionUncheckedUpdateWithoutSalesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUncheckedUpdateManyWithoutSessionNestedInput;
};
export type CashSessionCreateWithoutCashRegisterInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    movements?: Prisma.CashMovementCreateNestedManyWithoutSessionInput;
    user: Prisma.UserCreateNestedOneWithoutCashSessionsInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionUncheckedCreateWithoutCashRegisterInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
    movements?: Prisma.CashMovementUncheckedCreateNestedManyWithoutSessionInput;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionCreateOrConnectWithoutCashRegisterInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput>;
};
export type CashSessionCreateManyCashRegisterInputEnvelope = {
    data: Prisma.CashSessionCreateManyCashRegisterInput | Prisma.CashSessionCreateManyCashRegisterInput[];
    skipDuplicates?: boolean;
};
export type CashSessionUpsertWithWhereUniqueWithoutCashRegisterInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashSessionUpdateWithoutCashRegisterInput, Prisma.CashSessionUncheckedUpdateWithoutCashRegisterInput>;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutCashRegisterInput, Prisma.CashSessionUncheckedCreateWithoutCashRegisterInput>;
};
export type CashSessionUpdateWithWhereUniqueWithoutCashRegisterInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateWithoutCashRegisterInput, Prisma.CashSessionUncheckedUpdateWithoutCashRegisterInput>;
};
export type CashSessionUpdateManyWithWhereWithoutCashRegisterInput = {
    where: Prisma.CashSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateManyMutationInput, Prisma.CashSessionUncheckedUpdateManyWithoutCashRegisterInput>;
};
export type CashSessionCreateWithoutMovementsInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutSessionsInput;
    user: Prisma.UserCreateNestedOneWithoutCashSessionsInput;
    sales?: Prisma.SaleCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionUncheckedCreateWithoutMovementsInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
    sales?: Prisma.SaleUncheckedCreateNestedManyWithoutCashSessionInput;
};
export type CashSessionCreateOrConnectWithoutMovementsInput = {
    where: Prisma.CashSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutMovementsInput, Prisma.CashSessionUncheckedCreateWithoutMovementsInput>;
};
export type CashSessionUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.CashSessionUpdateWithoutMovementsInput, Prisma.CashSessionUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.CashSessionCreateWithoutMovementsInput, Prisma.CashSessionUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.CashSessionWhereInput;
};
export type CashSessionUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.CashSessionWhereInput;
    data: Prisma.XOR<Prisma.CashSessionUpdateWithoutMovementsInput, Prisma.CashSessionUncheckedUpdateWithoutMovementsInput>;
};
export type CashSessionUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutSessionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCashSessionsNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionCreateManyUserInput = {
    id?: string;
    cashRegisterId: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
};
export type CashSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUpdateManyWithoutSessionNestedInput;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutSessionsNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUncheckedUpdateManyWithoutSessionNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashSessionCreateManyCashRegisterInput = {
    id?: string;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    difference?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId: string;
    status?: string;
};
export type CashSessionUpdateWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUpdateManyWithoutSessionNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCashSessionsNestedInput;
    sales?: Prisma.SaleUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.CashMovementUncheckedUpdateManyWithoutSessionNestedInput;
    sales?: Prisma.SaleUncheckedUpdateManyWithoutCashSessionNestedInput;
};
export type CashSessionUncheckedUpdateManyWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    difference?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    finalBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    initialBalance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    systemBalance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashSessionCountOutputType = {
    movements: number;
    sales: number;
};
export type CashSessionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | CashSessionCountOutputTypeCountMovementsArgs;
    sales?: boolean | CashSessionCountOutputTypeCountSalesArgs;
};
export type CashSessionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionCountOutputTypeSelect<ExtArgs> | null;
};
export type CashSessionCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashMovementWhereInput;
};
export type CashSessionCountOutputTypeCountSalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
};
export type CashSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cashRegisterId?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    difference?: boolean;
    finalBalance?: boolean;
    initialBalance?: boolean;
    systemBalance?: boolean;
    userId?: boolean;
    status?: boolean;
    movements?: boolean | Prisma.CashSession$movementsArgs<ExtArgs>;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sales?: boolean | Prisma.CashSession$salesArgs<ExtArgs>;
    _count?: boolean | Prisma.CashSessionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashSession"]>;
export type CashSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cashRegisterId?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    difference?: boolean;
    finalBalance?: boolean;
    initialBalance?: boolean;
    systemBalance?: boolean;
    userId?: boolean;
    status?: boolean;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashSession"]>;
export type CashSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cashRegisterId?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    difference?: boolean;
    finalBalance?: boolean;
    initialBalance?: boolean;
    systemBalance?: boolean;
    userId?: boolean;
    status?: boolean;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashSession"]>;
export type CashSessionSelectScalar = {
    id?: boolean;
    cashRegisterId?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    difference?: boolean;
    finalBalance?: boolean;
    initialBalance?: boolean;
    systemBalance?: boolean;
    userId?: boolean;
    status?: boolean;
};
export type CashSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cashRegisterId" | "openedAt" | "closedAt" | "difference" | "finalBalance" | "initialBalance" | "systemBalance" | "userId" | "status", ExtArgs["result"]["cashSession"]>;
export type CashSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | Prisma.CashSession$movementsArgs<ExtArgs>;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sales?: boolean | Prisma.CashSession$salesArgs<ExtArgs>;
    _count?: boolean | Prisma.CashSessionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CashSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CashSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CashSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashSession";
    objects: {
        movements: Prisma.$CashMovementPayload<ExtArgs>[];
        cashRegister: Prisma.$CashRegisterPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        sales: Prisma.$SalePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cashRegisterId: string;
        openedAt: Date;
        closedAt: Date | null;
        difference: runtime.Decimal | null;
        finalBalance: runtime.Decimal | null;
        initialBalance: runtime.Decimal;
        systemBalance: runtime.Decimal | null;
        userId: string;
        status: string;
    }, ExtArgs["result"]["cashSession"]>;
    composites: {};
};
export type CashSessionGetPayload<S extends boolean | null | undefined | CashSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashSessionPayload, S>;
export type CashSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashSessionCountAggregateInputType | true;
};
export interface CashSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashSession'];
        meta: {
            name: 'CashSession';
        };
    };
    findUnique<T extends CashSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, CashSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, CashSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashSessionFindManyArgs>(args?: Prisma.SelectSubset<T, CashSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashSessionCreateArgs>(args: Prisma.SelectSubset<T, CashSessionCreateArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, CashSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashSessionDeleteArgs>(args: Prisma.SelectSubset<T, CashSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashSessionUpdateArgs>(args: Prisma.SelectSubset<T, CashSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, CashSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashSessionUpsertArgs>(args: Prisma.SelectSubset<T, CashSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashSessionCountArgs>(args?: Prisma.Subset<T, CashSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashSessionCountAggregateOutputType> : number>;
    aggregate<T extends CashSessionAggregateArgs>(args: Prisma.Subset<T, CashSessionAggregateArgs>): Prisma.PrismaPromise<GetCashSessionAggregateType<T>>;
    groupBy<T extends CashSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: CashSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashSessionFieldRefs;
}
export interface Prisma__CashSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    movements<T extends Prisma.CashSession$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashSession$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cashRegister<T extends Prisma.CashRegisterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashRegisterDefaultArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sales<T extends Prisma.CashSession$salesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashSession$salesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashSessionFieldRefs {
    readonly id: Prisma.FieldRef<"CashSession", 'String'>;
    readonly cashRegisterId: Prisma.FieldRef<"CashSession", 'String'>;
    readonly openedAt: Prisma.FieldRef<"CashSession", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"CashSession", 'DateTime'>;
    readonly difference: Prisma.FieldRef<"CashSession", 'Decimal'>;
    readonly finalBalance: Prisma.FieldRef<"CashSession", 'Decimal'>;
    readonly initialBalance: Prisma.FieldRef<"CashSession", 'Decimal'>;
    readonly systemBalance: Prisma.FieldRef<"CashSession", 'Decimal'>;
    readonly userId: Prisma.FieldRef<"CashSession", 'String'>;
    readonly status: Prisma.FieldRef<"CashSession", 'String'>;
}
export type CashSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashSessionCreateInput, Prisma.CashSessionUncheckedCreateInput>;
};
export type CashSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashSessionCreateManyInput | Prisma.CashSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    data: Prisma.CashSessionCreateManyInput | Prisma.CashSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashSessionUpdateInput, Prisma.CashSessionUncheckedUpdateInput>;
    where: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashSessionUpdateManyMutationInput, Prisma.CashSessionUncheckedUpdateManyInput>;
    where?: Prisma.CashSessionWhereInput;
    limit?: number;
};
export type CashSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashSessionUpdateManyMutationInput, Prisma.CashSessionUncheckedUpdateManyInput>;
    where?: Prisma.CashSessionWhereInput;
    limit?: number;
    include?: Prisma.CashSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where: Prisma.CashSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashSessionCreateInput, Prisma.CashSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashSessionUpdateInput, Prisma.CashSessionUncheckedUpdateInput>;
};
export type CashSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where: Prisma.CashSessionWhereUniqueInput;
};
export type CashSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashSessionWhereInput;
    limit?: number;
};
export type CashSession$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    where?: Prisma.CashMovementWhereInput;
    orderBy?: Prisma.CashMovementOrderByWithRelationInput | Prisma.CashMovementOrderByWithRelationInput[];
    cursor?: Prisma.CashMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashMovementScalarFieldEnum | Prisma.CashMovementScalarFieldEnum[];
};
export type CashSession$salesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
};
export {};
