import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashDrawerLogModel = runtime.Types.Result.DefaultSelection<Prisma.$CashDrawerLogPayload>;
export type AggregateCashDrawerLog = {
    _count: CashDrawerLogCountAggregateOutputType | null;
    _min: CashDrawerLogMinAggregateOutputType | null;
    _max: CashDrawerLogMaxAggregateOutputType | null;
};
export type CashDrawerLogMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    createdAt: Date | null;
    action: string | null;
    cashRegisterId: string | null;
    userId: string | null;
};
export type CashDrawerLogMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    createdAt: Date | null;
    action: string | null;
    cashRegisterId: string | null;
    userId: string | null;
};
export type CashDrawerLogCountAggregateOutputType = {
    id: number;
    description: number;
    createdAt: number;
    action: number;
    cashRegisterId: number;
    userId: number;
    _all: number;
};
export type CashDrawerLogMinAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
    action?: true;
    cashRegisterId?: true;
    userId?: true;
};
export type CashDrawerLogMaxAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
    action?: true;
    cashRegisterId?: true;
    userId?: true;
};
export type CashDrawerLogCountAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
    action?: true;
    cashRegisterId?: true;
    userId?: true;
    _all?: true;
};
export type CashDrawerLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashDrawerLogWhereInput;
    orderBy?: Prisma.CashDrawerLogOrderByWithRelationInput | Prisma.CashDrawerLogOrderByWithRelationInput[];
    cursor?: Prisma.CashDrawerLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashDrawerLogCountAggregateInputType;
    _min?: CashDrawerLogMinAggregateInputType;
    _max?: CashDrawerLogMaxAggregateInputType;
};
export type GetCashDrawerLogAggregateType<T extends CashDrawerLogAggregateArgs> = {
    [P in keyof T & keyof AggregateCashDrawerLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashDrawerLog[P]> : Prisma.GetScalarType<T[P], AggregateCashDrawerLog[P]>;
};
export type CashDrawerLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashDrawerLogWhereInput;
    orderBy?: Prisma.CashDrawerLogOrderByWithAggregationInput | Prisma.CashDrawerLogOrderByWithAggregationInput[];
    by: Prisma.CashDrawerLogScalarFieldEnum[] | Prisma.CashDrawerLogScalarFieldEnum;
    having?: Prisma.CashDrawerLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashDrawerLogCountAggregateInputType | true;
    _min?: CashDrawerLogMinAggregateInputType;
    _max?: CashDrawerLogMaxAggregateInputType;
};
export type CashDrawerLogGroupByOutputType = {
    id: string;
    description: string | null;
    createdAt: Date;
    action: string;
    cashRegisterId: string;
    userId: string;
    _count: CashDrawerLogCountAggregateOutputType | null;
    _min: CashDrawerLogMinAggregateOutputType | null;
    _max: CashDrawerLogMaxAggregateOutputType | null;
};
type GetCashDrawerLogGroupByPayload<T extends CashDrawerLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashDrawerLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashDrawerLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashDrawerLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashDrawerLogGroupByOutputType[P]>;
}>>;
export type CashDrawerLogWhereInput = {
    AND?: Prisma.CashDrawerLogWhereInput | Prisma.CashDrawerLogWhereInput[];
    OR?: Prisma.CashDrawerLogWhereInput[];
    NOT?: Prisma.CashDrawerLogWhereInput | Prisma.CashDrawerLogWhereInput[];
    id?: Prisma.StringFilter<"CashDrawerLog"> | string;
    description?: Prisma.StringNullableFilter<"CashDrawerLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashDrawerLog"> | Date | string;
    action?: Prisma.StringFilter<"CashDrawerLog"> | string;
    cashRegisterId?: Prisma.StringFilter<"CashDrawerLog"> | string;
    userId?: Prisma.StringFilter<"CashDrawerLog"> | string;
    cashRegister?: Prisma.XOR<Prisma.CashRegisterScalarRelationFilter, Prisma.CashRegisterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CashDrawerLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    cashRegister?: Prisma.CashRegisterOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CashDrawerLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CashDrawerLogWhereInput | Prisma.CashDrawerLogWhereInput[];
    OR?: Prisma.CashDrawerLogWhereInput[];
    NOT?: Prisma.CashDrawerLogWhereInput | Prisma.CashDrawerLogWhereInput[];
    description?: Prisma.StringNullableFilter<"CashDrawerLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashDrawerLog"> | Date | string;
    action?: Prisma.StringFilter<"CashDrawerLog"> | string;
    cashRegisterId?: Prisma.StringFilter<"CashDrawerLog"> | string;
    userId?: Prisma.StringFilter<"CashDrawerLog"> | string;
    cashRegister?: Prisma.XOR<Prisma.CashRegisterScalarRelationFilter, Prisma.CashRegisterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CashDrawerLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CashDrawerLogCountOrderByAggregateInput;
    _max?: Prisma.CashDrawerLogMaxOrderByAggregateInput;
    _min?: Prisma.CashDrawerLogMinOrderByAggregateInput;
};
export type CashDrawerLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashDrawerLogScalarWhereWithAggregatesInput | Prisma.CashDrawerLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashDrawerLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashDrawerLogScalarWhereWithAggregatesInput | Prisma.CashDrawerLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CashDrawerLog"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CashDrawerLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CashDrawerLog"> | Date | string;
    action?: Prisma.StringWithAggregatesFilter<"CashDrawerLog"> | string;
    cashRegisterId?: Prisma.StringWithAggregatesFilter<"CashDrawerLog"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CashDrawerLog"> | string;
};
export type CashDrawerLogCreateInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutLogsInput;
    user: Prisma.UserCreateNestedOneWithoutDrawerLogsInput;
};
export type CashDrawerLogUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegisterId: string;
    userId: string;
};
export type CashDrawerLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutLogsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutDrawerLogsNestedInput;
};
export type CashDrawerLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogCreateManyInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegisterId: string;
    userId: string;
};
export type CashDrawerLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogListRelationFilter = {
    every?: Prisma.CashDrawerLogWhereInput;
    some?: Prisma.CashDrawerLogWhereInput;
    none?: Prisma.CashDrawerLogWhereInput;
};
export type CashDrawerLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashDrawerLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CashDrawerLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CashDrawerLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    cashRegisterId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CashDrawerLogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput> | Prisma.CashDrawerLogCreateWithoutUserInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutUserInput | Prisma.CashDrawerLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashDrawerLogCreateManyUserInputEnvelope;
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
};
export type CashDrawerLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput> | Prisma.CashDrawerLogCreateWithoutUserInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutUserInput | Prisma.CashDrawerLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CashDrawerLogCreateManyUserInputEnvelope;
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
};
export type CashDrawerLogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput> | Prisma.CashDrawerLogCreateWithoutUserInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutUserInput | Prisma.CashDrawerLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutUserInput | Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashDrawerLogCreateManyUserInputEnvelope;
    set?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    disconnect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    delete?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    update?: Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutUserInput | Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashDrawerLogUpdateManyWithWhereWithoutUserInput | Prisma.CashDrawerLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
};
export type CashDrawerLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput> | Prisma.CashDrawerLogCreateWithoutUserInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutUserInput | Prisma.CashDrawerLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutUserInput | Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CashDrawerLogCreateManyUserInputEnvelope;
    set?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    disconnect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    delete?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    update?: Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutUserInput | Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CashDrawerLogUpdateManyWithWhereWithoutUserInput | Prisma.CashDrawerLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
};
export type CashDrawerLogCreateNestedManyWithoutCashRegisterInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput> | Prisma.CashDrawerLogCreateWithoutCashRegisterInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput | Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput[];
    createMany?: Prisma.CashDrawerLogCreateManyCashRegisterInputEnvelope;
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
};
export type CashDrawerLogUncheckedCreateNestedManyWithoutCashRegisterInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput> | Prisma.CashDrawerLogCreateWithoutCashRegisterInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput | Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput[];
    createMany?: Prisma.CashDrawerLogCreateManyCashRegisterInputEnvelope;
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
};
export type CashDrawerLogUpdateManyWithoutCashRegisterNestedInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput> | Prisma.CashDrawerLogCreateWithoutCashRegisterInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput | Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput[];
    upsert?: Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutCashRegisterInput | Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutCashRegisterInput[];
    createMany?: Prisma.CashDrawerLogCreateManyCashRegisterInputEnvelope;
    set?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    disconnect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    delete?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    update?: Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutCashRegisterInput | Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutCashRegisterInput[];
    updateMany?: Prisma.CashDrawerLogUpdateManyWithWhereWithoutCashRegisterInput | Prisma.CashDrawerLogUpdateManyWithWhereWithoutCashRegisterInput[];
    deleteMany?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
};
export type CashDrawerLogUncheckedUpdateManyWithoutCashRegisterNestedInput = {
    create?: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput> | Prisma.CashDrawerLogCreateWithoutCashRegisterInput[] | Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput[];
    connectOrCreate?: Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput | Prisma.CashDrawerLogCreateOrConnectWithoutCashRegisterInput[];
    upsert?: Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutCashRegisterInput | Prisma.CashDrawerLogUpsertWithWhereUniqueWithoutCashRegisterInput[];
    createMany?: Prisma.CashDrawerLogCreateManyCashRegisterInputEnvelope;
    set?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    disconnect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    delete?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    connect?: Prisma.CashDrawerLogWhereUniqueInput | Prisma.CashDrawerLogWhereUniqueInput[];
    update?: Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutCashRegisterInput | Prisma.CashDrawerLogUpdateWithWhereUniqueWithoutCashRegisterInput[];
    updateMany?: Prisma.CashDrawerLogUpdateManyWithWhereWithoutCashRegisterInput | Prisma.CashDrawerLogUpdateManyWithWhereWithoutCashRegisterInput[];
    deleteMany?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
};
export type CashDrawerLogCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegister: Prisma.CashRegisterCreateNestedOneWithoutLogsInput;
};
export type CashDrawerLogUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegisterId: string;
};
export type CashDrawerLogCreateOrConnectWithoutUserInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput>;
};
export type CashDrawerLogCreateManyUserInputEnvelope = {
    data: Prisma.CashDrawerLogCreateManyUserInput | Prisma.CashDrawerLogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CashDrawerLogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashDrawerLogUpdateWithoutUserInput, Prisma.CashDrawerLogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutUserInput, Prisma.CashDrawerLogUncheckedCreateWithoutUserInput>;
};
export type CashDrawerLogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateWithoutUserInput, Prisma.CashDrawerLogUncheckedUpdateWithoutUserInput>;
};
export type CashDrawerLogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CashDrawerLogScalarWhereInput;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateManyMutationInput, Prisma.CashDrawerLogUncheckedUpdateManyWithoutUserInput>;
};
export type CashDrawerLogScalarWhereInput = {
    AND?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
    OR?: Prisma.CashDrawerLogScalarWhereInput[];
    NOT?: Prisma.CashDrawerLogScalarWhereInput | Prisma.CashDrawerLogScalarWhereInput[];
    id?: Prisma.StringFilter<"CashDrawerLog"> | string;
    description?: Prisma.StringNullableFilter<"CashDrawerLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CashDrawerLog"> | Date | string;
    action?: Prisma.StringFilter<"CashDrawerLog"> | string;
    cashRegisterId?: Prisma.StringFilter<"CashDrawerLog"> | string;
    userId?: Prisma.StringFilter<"CashDrawerLog"> | string;
};
export type CashDrawerLogCreateWithoutCashRegisterInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    user: Prisma.UserCreateNestedOneWithoutDrawerLogsInput;
};
export type CashDrawerLogUncheckedCreateWithoutCashRegisterInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    userId: string;
};
export type CashDrawerLogCreateOrConnectWithoutCashRegisterInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput>;
};
export type CashDrawerLogCreateManyCashRegisterInputEnvelope = {
    data: Prisma.CashDrawerLogCreateManyCashRegisterInput | Prisma.CashDrawerLogCreateManyCashRegisterInput[];
    skipDuplicates?: boolean;
};
export type CashDrawerLogUpsertWithWhereUniqueWithoutCashRegisterInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashDrawerLogUpdateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedUpdateWithoutCashRegisterInput>;
    create: Prisma.XOR<Prisma.CashDrawerLogCreateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedCreateWithoutCashRegisterInput>;
};
export type CashDrawerLogUpdateWithWhereUniqueWithoutCashRegisterInput = {
    where: Prisma.CashDrawerLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateWithoutCashRegisterInput, Prisma.CashDrawerLogUncheckedUpdateWithoutCashRegisterInput>;
};
export type CashDrawerLogUpdateManyWithWhereWithoutCashRegisterInput = {
    where: Prisma.CashDrawerLogScalarWhereInput;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateManyMutationInput, Prisma.CashDrawerLogUncheckedUpdateManyWithoutCashRegisterInput>;
};
export type CashDrawerLogCreateManyUserInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    cashRegisterId: string;
};
export type CashDrawerLogUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegister?: Prisma.CashRegisterUpdateOneRequiredWithoutLogsNestedInput;
};
export type CashDrawerLogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    cashRegisterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogCreateManyCashRegisterInput = {
    id?: string;
    description?: string | null;
    createdAt?: Date | string;
    action: string;
    userId: string;
};
export type CashDrawerLogUpdateWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDrawerLogsNestedInput;
};
export type CashDrawerLogUncheckedUpdateWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogUncheckedUpdateManyWithoutCashRegisterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CashDrawerLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
    action?: boolean;
    cashRegisterId?: boolean;
    userId?: boolean;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashDrawerLog"]>;
export type CashDrawerLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
    action?: boolean;
    cashRegisterId?: boolean;
    userId?: boolean;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashDrawerLog"]>;
export type CashDrawerLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
    action?: boolean;
    cashRegisterId?: boolean;
    userId?: boolean;
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashDrawerLog"]>;
export type CashDrawerLogSelectScalar = {
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
    action?: boolean;
    cashRegisterId?: boolean;
    userId?: boolean;
};
export type CashDrawerLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "description" | "createdAt" | "action" | "cashRegisterId" | "userId", ExtArgs["result"]["cashDrawerLog"]>;
export type CashDrawerLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CashDrawerLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CashDrawerLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cashRegister?: boolean | Prisma.CashRegisterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CashDrawerLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashDrawerLog";
    objects: {
        cashRegister: Prisma.$CashRegisterPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        description: string | null;
        createdAt: Date;
        action: string;
        cashRegisterId: string;
        userId: string;
    }, ExtArgs["result"]["cashDrawerLog"]>;
    composites: {};
};
export type CashDrawerLogGetPayload<S extends boolean | null | undefined | CashDrawerLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload, S>;
export type CashDrawerLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashDrawerLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashDrawerLogCountAggregateInputType | true;
};
export interface CashDrawerLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashDrawerLog'];
        meta: {
            name: 'CashDrawerLog';
        };
    };
    findUnique<T extends CashDrawerLogFindUniqueArgs>(args: Prisma.SelectSubset<T, CashDrawerLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashDrawerLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashDrawerLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashDrawerLogFindFirstArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashDrawerLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashDrawerLogFindManyArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashDrawerLogCreateArgs>(args: Prisma.SelectSubset<T, CashDrawerLogCreateArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashDrawerLogCreateManyArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashDrawerLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashDrawerLogDeleteArgs>(args: Prisma.SelectSubset<T, CashDrawerLogDeleteArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashDrawerLogUpdateArgs>(args: Prisma.SelectSubset<T, CashDrawerLogUpdateArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashDrawerLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashDrawerLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashDrawerLogUpdateManyArgs>(args: Prisma.SelectSubset<T, CashDrawerLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashDrawerLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashDrawerLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashDrawerLogUpsertArgs>(args: Prisma.SelectSubset<T, CashDrawerLogUpsertArgs<ExtArgs>>): Prisma.Prisma__CashDrawerLogClient<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashDrawerLogCountArgs>(args?: Prisma.Subset<T, CashDrawerLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashDrawerLogCountAggregateOutputType> : number>;
    aggregate<T extends CashDrawerLogAggregateArgs>(args: Prisma.Subset<T, CashDrawerLogAggregateArgs>): Prisma.PrismaPromise<GetCashDrawerLogAggregateType<T>>;
    groupBy<T extends CashDrawerLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashDrawerLogGroupByArgs['orderBy'];
    } : {
        orderBy?: CashDrawerLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashDrawerLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashDrawerLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashDrawerLogFieldRefs;
}
export interface Prisma__CashDrawerLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cashRegister<T extends Prisma.CashRegisterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashRegisterDefaultArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashDrawerLogFieldRefs {
    readonly id: Prisma.FieldRef<"CashDrawerLog", 'String'>;
    readonly description: Prisma.FieldRef<"CashDrawerLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CashDrawerLog", 'DateTime'>;
    readonly action: Prisma.FieldRef<"CashDrawerLog", 'String'>;
    readonly cashRegisterId: Prisma.FieldRef<"CashDrawerLog", 'String'>;
    readonly userId: Prisma.FieldRef<"CashDrawerLog", 'String'>;
}
export type CashDrawerLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    where: Prisma.CashDrawerLogWhereUniqueInput;
};
export type CashDrawerLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    where: Prisma.CashDrawerLogWhereUniqueInput;
};
export type CashDrawerLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashDrawerLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashDrawerLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashDrawerLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashDrawerLogCreateInput, Prisma.CashDrawerLogUncheckedCreateInput>;
};
export type CashDrawerLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashDrawerLogCreateManyInput | Prisma.CashDrawerLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashDrawerLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    data: Prisma.CashDrawerLogCreateManyInput | Prisma.CashDrawerLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashDrawerLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashDrawerLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateInput, Prisma.CashDrawerLogUncheckedUpdateInput>;
    where: Prisma.CashDrawerLogWhereUniqueInput;
};
export type CashDrawerLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateManyMutationInput, Prisma.CashDrawerLogUncheckedUpdateManyInput>;
    where?: Prisma.CashDrawerLogWhereInput;
    limit?: number;
};
export type CashDrawerLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashDrawerLogUpdateManyMutationInput, Prisma.CashDrawerLogUncheckedUpdateManyInput>;
    where?: Prisma.CashDrawerLogWhereInput;
    limit?: number;
    include?: Prisma.CashDrawerLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashDrawerLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    where: Prisma.CashDrawerLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashDrawerLogCreateInput, Prisma.CashDrawerLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashDrawerLogUpdateInput, Prisma.CashDrawerLogUncheckedUpdateInput>;
};
export type CashDrawerLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
    where: Prisma.CashDrawerLogWhereUniqueInput;
};
export type CashDrawerLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashDrawerLogWhereInput;
    limit?: number;
};
export type CashDrawerLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashDrawerLogSelect<ExtArgs> | null;
    omit?: Prisma.CashDrawerLogOmit<ExtArgs> | null;
    include?: Prisma.CashDrawerLogInclude<ExtArgs> | null;
};
export {};
