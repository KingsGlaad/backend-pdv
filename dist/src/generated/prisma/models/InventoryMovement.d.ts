import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InventoryMovementModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryMovementPayload>;
export type AggregateInventoryMovement = {
    _count: InventoryMovementCountAggregateOutputType | null;
    _avg: InventoryMovementAvgAggregateOutputType | null;
    _sum: InventoryMovementSumAggregateOutputType | null;
    _min: InventoryMovementMinAggregateOutputType | null;
    _max: InventoryMovementMaxAggregateOutputType | null;
};
export type InventoryMovementAvgAggregateOutputType = {
    quantity: number | null;
};
export type InventoryMovementSumAggregateOutputType = {
    quantity: number | null;
};
export type InventoryMovementMinAggregateOutputType = {
    id: string | null;
    inventoryItemId: string | null;
    quantity: number | null;
    reason: string | null;
    createdAt: Date | null;
    userId: string | null;
    type: string | null;
};
export type InventoryMovementMaxAggregateOutputType = {
    id: string | null;
    inventoryItemId: string | null;
    quantity: number | null;
    reason: string | null;
    createdAt: Date | null;
    userId: string | null;
    type: string | null;
};
export type InventoryMovementCountAggregateOutputType = {
    id: number;
    inventoryItemId: number;
    quantity: number;
    reason: number;
    createdAt: number;
    userId: number;
    type: number;
    _all: number;
};
export type InventoryMovementAvgAggregateInputType = {
    quantity?: true;
};
export type InventoryMovementSumAggregateInputType = {
    quantity?: true;
};
export type InventoryMovementMinAggregateInputType = {
    id?: true;
    inventoryItemId?: true;
    quantity?: true;
    reason?: true;
    createdAt?: true;
    userId?: true;
    type?: true;
};
export type InventoryMovementMaxAggregateInputType = {
    id?: true;
    inventoryItemId?: true;
    quantity?: true;
    reason?: true;
    createdAt?: true;
    userId?: true;
    type?: true;
};
export type InventoryMovementCountAggregateInputType = {
    id?: true;
    inventoryItemId?: true;
    quantity?: true;
    reason?: true;
    createdAt?: true;
    userId?: true;
    type?: true;
    _all?: true;
};
export type InventoryMovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
    orderBy?: Prisma.InventoryMovementOrderByWithRelationInput | Prisma.InventoryMovementOrderByWithRelationInput[];
    cursor?: Prisma.InventoryMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryMovementCountAggregateInputType;
    _avg?: InventoryMovementAvgAggregateInputType;
    _sum?: InventoryMovementSumAggregateInputType;
    _min?: InventoryMovementMinAggregateInputType;
    _max?: InventoryMovementMaxAggregateInputType;
};
export type GetInventoryMovementAggregateType<T extends InventoryMovementAggregateArgs> = {
    [P in keyof T & keyof AggregateInventoryMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventoryMovement[P]> : Prisma.GetScalarType<T[P], AggregateInventoryMovement[P]>;
};
export type InventoryMovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
    orderBy?: Prisma.InventoryMovementOrderByWithAggregationInput | Prisma.InventoryMovementOrderByWithAggregationInput[];
    by: Prisma.InventoryMovementScalarFieldEnum[] | Prisma.InventoryMovementScalarFieldEnum;
    having?: Prisma.InventoryMovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryMovementCountAggregateInputType | true;
    _avg?: InventoryMovementAvgAggregateInputType;
    _sum?: InventoryMovementSumAggregateInputType;
    _min?: InventoryMovementMinAggregateInputType;
    _max?: InventoryMovementMaxAggregateInputType;
};
export type InventoryMovementGroupByOutputType = {
    id: string;
    inventoryItemId: string;
    quantity: number;
    reason: string | null;
    createdAt: Date;
    userId: string;
    type: string;
    _count: InventoryMovementCountAggregateOutputType | null;
    _avg: InventoryMovementAvgAggregateOutputType | null;
    _sum: InventoryMovementSumAggregateOutputType | null;
    _min: InventoryMovementMinAggregateOutputType | null;
    _max: InventoryMovementMaxAggregateOutputType | null;
};
type GetInventoryMovementGroupByPayload<T extends InventoryMovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryMovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryMovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryMovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>;
}>>;
export type InventoryMovementWhereInput = {
    AND?: Prisma.InventoryMovementWhereInput | Prisma.InventoryMovementWhereInput[];
    OR?: Prisma.InventoryMovementWhereInput[];
    NOT?: Prisma.InventoryMovementWhereInput | Prisma.InventoryMovementWhereInput[];
    id?: Prisma.StringFilter<"InventoryMovement"> | string;
    inventoryItemId?: Prisma.StringFilter<"InventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"InventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"InventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryMovement"> | Date | string;
    userId?: Prisma.StringFilter<"InventoryMovement"> | string;
    type?: Prisma.StringFilter<"InventoryMovement"> | string;
    inventoryItem?: Prisma.XOR<Prisma.InventoryItemScalarRelationFilter, Prisma.InventoryItemWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type InventoryMovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventoryItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    inventoryItem?: Prisma.InventoryItemOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type InventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InventoryMovementWhereInput | Prisma.InventoryMovementWhereInput[];
    OR?: Prisma.InventoryMovementWhereInput[];
    NOT?: Prisma.InventoryMovementWhereInput | Prisma.InventoryMovementWhereInput[];
    inventoryItemId?: Prisma.StringFilter<"InventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"InventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"InventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryMovement"> | Date | string;
    userId?: Prisma.StringFilter<"InventoryMovement"> | string;
    type?: Prisma.StringFilter<"InventoryMovement"> | string;
    inventoryItem?: Prisma.XOR<Prisma.InventoryItemScalarRelationFilter, Prisma.InventoryItemWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type InventoryMovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventoryItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.InventoryMovementCountOrderByAggregateInput;
    _avg?: Prisma.InventoryMovementAvgOrderByAggregateInput;
    _max?: Prisma.InventoryMovementMaxOrderByAggregateInput;
    _min?: Prisma.InventoryMovementMinOrderByAggregateInput;
    _sum?: Prisma.InventoryMovementSumOrderByAggregateInput;
};
export type InventoryMovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryMovementScalarWhereWithAggregatesInput | Prisma.InventoryMovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryMovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryMovementScalarWhereWithAggregatesInput | Prisma.InventoryMovementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InventoryMovement"> | string;
    inventoryItemId?: Prisma.StringWithAggregatesFilter<"InventoryMovement"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"InventoryMovement"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryMovement"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"InventoryMovement"> | string;
    type?: Prisma.StringWithAggregatesFilter<"InventoryMovement"> | string;
};
export type InventoryMovementCreateInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    type: string;
    inventoryItem: Prisma.InventoryItemCreateNestedOneWithoutMovementsInput;
    user: Prisma.UserCreateNestedOneWithoutInventoryMovirementsInput;
};
export type InventoryMovementUncheckedCreateInput = {
    id?: string;
    inventoryItemId: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    userId: string;
    type: string;
};
export type InventoryMovementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItem?: Prisma.InventoryItemUpdateOneRequiredWithoutMovementsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutInventoryMovirementsNestedInput;
};
export type InventoryMovementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementCreateManyInput = {
    id?: string;
    inventoryItemId: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    userId: string;
    type: string;
};
export type InventoryMovementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementListRelationFilter = {
    every?: Prisma.InventoryMovementWhereInput;
    some?: Prisma.InventoryMovementWhereInput;
    none?: Prisma.InventoryMovementWhereInput;
};
export type InventoryMovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventoryMovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type InventoryMovementAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type InventoryMovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type InventoryMovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type InventoryMovementSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type InventoryMovementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput> | Prisma.InventoryMovementCreateWithoutUserInput[] | Prisma.InventoryMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutUserInput | Prisma.InventoryMovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InventoryMovementCreateManyUserInputEnvelope;
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
};
export type InventoryMovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput> | Prisma.InventoryMovementCreateWithoutUserInput[] | Prisma.InventoryMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutUserInput | Prisma.InventoryMovementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InventoryMovementCreateManyUserInputEnvelope;
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
};
export type InventoryMovementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput> | Prisma.InventoryMovementCreateWithoutUserInput[] | Prisma.InventoryMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutUserInput | Prisma.InventoryMovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InventoryMovementUpsertWithWhereUniqueWithoutUserInput | Prisma.InventoryMovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InventoryMovementCreateManyUserInputEnvelope;
    set?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    delete?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    update?: Prisma.InventoryMovementUpdateWithWhereUniqueWithoutUserInput | Prisma.InventoryMovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InventoryMovementUpdateManyWithWhereWithoutUserInput | Prisma.InventoryMovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
};
export type InventoryMovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput> | Prisma.InventoryMovementCreateWithoutUserInput[] | Prisma.InventoryMovementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutUserInput | Prisma.InventoryMovementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InventoryMovementUpsertWithWhereUniqueWithoutUserInput | Prisma.InventoryMovementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InventoryMovementCreateManyUserInputEnvelope;
    set?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    delete?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    update?: Prisma.InventoryMovementUpdateWithWhereUniqueWithoutUserInput | Prisma.InventoryMovementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InventoryMovementUpdateManyWithWhereWithoutUserInput | Prisma.InventoryMovementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
};
export type InventoryMovementCreateNestedManyWithoutInventoryItemInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput> | Prisma.InventoryMovementCreateWithoutInventoryItemInput[] | Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput | Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput[];
    createMany?: Prisma.InventoryMovementCreateManyInventoryItemInputEnvelope;
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
};
export type InventoryMovementUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput> | Prisma.InventoryMovementCreateWithoutInventoryItemInput[] | Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput | Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput[];
    createMany?: Prisma.InventoryMovementCreateManyInventoryItemInputEnvelope;
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
};
export type InventoryMovementUpdateManyWithoutInventoryItemNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput> | Prisma.InventoryMovementCreateWithoutInventoryItemInput[] | Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput | Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput[];
    upsert?: Prisma.InventoryMovementUpsertWithWhereUniqueWithoutInventoryItemInput | Prisma.InventoryMovementUpsertWithWhereUniqueWithoutInventoryItemInput[];
    createMany?: Prisma.InventoryMovementCreateManyInventoryItemInputEnvelope;
    set?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    delete?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    update?: Prisma.InventoryMovementUpdateWithWhereUniqueWithoutInventoryItemInput | Prisma.InventoryMovementUpdateWithWhereUniqueWithoutInventoryItemInput[];
    updateMany?: Prisma.InventoryMovementUpdateManyWithWhereWithoutInventoryItemInput | Prisma.InventoryMovementUpdateManyWithWhereWithoutInventoryItemInput[];
    deleteMany?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
};
export type InventoryMovementUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput> | Prisma.InventoryMovementCreateWithoutInventoryItemInput[] | Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput[];
    connectOrCreate?: Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput | Prisma.InventoryMovementCreateOrConnectWithoutInventoryItemInput[];
    upsert?: Prisma.InventoryMovementUpsertWithWhereUniqueWithoutInventoryItemInput | Prisma.InventoryMovementUpsertWithWhereUniqueWithoutInventoryItemInput[];
    createMany?: Prisma.InventoryMovementCreateManyInventoryItemInputEnvelope;
    set?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    delete?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    connect?: Prisma.InventoryMovementWhereUniqueInput | Prisma.InventoryMovementWhereUniqueInput[];
    update?: Prisma.InventoryMovementUpdateWithWhereUniqueWithoutInventoryItemInput | Prisma.InventoryMovementUpdateWithWhereUniqueWithoutInventoryItemInput[];
    updateMany?: Prisma.InventoryMovementUpdateManyWithWhereWithoutInventoryItemInput | Prisma.InventoryMovementUpdateManyWithWhereWithoutInventoryItemInput[];
    deleteMany?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
};
export type InventoryMovementCreateWithoutUserInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    type: string;
    inventoryItem: Prisma.InventoryItemCreateNestedOneWithoutMovementsInput;
};
export type InventoryMovementUncheckedCreateWithoutUserInput = {
    id?: string;
    inventoryItemId: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    type: string;
};
export type InventoryMovementCreateOrConnectWithoutUserInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput>;
};
export type InventoryMovementCreateManyUserInputEnvelope = {
    data: Prisma.InventoryMovementCreateManyUserInput | Prisma.InventoryMovementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type InventoryMovementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryMovementUpdateWithoutUserInput, Prisma.InventoryMovementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.InventoryMovementCreateWithoutUserInput, Prisma.InventoryMovementUncheckedCreateWithoutUserInput>;
};
export type InventoryMovementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateWithoutUserInput, Prisma.InventoryMovementUncheckedUpdateWithoutUserInput>;
};
export type InventoryMovementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.InventoryMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateManyMutationInput, Prisma.InventoryMovementUncheckedUpdateManyWithoutUserInput>;
};
export type InventoryMovementScalarWhereInput = {
    AND?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
    OR?: Prisma.InventoryMovementScalarWhereInput[];
    NOT?: Prisma.InventoryMovementScalarWhereInput | Prisma.InventoryMovementScalarWhereInput[];
    id?: Prisma.StringFilter<"InventoryMovement"> | string;
    inventoryItemId?: Prisma.StringFilter<"InventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"InventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"InventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryMovement"> | Date | string;
    userId?: Prisma.StringFilter<"InventoryMovement"> | string;
    type?: Prisma.StringFilter<"InventoryMovement"> | string;
};
export type InventoryMovementCreateWithoutInventoryItemInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    type: string;
    user: Prisma.UserCreateNestedOneWithoutInventoryMovirementsInput;
};
export type InventoryMovementUncheckedCreateWithoutInventoryItemInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    userId: string;
    type: string;
};
export type InventoryMovementCreateOrConnectWithoutInventoryItemInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput>;
};
export type InventoryMovementCreateManyInventoryItemInputEnvelope = {
    data: Prisma.InventoryMovementCreateManyInventoryItemInput | Prisma.InventoryMovementCreateManyInventoryItemInput[];
    skipDuplicates?: boolean;
};
export type InventoryMovementUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryMovementUpdateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedUpdateWithoutInventoryItemInput>;
    create: Prisma.XOR<Prisma.InventoryMovementCreateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedCreateWithoutInventoryItemInput>;
};
export type InventoryMovementUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: Prisma.InventoryMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateWithoutInventoryItemInput, Prisma.InventoryMovementUncheckedUpdateWithoutInventoryItemInput>;
};
export type InventoryMovementUpdateManyWithWhereWithoutInventoryItemInput = {
    where: Prisma.InventoryMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateManyMutationInput, Prisma.InventoryMovementUncheckedUpdateManyWithoutInventoryItemInput>;
};
export type InventoryMovementCreateManyUserInput = {
    id?: string;
    inventoryItemId: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    type: string;
};
export type InventoryMovementUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItem?: Prisma.InventoryItemUpdateOneRequiredWithoutMovementsNestedInput;
};
export type InventoryMovementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementCreateManyInventoryItemInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    userId: string;
    type: string;
};
export type InventoryMovementUpdateWithoutInventoryItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutInventoryMovirementsNestedInput;
};
export type InventoryMovementUncheckedUpdateWithoutInventoryItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InventoryMovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    type?: boolean;
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryMovement"]>;
export type InventoryMovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    type?: boolean;
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryMovement"]>;
export type InventoryMovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    type?: boolean;
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryMovement"]>;
export type InventoryMovementSelectScalar = {
    id?: boolean;
    inventoryItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    type?: boolean;
};
export type InventoryMovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventoryItemId" | "quantity" | "reason" | "createdAt" | "userId" | "type", ExtArgs["result"]["inventoryMovement"]>;
export type InventoryMovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type InventoryMovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type InventoryMovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventoryItem?: boolean | Prisma.InventoryItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $InventoryMovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InventoryMovement";
    objects: {
        inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        inventoryItemId: string;
        quantity: number;
        reason: string | null;
        createdAt: Date;
        userId: string;
        type: string;
    }, ExtArgs["result"]["inventoryMovement"]>;
    composites: {};
};
export type InventoryMovementGetPayload<S extends boolean | null | undefined | InventoryMovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload, S>;
export type InventoryMovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryMovementCountAggregateInputType | true;
};
export interface InventoryMovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InventoryMovement'];
        meta: {
            name: 'InventoryMovement';
        };
    };
    findUnique<T extends InventoryMovementFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryMovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryMovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryMovementFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryMovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryMovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryMovementFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryMovementCreateArgs>(args: Prisma.SelectSubset<T, InventoryMovementCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryMovementCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryMovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryMovementDeleteArgs>(args: Prisma.SelectSubset<T, InventoryMovementDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryMovementUpdateArgs>(args: Prisma.SelectSubset<T, InventoryMovementUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryMovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryMovementUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryMovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryMovementUpsertArgs>(args: Prisma.SelectSubset<T, InventoryMovementUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryMovementCountArgs>(args?: Prisma.Subset<T, InventoryMovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryMovementCountAggregateOutputType> : number>;
    aggregate<T extends InventoryMovementAggregateArgs>(args: Prisma.Subset<T, InventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetInventoryMovementAggregateType<T>>;
    groupBy<T extends InventoryMovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryMovementGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryMovementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryMovementFieldRefs;
}
export interface Prisma__InventoryMovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventoryItem<T extends Prisma.InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InventoryItemDefaultArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryMovementFieldRefs {
    readonly id: Prisma.FieldRef<"InventoryMovement", 'String'>;
    readonly inventoryItemId: Prisma.FieldRef<"InventoryMovement", 'String'>;
    readonly quantity: Prisma.FieldRef<"InventoryMovement", 'Int'>;
    readonly reason: Prisma.FieldRef<"InventoryMovement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InventoryMovement", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"InventoryMovement", 'String'>;
    readonly type: Prisma.FieldRef<"InventoryMovement", 'String'>;
}
export type InventoryMovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where: Prisma.InventoryMovementWhereUniqueInput;
};
export type InventoryMovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where: Prisma.InventoryMovementWhereUniqueInput;
};
export type InventoryMovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryMovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryMovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryMovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryMovementCreateInput, Prisma.InventoryMovementUncheckedCreateInput>;
};
export type InventoryMovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryMovementCreateManyInput | Prisma.InventoryMovementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryMovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    data: Prisma.InventoryMovementCreateManyInput | Prisma.InventoryMovementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryMovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryMovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateInput, Prisma.InventoryMovementUncheckedUpdateInput>;
    where: Prisma.InventoryMovementWhereUniqueInput;
};
export type InventoryMovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryMovementUpdateManyMutationInput, Prisma.InventoryMovementUncheckedUpdateManyInput>;
    where?: Prisma.InventoryMovementWhereInput;
    limit?: number;
};
export type InventoryMovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryMovementUpdateManyMutationInput, Prisma.InventoryMovementUncheckedUpdateManyInput>;
    where?: Prisma.InventoryMovementWhereInput;
    limit?: number;
    include?: Prisma.InventoryMovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryMovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where: Prisma.InventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryMovementCreateInput, Prisma.InventoryMovementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryMovementUpdateInput, Prisma.InventoryMovementUncheckedUpdateInput>;
};
export type InventoryMovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
    where: Prisma.InventoryMovementWhereUniqueInput;
};
export type InventoryMovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryMovementWhereInput;
    limit?: number;
};
export type InventoryMovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryMovementSelect<ExtArgs> | null;
    omit?: Prisma.InventoryMovementOmit<ExtArgs> | null;
    include?: Prisma.InventoryMovementInclude<ExtArgs> | null;
};
export {};
