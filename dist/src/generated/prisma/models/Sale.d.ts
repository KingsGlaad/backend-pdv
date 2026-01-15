import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SaleModel = runtime.Types.Result.DefaultSelection<Prisma.$SalePayload>;
export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
export type SaleAvgAggregateOutputType = {
    discount: runtime.Decimal | null;
    total: runtime.Decimal | null;
    finalAmount: runtime.Decimal | null;
};
export type SaleSumAggregateOutputType = {
    discount: runtime.Decimal | null;
    total: runtime.Decimal | null;
    finalAmount: runtime.Decimal | null;
};
export type SaleMinAggregateOutputType = {
    id: string | null;
    discount: runtime.Decimal | null;
    createdAt: Date | null;
    cashSessionId: string | null;
    code: string | null;
    customerCpf: string | null;
    paymentMethod: string | null;
    total: runtime.Decimal | null;
    userId: string | null;
    finalAmount: runtime.Decimal | null;
    status: $Enums.SaleStatus | null;
};
export type SaleMaxAggregateOutputType = {
    id: string | null;
    discount: runtime.Decimal | null;
    createdAt: Date | null;
    cashSessionId: string | null;
    code: string | null;
    customerCpf: string | null;
    paymentMethod: string | null;
    total: runtime.Decimal | null;
    userId: string | null;
    finalAmount: runtime.Decimal | null;
    status: $Enums.SaleStatus | null;
};
export type SaleCountAggregateOutputType = {
    id: number;
    discount: number;
    createdAt: number;
    cashSessionId: number;
    code: number;
    customerCpf: number;
    paymentMethod: number;
    total: number;
    userId: number;
    finalAmount: number;
    status: number;
    _all: number;
};
export type SaleAvgAggregateInputType = {
    discount?: true;
    total?: true;
    finalAmount?: true;
};
export type SaleSumAggregateInputType = {
    discount?: true;
    total?: true;
    finalAmount?: true;
};
export type SaleMinAggregateInputType = {
    id?: true;
    discount?: true;
    createdAt?: true;
    cashSessionId?: true;
    code?: true;
    customerCpf?: true;
    paymentMethod?: true;
    total?: true;
    userId?: true;
    finalAmount?: true;
    status?: true;
};
export type SaleMaxAggregateInputType = {
    id?: true;
    discount?: true;
    createdAt?: true;
    cashSessionId?: true;
    code?: true;
    customerCpf?: true;
    paymentMethod?: true;
    total?: true;
    userId?: true;
    finalAmount?: true;
    status?: true;
};
export type SaleCountAggregateInputType = {
    id?: true;
    discount?: true;
    createdAt?: true;
    cashSessionId?: true;
    code?: true;
    customerCpf?: true;
    paymentMethod?: true;
    total?: true;
    userId?: true;
    finalAmount?: true;
    status?: true;
    _all?: true;
};
export type SaleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithRelationInput | Prisma.SaleOrderByWithRelationInput[];
    cursor?: Prisma.SaleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SaleCountAggregateInputType;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
    [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSale[P]> : Prisma.GetScalarType<T[P], AggregateSale[P]>;
};
export type SaleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    orderBy?: Prisma.SaleOrderByWithAggregationInput | Prisma.SaleOrderByWithAggregationInput[];
    by: Prisma.SaleScalarFieldEnum[] | Prisma.SaleScalarFieldEnum;
    having?: Prisma.SaleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SaleCountAggregateInputType | true;
    _avg?: SaleAvgAggregateInputType;
    _sum?: SaleSumAggregateInputType;
    _min?: SaleMinAggregateInputType;
    _max?: SaleMaxAggregateInputType;
};
export type SaleGroupByOutputType = {
    id: string;
    discount: runtime.Decimal | null;
    createdAt: Date;
    cashSessionId: string | null;
    code: string;
    customerCpf: string | null;
    paymentMethod: string;
    total: runtime.Decimal;
    userId: string | null;
    finalAmount: runtime.Decimal;
    status: $Enums.SaleStatus;
    _count: SaleCountAggregateOutputType | null;
    _avg: SaleAvgAggregateOutputType | null;
    _sum: SaleSumAggregateOutputType | null;
    _min: SaleMinAggregateOutputType | null;
    _max: SaleMaxAggregateOutputType | null;
};
type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SaleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SaleGroupByOutputType[P]>;
}>>;
export type SaleWhereInput = {
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    id?: Prisma.StringFilter<"Sale"> | string;
    discount?: Prisma.DecimalNullableFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    cashSessionId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    code?: Prisma.StringFilter<"Sale"> | string;
    customerCpf?: Prisma.StringNullableFilter<"Sale"> | string | null;
    paymentMethod?: Prisma.StringFilter<"Sale"> | string;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    finalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus;
    orders?: Prisma.OrderListRelationFilter;
    items?: Prisma.OrderItemListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    cashSession?: Prisma.XOR<Prisma.CashSessionNullableScalarRelationFilter, Prisma.CashSessionWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type SaleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cashSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    customerCpf?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    cashSession?: Prisma.CashSessionOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    OR?: Prisma.SaleWhereInput[];
    NOT?: Prisma.SaleWhereInput | Prisma.SaleWhereInput[];
    discount?: Prisma.DecimalNullableFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    cashSessionId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    customerCpf?: Prisma.StringNullableFilter<"Sale"> | string | null;
    paymentMethod?: Prisma.StringFilter<"Sale"> | string;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    finalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus;
    orders?: Prisma.OrderListRelationFilter;
    items?: Prisma.OrderItemListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    cashSession?: Prisma.XOR<Prisma.CashSessionNullableScalarRelationFilter, Prisma.CashSessionWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "code">;
export type SaleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cashSessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    customerCpf?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.SaleCountOrderByAggregateInput;
    _avg?: Prisma.SaleAvgOrderByAggregateInput;
    _max?: Prisma.SaleMaxOrderByAggregateInput;
    _min?: Prisma.SaleMinOrderByAggregateInput;
    _sum?: Prisma.SaleSumOrderByAggregateInput;
};
export type SaleScalarWhereWithAggregatesInput = {
    AND?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    OR?: Prisma.SaleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SaleScalarWhereWithAggregatesInput | Prisma.SaleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Sale"> | string;
    discount?: Prisma.DecimalNullableWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sale"> | Date | string;
    cashSessionId?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    code?: Prisma.StringWithAggregatesFilter<"Sale"> | string;
    customerCpf?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    paymentMethod?: Prisma.StringWithAggregatesFilter<"Sale"> | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Sale"> | string | null;
    finalAmount?: Prisma.DecimalWithAggregatesFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusWithAggregatesFilter<"Sale"> | $Enums.SaleStatus;
};
export type SaleCreateInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSaleInput;
    cashSession?: Prisma.CashSessionCreateNestedOneWithoutSalesInput;
    user?: Prisma.UserCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSaleNestedInput;
    cashSession?: Prisma.CashSessionUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateManyInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
};
export type SaleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
};
export type SaleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
};
export type SaleListRelationFilter = {
    every?: Prisma.SaleWhereInput;
    some?: Prisma.SaleWhereInput;
    none?: Prisma.SaleWhereInput;
};
export type SaleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SaleNullableScalarRelationFilter = {
    is?: Prisma.SaleWhereInput | null;
    isNot?: Prisma.SaleWhereInput | null;
};
export type SaleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cashSessionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    customerCpf?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type SaleAvgOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
};
export type SaleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cashSessionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    customerCpf?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type SaleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cashSessionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    customerCpf?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type SaleSumOrderByAggregateInput = {
    discount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    finalAmount?: Prisma.SortOrder;
};
export type SaleScalarRelationFilter = {
    is?: Prisma.SaleWhereInput;
    isNot?: Prisma.SaleWhereInput;
};
export type SaleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutUserInput | Prisma.SaleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutUserInput | Prisma.SaleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutUserInput | Prisma.SaleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput> | Prisma.SaleCreateWithoutUserInput[] | Prisma.SaleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutUserInput | Prisma.SaleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutUserInput | Prisma.SaleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SaleCreateManyUserInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutUserInput | Prisma.SaleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutUserInput | Prisma.SaleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutOrdersInput, Prisma.SaleUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutOrdersInput, Prisma.SaleUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.SaleUpsertWithoutOrdersInput;
    disconnect?: Prisma.SaleWhereInput | boolean;
    delete?: Prisma.SaleWhereInput | boolean;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutOrdersInput, Prisma.SaleUpdateWithoutOrdersInput>, Prisma.SaleUncheckedUpdateWithoutOrdersInput>;
};
export type SaleCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.SaleUpsertWithoutItemsInput;
    disconnect?: Prisma.SaleWhereInput | boolean;
    delete?: Prisma.SaleWhereInput | boolean;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutItemsInput, Prisma.SaleUpdateWithoutItemsInput>, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumSaleStatusFieldUpdateOperationsInput = {
    set?: $Enums.SaleStatus;
};
export type SaleCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.SaleUpsertWithoutPaymentsInput;
    connect?: Prisma.SaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleUpdateToOneWithWhereWithoutPaymentsInput, Prisma.SaleUpdateWithoutPaymentsInput>, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
};
export type SaleCreateNestedManyWithoutCashSessionInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput> | Prisma.SaleCreateWithoutCashSessionInput[] | Prisma.SaleUncheckedCreateWithoutCashSessionInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCashSessionInput | Prisma.SaleCreateOrConnectWithoutCashSessionInput[];
    createMany?: Prisma.SaleCreateManyCashSessionInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUncheckedCreateNestedManyWithoutCashSessionInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput> | Prisma.SaleCreateWithoutCashSessionInput[] | Prisma.SaleUncheckedCreateWithoutCashSessionInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCashSessionInput | Prisma.SaleCreateOrConnectWithoutCashSessionInput[];
    createMany?: Prisma.SaleCreateManyCashSessionInputEnvelope;
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
};
export type SaleUpdateManyWithoutCashSessionNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput> | Prisma.SaleCreateWithoutCashSessionInput[] | Prisma.SaleUncheckedCreateWithoutCashSessionInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCashSessionInput | Prisma.SaleCreateOrConnectWithoutCashSessionInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutCashSessionInput | Prisma.SaleUpsertWithWhereUniqueWithoutCashSessionInput[];
    createMany?: Prisma.SaleCreateManyCashSessionInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutCashSessionInput | Prisma.SaleUpdateWithWhereUniqueWithoutCashSessionInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutCashSessionInput | Prisma.SaleUpdateManyWithWhereWithoutCashSessionInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleUncheckedUpdateManyWithoutCashSessionNestedInput = {
    create?: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput> | Prisma.SaleCreateWithoutCashSessionInput[] | Prisma.SaleUncheckedCreateWithoutCashSessionInput[];
    connectOrCreate?: Prisma.SaleCreateOrConnectWithoutCashSessionInput | Prisma.SaleCreateOrConnectWithoutCashSessionInput[];
    upsert?: Prisma.SaleUpsertWithWhereUniqueWithoutCashSessionInput | Prisma.SaleUpsertWithWhereUniqueWithoutCashSessionInput[];
    createMany?: Prisma.SaleCreateManyCashSessionInputEnvelope;
    set?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    disconnect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    delete?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    connect?: Prisma.SaleWhereUniqueInput | Prisma.SaleWhereUniqueInput[];
    update?: Prisma.SaleUpdateWithWhereUniqueWithoutCashSessionInput | Prisma.SaleUpdateWithWhereUniqueWithoutCashSessionInput[];
    updateMany?: Prisma.SaleUpdateManyWithWhereWithoutCashSessionInput | Prisma.SaleUpdateManyWithWhereWithoutCashSessionInput[];
    deleteMany?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
};
export type SaleCreateWithoutUserInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSaleInput;
    cashSession?: Prisma.CashSessionCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateWithoutUserInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput>;
};
export type SaleCreateManyUserInputEnvelope = {
    data: Prisma.SaleCreateManyUserInput | Prisma.SaleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutUserInput, Prisma.SaleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutUserInput, Prisma.SaleUncheckedCreateWithoutUserInput>;
};
export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutUserInput, Prisma.SaleUncheckedUpdateWithoutUserInput>;
};
export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutUserInput>;
};
export type SaleScalarWhereInput = {
    AND?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    OR?: Prisma.SaleScalarWhereInput[];
    NOT?: Prisma.SaleScalarWhereInput | Prisma.SaleScalarWhereInput[];
    id?: Prisma.StringFilter<"Sale"> | string;
    discount?: Prisma.DecimalNullableFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Sale"> | Date | string;
    cashSessionId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    code?: Prisma.StringFilter<"Sale"> | string;
    customerCpf?: Prisma.StringNullableFilter<"Sale"> | string | null;
    paymentMethod?: Prisma.StringFilter<"Sale"> | string;
    total?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.StringNullableFilter<"Sale"> | string | null;
    finalAmount?: Prisma.DecimalFilter<"Sale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus;
};
export type SaleCreateWithoutOrdersInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    items?: Prisma.OrderItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSaleInput;
    cashSession?: Prisma.CashSessionCreateNestedOneWithoutSalesInput;
    user?: Prisma.UserCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateWithoutOrdersInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutOrdersInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutOrdersInput, Prisma.SaleUncheckedCreateWithoutOrdersInput>;
};
export type SaleUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutOrdersInput, Prisma.SaleUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutOrdersInput, Prisma.SaleUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutOrdersInput, Prisma.SaleUncheckedUpdateWithoutOrdersInput>;
};
export type SaleUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    items?: Prisma.OrderItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSaleNestedInput;
    cashSession?: Prisma.CashSessionUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutItemsInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSaleInput;
    cashSession?: Prisma.CashSessionCreateNestedOneWithoutSalesInput;
    user?: Prisma.UserCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutItemsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
};
export type SaleUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutItemsInput, Prisma.SaleUncheckedCreateWithoutItemsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutItemsInput, Prisma.SaleUncheckedUpdateWithoutItemsInput>;
};
export type SaleUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSaleNestedInput;
    cashSession?: Prisma.CashSessionUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutPaymentsInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutSaleInput;
    cashSession?: Prisma.CashSessionCreateNestedOneWithoutSalesInput;
    user?: Prisma.UserCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
};
export type SaleUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.SaleUpdateWithoutPaymentsInput, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutPaymentsInput, Prisma.SaleUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.SaleWhereInput;
};
export type SaleUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.SaleWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutPaymentsInput, Prisma.SaleUncheckedUpdateWithoutPaymentsInput>;
};
export type SaleUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutSaleNestedInput;
    cashSession?: Prisma.CashSessionUpdateOneWithoutSalesNestedInput;
    user?: Prisma.UserUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleCreateWithoutCashSessionInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSaleInput;
    user?: Prisma.UserCreateNestedOneWithoutSalesInput;
};
export type SaleUncheckedCreateWithoutCashSessionInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutSaleInput;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutSaleInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSaleInput;
};
export type SaleCreateOrConnectWithoutCashSessionInput = {
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput>;
};
export type SaleCreateManyCashSessionInputEnvelope = {
    data: Prisma.SaleCreateManyCashSessionInput | Prisma.SaleCreateManyCashSessionInput[];
    skipDuplicates?: boolean;
};
export type SaleUpsertWithWhereUniqueWithoutCashSessionInput = {
    where: Prisma.SaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleUpdateWithoutCashSessionInput, Prisma.SaleUncheckedUpdateWithoutCashSessionInput>;
    create: Prisma.XOR<Prisma.SaleCreateWithoutCashSessionInput, Prisma.SaleUncheckedCreateWithoutCashSessionInput>;
};
export type SaleUpdateWithWhereUniqueWithoutCashSessionInput = {
    where: Prisma.SaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleUpdateWithoutCashSessionInput, Prisma.SaleUncheckedUpdateWithoutCashSessionInput>;
};
export type SaleUpdateManyWithWhereWithoutCashSessionInput = {
    where: Prisma.SaleScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyWithoutCashSessionInput>;
};
export type SaleCreateManyUserInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    cashSessionId?: string | null;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
};
export type SaleUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSaleNestedInput;
    cashSession?: Prisma.CashSessionUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cashSessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
};
export type SaleCreateManyCashSessionInput = {
    id?: string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    code?: string;
    customerCpf?: string | null;
    paymentMethod: string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: string | null;
    finalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.SaleStatus;
};
export type SaleUpdateWithoutCashSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSaleNestedInput;
    user?: Prisma.UserUpdateOneWithoutSalesNestedInput;
};
export type SaleUncheckedUpdateWithoutCashSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutSaleNestedInput;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutSaleNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSaleNestedInput;
};
export type SaleUncheckedUpdateManyWithoutCashSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    customerCpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus;
};
export type SaleCountOutputType = {
    orders: number;
    items: number;
    payments: number;
};
export type SaleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | SaleCountOutputTypeCountOrdersArgs;
    items?: boolean | SaleCountOutputTypeCountItemsArgs;
    payments?: boolean | SaleCountOutputTypeCountPaymentsArgs;
};
export type SaleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleCountOutputTypeSelect<ExtArgs> | null;
};
export type SaleCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type SaleCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type SaleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    cashSessionId?: boolean;
    code?: boolean;
    customerCpf?: boolean;
    paymentMethod?: boolean;
    total?: boolean;
    userId?: boolean;
    finalAmount?: boolean;
    status?: boolean;
    orders?: boolean | Prisma.Sale$ordersArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Sale$paymentsArgs<ExtArgs>;
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    cashSessionId?: boolean;
    code?: boolean;
    customerCpf?: boolean;
    paymentMethod?: boolean;
    total?: boolean;
    userId?: boolean;
    finalAmount?: boolean;
    status?: boolean;
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    cashSessionId?: boolean;
    code?: boolean;
    customerCpf?: boolean;
    paymentMethod?: boolean;
    total?: boolean;
    userId?: boolean;
    finalAmount?: boolean;
    status?: boolean;
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
}, ExtArgs["result"]["sale"]>;
export type SaleSelectScalar = {
    id?: boolean;
    discount?: boolean;
    createdAt?: boolean;
    cashSessionId?: boolean;
    code?: boolean;
    customerCpf?: boolean;
    paymentMethod?: boolean;
    total?: boolean;
    userId?: boolean;
    finalAmount?: boolean;
    status?: boolean;
};
export type SaleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "discount" | "createdAt" | "cashSessionId" | "code" | "customerCpf" | "paymentMethod" | "total" | "userId" | "finalAmount" | "status", ExtArgs["result"]["sale"]>;
export type SaleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Sale$ordersArgs<ExtArgs>;
    items?: boolean | Prisma.Sale$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Sale$paymentsArgs<ExtArgs>;
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
    _count?: boolean | Prisma.SaleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SaleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
};
export type SaleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashSession?: boolean | Prisma.Sale$cashSessionArgs<ExtArgs>;
    user?: boolean | Prisma.Sale$userArgs<ExtArgs>;
};
export type $SalePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sale";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        items: Prisma.$OrderItemPayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        cashSession: Prisma.$CashSessionPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        discount: runtime.Decimal | null;
        createdAt: Date;
        cashSessionId: string | null;
        code: string;
        customerCpf: string | null;
        paymentMethod: string;
        total: runtime.Decimal;
        userId: string | null;
        finalAmount: runtime.Decimal;
        status: $Enums.SaleStatus;
    }, ExtArgs["result"]["sale"]>;
    composites: {};
};
export type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalePayload, S>;
export type SaleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SaleCountAggregateInputType | true;
};
export interface SaleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sale'];
        meta: {
            name: 'Sale';
        };
    };
    findUnique<T extends SaleFindUniqueArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SaleFindFirstArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SaleFindManyArgs>(args?: Prisma.SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SaleCreateArgs>(args: Prisma.SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SaleCreateManyArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SaleDeleteArgs>(args: Prisma.SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SaleUpdateArgs>(args: Prisma.SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SaleDeleteManyArgs>(args?: Prisma.SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SaleUpdateManyArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SaleUpsertArgs>(args: Prisma.SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SaleCountArgs>(args?: Prisma.Subset<T, SaleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SaleCountAggregateOutputType> : number>;
    aggregate<T extends SaleAggregateArgs>(args: Prisma.Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>;
    groupBy<T extends SaleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SaleGroupByArgs['orderBy'];
    } : {
        orderBy?: SaleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SaleFieldRefs;
}
export interface Prisma__SaleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Sale$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    items<T extends Prisma.Sale$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.Sale$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cashSession<T extends Prisma.Sale$cashSessionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$cashSessionArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Sale$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sale$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SaleFieldRefs {
    readonly id: Prisma.FieldRef<"Sale", 'String'>;
    readonly discount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Sale", 'DateTime'>;
    readonly cashSessionId: Prisma.FieldRef<"Sale", 'String'>;
    readonly code: Prisma.FieldRef<"Sale", 'String'>;
    readonly customerCpf: Prisma.FieldRef<"Sale", 'String'>;
    readonly paymentMethod: Prisma.FieldRef<"Sale", 'String'>;
    readonly total: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly userId: Prisma.FieldRef<"Sale", 'String'>;
    readonly finalAmount: Prisma.FieldRef<"Sale", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Sale", 'SaleStatus'>;
}
export type SaleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SaleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
};
export type SaleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SaleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.SaleCreateManyInput | Prisma.SaleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SaleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SaleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type SaleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleUpdateManyMutationInput, Prisma.SaleUncheckedUpdateManyInput>;
    where?: Prisma.SaleWhereInput;
    limit?: number;
    include?: Prisma.SaleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SaleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleCreateInput, Prisma.SaleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SaleUpdateInput, Prisma.SaleUncheckedUpdateInput>;
};
export type SaleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where: Prisma.SaleWhereUniqueInput;
};
export type SaleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleWhereInput;
    limit?: number;
};
export type Sale$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Sale$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Sale$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type Sale$cashSessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashSessionSelect<ExtArgs> | null;
    omit?: Prisma.CashSessionOmit<ExtArgs> | null;
    include?: Prisma.CashSessionInclude<ExtArgs> | null;
    where?: Prisma.CashSessionWhereInput;
};
export type Sale$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type SaleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
};
export {};
