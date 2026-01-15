import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InventoryItemModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryItemPayload>;
export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null;
    _avg: InventoryItemAvgAggregateOutputType | null;
    _sum: InventoryItemSumAggregateOutputType | null;
    _min: InventoryItemMinAggregateOutputType | null;
    _max: InventoryItemMaxAggregateOutputType | null;
};
export type InventoryItemAvgAggregateOutputType = {
    minStock: number | null;
    quantity: number | null;
};
export type InventoryItemSumAggregateOutputType = {
    minStock: number | null;
    quantity: number | null;
};
export type InventoryItemMinAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
    minStock: number | null;
    quantity: number | null;
    productId: string | null;
};
export type InventoryItemMaxAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
    minStock: number | null;
    quantity: number | null;
    productId: string | null;
};
export type InventoryItemCountAggregateOutputType = {
    id: number;
    updatedAt: number;
    minStock: number;
    quantity: number;
    productId: number;
    _all: number;
};
export type InventoryItemAvgAggregateInputType = {
    minStock?: true;
    quantity?: true;
};
export type InventoryItemSumAggregateInputType = {
    minStock?: true;
    quantity?: true;
};
export type InventoryItemMinAggregateInputType = {
    id?: true;
    updatedAt?: true;
    minStock?: true;
    quantity?: true;
    productId?: true;
};
export type InventoryItemMaxAggregateInputType = {
    id?: true;
    updatedAt?: true;
    minStock?: true;
    quantity?: true;
    productId?: true;
};
export type InventoryItemCountAggregateInputType = {
    id?: true;
    updatedAt?: true;
    minStock?: true;
    quantity?: true;
    productId?: true;
    _all?: true;
};
export type InventoryItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryItemCountAggregateInputType;
    _avg?: InventoryItemAvgAggregateInputType;
    _sum?: InventoryItemSumAggregateInputType;
    _min?: InventoryItemMinAggregateInputType;
    _max?: InventoryItemMaxAggregateInputType;
};
export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
    [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventoryItem[P]> : Prisma.GetScalarType<T[P], AggregateInventoryItem[P]>;
};
export type InventoryItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithAggregationInput | Prisma.InventoryItemOrderByWithAggregationInput[];
    by: Prisma.InventoryItemScalarFieldEnum[] | Prisma.InventoryItemScalarFieldEnum;
    having?: Prisma.InventoryItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryItemCountAggregateInputType | true;
    _avg?: InventoryItemAvgAggregateInputType;
    _sum?: InventoryItemSumAggregateInputType;
    _min?: InventoryItemMinAggregateInputType;
    _max?: InventoryItemMaxAggregateInputType;
};
export type InventoryItemGroupByOutputType = {
    id: string;
    updatedAt: Date;
    minStock: number;
    quantity: number;
    productId: string;
    _count: InventoryItemCountAggregateOutputType | null;
    _avg: InventoryItemAvgAggregateOutputType | null;
    _sum: InventoryItemSumAggregateOutputType | null;
    _min: InventoryItemMinAggregateOutputType | null;
    _max: InventoryItemMaxAggregateOutputType | null;
};
type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryItemGroupByOutputType[P]>;
}>>;
export type InventoryItemWhereInput = {
    AND?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    OR?: Prisma.InventoryItemWhereInput[];
    NOT?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    id?: Prisma.StringFilter<"InventoryItem"> | string;
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    minStock?: Prisma.IntFilter<"InventoryItem"> | number;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    productId?: Prisma.StringFilter<"InventoryItem"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    movements?: Prisma.InventoryMovementListRelationFilter;
};
export type InventoryItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    movements?: Prisma.InventoryMovementOrderByRelationAggregateInput;
};
export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    OR?: Prisma.InventoryItemWhereInput[];
    NOT?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    minStock?: Prisma.IntFilter<"InventoryItem"> | number;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    productId?: Prisma.StringFilter<"InventoryItem"> | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    movements?: Prisma.InventoryMovementListRelationFilter;
}, "id">;
export type InventoryItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    _count?: Prisma.InventoryItemCountOrderByAggregateInput;
    _avg?: Prisma.InventoryItemAvgOrderByAggregateInput;
    _max?: Prisma.InventoryItemMaxOrderByAggregateInput;
    _min?: Prisma.InventoryItemMinOrderByAggregateInput;
    _sum?: Prisma.InventoryItemSumOrderByAggregateInput;
};
export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryItemScalarWhereWithAggregatesInput | Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryItemScalarWhereWithAggregatesInput | Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string;
    minStock?: Prisma.IntWithAggregatesFilter<"InventoryItem"> | number;
    quantity?: Prisma.IntWithAggregatesFilter<"InventoryItem"> | number;
    productId?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
};
export type InventoryItemCreateInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    product: Prisma.ProductCreateNestedOneWithoutInventoryItemsInput;
    movements?: Prisma.InventoryMovementCreateNestedManyWithoutInventoryItemInput;
};
export type InventoryItemUncheckedCreateInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    productId: string;
    movements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutInventoryItemInput;
};
export type InventoryItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutInventoryItemsNestedInput;
    movements?: Prisma.InventoryMovementUpdateManyWithoutInventoryItemNestedInput;
};
export type InventoryItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    movements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutInventoryItemNestedInput;
};
export type InventoryItemCreateManyInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    productId: string;
};
export type InventoryItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InventoryItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryItemListRelationFilter = {
    every?: Prisma.InventoryItemWhereInput;
    some?: Prisma.InventoryItemWhereInput;
    none?: Prisma.InventoryItemWhereInput;
};
export type InventoryItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventoryItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type InventoryItemAvgOrderByAggregateInput = {
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type InventoryItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type InventoryItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type InventoryItemSumOrderByAggregateInput = {
    minStock?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type InventoryItemScalarRelationFilter = {
    is?: Prisma.InventoryItemWhereInput;
    isNot?: Prisma.InventoryItemWhereInput;
};
export type InventoryItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput> | Prisma.InventoryItemCreateWithoutProductInput[] | Prisma.InventoryItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutProductInput | Prisma.InventoryItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryItemCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
};
export type InventoryItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput> | Prisma.InventoryItemCreateWithoutProductInput[] | Prisma.InventoryItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutProductInput | Prisma.InventoryItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryItemCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
};
export type InventoryItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput> | Prisma.InventoryItemCreateWithoutProductInput[] | Prisma.InventoryItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutProductInput | Prisma.InventoryItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryItemUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryItemCreateManyProductInputEnvelope;
    set?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    disconnect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    delete?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    update?: Prisma.InventoryItemUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryItemUpdateManyWithWhereWithoutProductInput | Prisma.InventoryItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
};
export type InventoryItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput> | Prisma.InventoryItemCreateWithoutProductInput[] | Prisma.InventoryItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutProductInput | Prisma.InventoryItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryItemUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryItemCreateManyProductInputEnvelope;
    set?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    disconnect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    delete?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    update?: Prisma.InventoryItemUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryItemUpdateManyWithWhereWithoutProductInput | Prisma.InventoryItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
};
export type InventoryItemCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutMovementsInput, Prisma.InventoryItemUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutMovementsInput, Prisma.InventoryItemUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.InventoryItemUpsertWithoutMovementsInput;
    connect?: Prisma.InventoryItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventoryItemUpdateToOneWithWhereWithoutMovementsInput, Prisma.InventoryItemUpdateWithoutMovementsInput>, Prisma.InventoryItemUncheckedUpdateWithoutMovementsInput>;
};
export type InventoryItemCreateWithoutProductInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    movements?: Prisma.InventoryMovementCreateNestedManyWithoutInventoryItemInput;
};
export type InventoryItemUncheckedCreateWithoutProductInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    movements?: Prisma.InventoryMovementUncheckedCreateNestedManyWithoutInventoryItemInput;
};
export type InventoryItemCreateOrConnectWithoutProductInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput>;
};
export type InventoryItemCreateManyProductInputEnvelope = {
    data: Prisma.InventoryItemCreateManyProductInput | Prisma.InventoryItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type InventoryItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryItemUpdateWithoutProductInput, Prisma.InventoryItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutProductInput, Prisma.InventoryItemUncheckedCreateWithoutProductInput>;
};
export type InventoryItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryItemUpdateWithoutProductInput, Prisma.InventoryItemUncheckedUpdateWithoutProductInput>;
};
export type InventoryItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.InventoryItemScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyWithoutProductInput>;
};
export type InventoryItemScalarWhereInput = {
    AND?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
    OR?: Prisma.InventoryItemScalarWhereInput[];
    NOT?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
    id?: Prisma.StringFilter<"InventoryItem"> | string;
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    minStock?: Prisma.IntFilter<"InventoryItem"> | number;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    productId?: Prisma.StringFilter<"InventoryItem"> | string;
};
export type InventoryItemCreateWithoutMovementsInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    product: Prisma.ProductCreateNestedOneWithoutInventoryItemsInput;
};
export type InventoryItemUncheckedCreateWithoutMovementsInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
    productId: string;
};
export type InventoryItemCreateOrConnectWithoutMovementsInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutMovementsInput, Prisma.InventoryItemUncheckedCreateWithoutMovementsInput>;
};
export type InventoryItemUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.InventoryItemUpdateWithoutMovementsInput, Prisma.InventoryItemUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutMovementsInput, Prisma.InventoryItemUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.InventoryItemWhereInput;
};
export type InventoryItemUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.InventoryItemWhereInput;
    data: Prisma.XOR<Prisma.InventoryItemUpdateWithoutMovementsInput, Prisma.InventoryItemUncheckedUpdateWithoutMovementsInput>;
};
export type InventoryItemUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutInventoryItemsNestedInput;
};
export type InventoryItemUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryItemCreateManyProductInput = {
    id?: string;
    updatedAt?: Date | string;
    minStock?: number;
    quantity?: number;
};
export type InventoryItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    movements?: Prisma.InventoryMovementUpdateManyWithoutInventoryItemNestedInput;
};
export type InventoryItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    movements?: Prisma.InventoryMovementUncheckedUpdateManyWithoutInventoryItemNestedInput;
};
export type InventoryItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    minStock?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InventoryItemCountOutputType = {
    movements: number;
};
export type InventoryItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movements?: boolean | InventoryItemCountOutputTypeCountMovementsArgs;
};
export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemCountOutputTypeSelect<ExtArgs> | null;
};
export type InventoryItemCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
};
export type InventoryItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    minStock?: boolean;
    quantity?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    movements?: boolean | Prisma.InventoryItem$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.InventoryItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    minStock?: boolean;
    quantity?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    minStock?: boolean;
    quantity?: boolean;
    productId?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectScalar = {
    id?: boolean;
    updatedAt?: boolean;
    minStock?: boolean;
    quantity?: boolean;
    productId?: boolean;
};
export type InventoryItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "updatedAt" | "minStock" | "quantity" | "productId", ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    movements?: boolean | Prisma.InventoryItem$movementsArgs<ExtArgs>;
    _count?: boolean | Prisma.InventoryItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $InventoryItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InventoryItem";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        movements: Prisma.$InventoryMovementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        updatedAt: Date;
        minStock: number;
        quantity: number;
        productId: string;
    }, ExtArgs["result"]["inventoryItem"]>;
    composites: {};
};
export type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload, S>;
export type InventoryItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryItemCountAggregateInputType | true;
};
export interface InventoryItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'];
        meta: {
            name: 'InventoryItem';
        };
    };
    findUnique<T extends InventoryItemFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryItemFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryItemFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryItemCreateArgs>(args: Prisma.SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryItemCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryItemDeleteArgs>(args: Prisma.SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryItemUpdateArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryItemUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryItemUpsertArgs>(args: Prisma.SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryItemCountArgs>(args?: Prisma.Subset<T, InventoryItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryItemCountAggregateOutputType> : number>;
    aggregate<T extends InventoryItemAggregateArgs>(args: Prisma.Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>;
    groupBy<T extends InventoryItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryItemGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryItemFieldRefs;
}
export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movements<T extends Prisma.InventoryItem$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InventoryItem$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryItemFieldRefs {
    readonly id: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"InventoryItem", 'DateTime'>;
    readonly minStock: Prisma.FieldRef<"InventoryItem", 'Int'>;
    readonly quantity: Prisma.FieldRef<"InventoryItem", 'Int'>;
    readonly productId: Prisma.FieldRef<"InventoryItem", 'String'>;
}
export type InventoryItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemCreateInput, Prisma.InventoryItemUncheckedCreateInput>;
};
export type InventoryItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryItemCreateManyInput | Prisma.InventoryItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    data: Prisma.InventoryItemCreateManyInput | Prisma.InventoryItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemUpdateInput, Prisma.InventoryItemUncheckedUpdateInput>;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyInput>;
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
};
export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyInput>;
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
    include?: Prisma.InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryItemCreateInput, Prisma.InventoryItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryItemUpdateInput, Prisma.InventoryItemUncheckedUpdateInput>;
};
export type InventoryItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
};
export type InventoryItem$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
};
export {};
