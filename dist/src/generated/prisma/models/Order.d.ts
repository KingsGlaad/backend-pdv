import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    number: number | null;
};
export type OrderSumAggregateOutputType = {
    number: number | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    number: number | null;
    table: string | null;
    status: $Enums.OrderStatus | null;
    openedAt: Date | null;
    closedAt: Date | null;
    openedById: string | null;
    createdAt: Date | null;
    saleId: string | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    number: number | null;
    table: string | null;
    status: $Enums.OrderStatus | null;
    openedAt: Date | null;
    closedAt: Date | null;
    openedById: string | null;
    createdAt: Date | null;
    saleId: string | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    number: number;
    table: number;
    status: number;
    openedAt: number;
    closedAt: number;
    openedById: number;
    createdAt: number;
    saleId: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    number?: true;
};
export type OrderSumAggregateInputType = {
    number?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    number?: true;
    table?: true;
    status?: true;
    openedAt?: true;
    closedAt?: true;
    openedById?: true;
    createdAt?: true;
    saleId?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    number?: true;
    table?: true;
    status?: true;
    openedAt?: true;
    closedAt?: true;
    openedById?: true;
    createdAt?: true;
    saleId?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    number?: true;
    table?: true;
    status?: true;
    openedAt?: true;
    closedAt?: true;
    openedById?: true;
    createdAt?: true;
    saleId?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    number: number;
    table: string | null;
    status: $Enums.OrderStatus;
    openedAt: Date;
    closedAt: Date | null;
    openedById: string;
    createdAt: Date;
    saleId: string | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    number?: Prisma.IntFilter<"Order"> | number;
    table?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    openedById?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    saleId?: Prisma.StringNullableFilter<"Order"> | string | null;
    openedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    table?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    openedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    openedBy?: Prisma.UserOrderByWithRelationInput;
    sale?: Prisma.SaleOrderByWithRelationInput;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    number?: Prisma.IntFilter<"Order"> | number;
    table?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    openedById?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    saleId?: Prisma.StringNullableFilter<"Order"> | string | null;
    openedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sale?: Prisma.XOR<Prisma.SaleNullableScalarRelationFilter, Prisma.SaleWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    table?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    openedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    saleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    number?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    table?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
    openedById?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    saleId?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
};
export type OrderCreateInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    openedBy: Prisma.UserCreateNestedOneWithoutOrdersOpenedInput;
    sale?: Prisma.SaleCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    openedById: string;
    createdAt?: Date | string;
    saleId?: string | null;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openedBy?: Prisma.UserUpdateOneRequiredWithoutOrdersOpenedNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    openedById: string;
    createdAt?: Date | string;
    saleId?: string | null;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    table?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    openedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    table?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    openedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    table?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    openedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    saleId?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type OrderNullableScalarRelationFilter = {
    is?: Prisma.OrderWhereInput | null;
    isNot?: Prisma.OrderWhereInput | null;
};
export type OrderCreateNestedManyWithoutOpenedByInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput> | Prisma.OrderCreateWithoutOpenedByInput[] | Prisma.OrderUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOpenedByInput | Prisma.OrderCreateOrConnectWithoutOpenedByInput[];
    createMany?: Prisma.OrderCreateManyOpenedByInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutOpenedByInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput> | Prisma.OrderCreateWithoutOpenedByInput[] | Prisma.OrderUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOpenedByInput | Prisma.OrderCreateOrConnectWithoutOpenedByInput[];
    createMany?: Prisma.OrderCreateManyOpenedByInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutOpenedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput> | Prisma.OrderCreateWithoutOpenedByInput[] | Prisma.OrderUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOpenedByInput | Prisma.OrderCreateOrConnectWithoutOpenedByInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutOpenedByInput | Prisma.OrderUpsertWithWhereUniqueWithoutOpenedByInput[];
    createMany?: Prisma.OrderCreateManyOpenedByInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutOpenedByInput | Prisma.OrderUpdateWithWhereUniqueWithoutOpenedByInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutOpenedByInput | Prisma.OrderUpdateManyWithWhereWithoutOpenedByInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutOpenedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput> | Prisma.OrderCreateWithoutOpenedByInput[] | Prisma.OrderUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOpenedByInput | Prisma.OrderCreateOrConnectWithoutOpenedByInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutOpenedByInput | Prisma.OrderUpsertWithWhereUniqueWithoutOpenedByInput[];
    createMany?: Prisma.OrderCreateManyOpenedByInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutOpenedByInput | Prisma.OrderUpdateWithWhereUniqueWithoutOpenedByInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutOpenedByInput | Prisma.OrderUpdateManyWithWhereWithoutOpenedByInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type OrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.OrderUpsertWithoutItemsInput;
    disconnect?: Prisma.OrderWhereInput | boolean;
    delete?: Prisma.OrderWhereInput | boolean;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, Prisma.OrderUpdateWithoutItemsInput>, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput> | Prisma.OrderCreateWithoutSaleInput[] | Prisma.OrderUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleInput | Prisma.OrderCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.OrderCreateManySaleInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput> | Prisma.OrderCreateWithoutSaleInput[] | Prisma.OrderUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleInput | Prisma.OrderCreateOrConnectWithoutSaleInput[];
    createMany?: Prisma.OrderCreateManySaleInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput> | Prisma.OrderCreateWithoutSaleInput[] | Prisma.OrderUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleInput | Prisma.OrderCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutSaleInput | Prisma.OrderUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.OrderCreateManySaleInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutSaleInput | Prisma.OrderUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutSaleInput | Prisma.OrderUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput> | Prisma.OrderCreateWithoutSaleInput[] | Prisma.OrderUncheckedCreateWithoutSaleInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleInput | Prisma.OrderCreateOrConnectWithoutSaleInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutSaleInput | Prisma.OrderUpsertWithWhereUniqueWithoutSaleInput[];
    createMany?: Prisma.OrderCreateManySaleInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutSaleInput | Prisma.OrderUpdateWithWhereUniqueWithoutSaleInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutSaleInput | Prisma.OrderUpdateManyWithWhereWithoutSaleInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateWithoutOpenedByInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    sale?: Prisma.SaleCreateNestedOneWithoutOrdersInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOpenedByInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    saleId?: string | null;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOpenedByInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput>;
};
export type OrderCreateManyOpenedByInputEnvelope = {
    data: Prisma.OrderCreateManyOpenedByInput | Prisma.OrderCreateManyOpenedByInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutOpenedByInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOpenedByInput, Prisma.OrderUncheckedUpdateWithoutOpenedByInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOpenedByInput, Prisma.OrderUncheckedCreateWithoutOpenedByInput>;
};
export type OrderUpdateWithWhereUniqueWithoutOpenedByInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOpenedByInput, Prisma.OrderUncheckedUpdateWithoutOpenedByInput>;
};
export type OrderUpdateManyWithWhereWithoutOpenedByInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutOpenedByInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    number?: Prisma.IntFilter<"Order"> | number;
    table?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    openedById?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    saleId?: Prisma.StringNullableFilter<"Order"> | string | null;
};
export type OrderCreateWithoutItemsInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    openedBy: Prisma.UserCreateNestedOneWithoutOrdersOpenedInput;
    sale?: Prisma.SaleCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    openedById: string;
    createdAt?: Date | string;
    saleId?: string | null;
};
export type OrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
};
export type OrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openedBy?: Prisma.UserUpdateOneRequiredWithoutOrdersOpenedNestedInput;
    sale?: Prisma.SaleUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderCreateWithoutSaleInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    openedBy: Prisma.UserCreateNestedOneWithoutOrdersOpenedInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutSaleInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    openedById: string;
    createdAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutSaleInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput>;
};
export type OrderCreateManySaleInputEnvelope = {
    data: Prisma.OrderCreateManySaleInput | Prisma.OrderCreateManySaleInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutSaleInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutSaleInput, Prisma.OrderUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSaleInput, Prisma.OrderUncheckedCreateWithoutSaleInput>;
};
export type OrderUpdateWithWhereUniqueWithoutSaleInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutSaleInput, Prisma.OrderUncheckedUpdateWithoutSaleInput>;
};
export type OrderUpdateManyWithWhereWithoutSaleInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutSaleInput>;
};
export type OrderCreateManyOpenedByInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    saleId?: string | null;
};
export type OrderUpdateWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sale?: Prisma.SaleUpdateOneWithoutOrdersNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderCreateManySaleInput = {
    id?: string;
    number: number;
    table?: string | null;
    status?: $Enums.OrderStatus;
    openedAt?: Date | string;
    closedAt?: Date | string | null;
    openedById: string;
    createdAt?: Date | string;
};
export type OrderUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openedBy?: Prisma.UserUpdateOneRequiredWithoutOrdersOpenedNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    openedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    items: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    table?: boolean;
    status?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    openedById?: boolean;
    createdAt?: boolean;
    saleId?: boolean;
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    table?: boolean;
    status?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    openedById?: boolean;
    createdAt?: boolean;
    saleId?: boolean;
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    table?: boolean;
    status?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    openedById?: boolean;
    createdAt?: boolean;
    saleId?: boolean;
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    number?: boolean;
    table?: boolean;
    status?: boolean;
    openedAt?: boolean;
    closedAt?: boolean;
    openedById?: boolean;
    createdAt?: boolean;
    saleId?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "number" | "table" | "status" | "openedAt" | "closedAt" | "openedById" | "createdAt" | "saleId", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    openedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sale?: boolean | Prisma.Order$saleArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        openedBy: Prisma.$UserPayload<ExtArgs>;
        sale: Prisma.$SalePayload<ExtArgs> | null;
        items: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        number: number;
        table: string | null;
        status: $Enums.OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        createdAt: Date;
        saleId: string | null;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    openedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sale<T extends Prisma.Order$saleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$saleArgs<ExtArgs>>): Prisma.Prisma__SaleClient<runtime.Types.Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Order$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly number: Prisma.FieldRef<"Order", 'Int'>;
    readonly table: Prisma.FieldRef<"Order", 'String'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly openedAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly openedById: Prisma.FieldRef<"Order", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly saleId: Prisma.FieldRef<"Order", 'String'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$saleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleSelect<ExtArgs> | null;
    omit?: Prisma.SaleOmit<ExtArgs> | null;
    include?: Prisma.SaleInclude<ExtArgs> | null;
    where?: Prisma.SaleWhereInput;
};
export type Order$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
export {};
