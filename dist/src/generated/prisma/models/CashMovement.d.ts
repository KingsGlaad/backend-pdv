import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashMovementModel = runtime.Types.Result.DefaultSelection<Prisma.$CashMovementPayload>;
export type AggregateCashMovement = {
    _count: CashMovementCountAggregateOutputType | null;
    _avg: CashMovementAvgAggregateOutputType | null;
    _sum: CashMovementSumAggregateOutputType | null;
    _min: CashMovementMinAggregateOutputType | null;
    _max: CashMovementMaxAggregateOutputType | null;
};
export type CashMovementAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type CashMovementSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type CashMovementMinAggregateOutputType = {
    id: string | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
    reason: string | null;
    sessionId: string | null;
    type: $Enums.CashMovementType | null;
};
export type CashMovementMaxAggregateOutputType = {
    id: string | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
    reason: string | null;
    sessionId: string | null;
    type: $Enums.CashMovementType | null;
};
export type CashMovementCountAggregateOutputType = {
    id: number;
    amount: number;
    createdAt: number;
    reason: number;
    sessionId: number;
    type: number;
    _all: number;
};
export type CashMovementAvgAggregateInputType = {
    amount?: true;
};
export type CashMovementSumAggregateInputType = {
    amount?: true;
};
export type CashMovementMinAggregateInputType = {
    id?: true;
    amount?: true;
    createdAt?: true;
    reason?: true;
    sessionId?: true;
    type?: true;
};
export type CashMovementMaxAggregateInputType = {
    id?: true;
    amount?: true;
    createdAt?: true;
    reason?: true;
    sessionId?: true;
    type?: true;
};
export type CashMovementCountAggregateInputType = {
    id?: true;
    amount?: true;
    createdAt?: true;
    reason?: true;
    sessionId?: true;
    type?: true;
    _all?: true;
};
export type CashMovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashMovementWhereInput;
    orderBy?: Prisma.CashMovementOrderByWithRelationInput | Prisma.CashMovementOrderByWithRelationInput[];
    cursor?: Prisma.CashMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashMovementCountAggregateInputType;
    _avg?: CashMovementAvgAggregateInputType;
    _sum?: CashMovementSumAggregateInputType;
    _min?: CashMovementMinAggregateInputType;
    _max?: CashMovementMaxAggregateInputType;
};
export type GetCashMovementAggregateType<T extends CashMovementAggregateArgs> = {
    [P in keyof T & keyof AggregateCashMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashMovement[P]> : Prisma.GetScalarType<T[P], AggregateCashMovement[P]>;
};
export type CashMovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashMovementWhereInput;
    orderBy?: Prisma.CashMovementOrderByWithAggregationInput | Prisma.CashMovementOrderByWithAggregationInput[];
    by: Prisma.CashMovementScalarFieldEnum[] | Prisma.CashMovementScalarFieldEnum;
    having?: Prisma.CashMovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashMovementCountAggregateInputType | true;
    _avg?: CashMovementAvgAggregateInputType;
    _sum?: CashMovementSumAggregateInputType;
    _min?: CashMovementMinAggregateInputType;
    _max?: CashMovementMaxAggregateInputType;
};
export type CashMovementGroupByOutputType = {
    id: string;
    amount: runtime.Decimal;
    createdAt: Date;
    reason: string | null;
    sessionId: string;
    type: $Enums.CashMovementType;
    _count: CashMovementCountAggregateOutputType | null;
    _avg: CashMovementAvgAggregateOutputType | null;
    _sum: CashMovementSumAggregateOutputType | null;
    _min: CashMovementMinAggregateOutputType | null;
    _max: CashMovementMaxAggregateOutputType | null;
};
type GetCashMovementGroupByPayload<T extends CashMovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashMovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashMovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashMovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashMovementGroupByOutputType[P]>;
}>>;
export type CashMovementWhereInput = {
    AND?: Prisma.CashMovementWhereInput | Prisma.CashMovementWhereInput[];
    OR?: Prisma.CashMovementWhereInput[];
    NOT?: Prisma.CashMovementWhereInput | Prisma.CashMovementWhereInput[];
    id?: Prisma.StringFilter<"CashMovement"> | string;
    amount?: Prisma.DecimalFilter<"CashMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CashMovement"> | Date | string;
    reason?: Prisma.StringNullableFilter<"CashMovement"> | string | null;
    sessionId?: Prisma.StringFilter<"CashMovement"> | string;
    type?: Prisma.EnumCashMovementTypeFilter<"CashMovement"> | $Enums.CashMovementType;
    session?: Prisma.XOR<Prisma.CashSessionScalarRelationFilter, Prisma.CashSessionWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
};
export type CashMovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    session?: Prisma.CashSessionOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type CashMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CashMovementWhereInput | Prisma.CashMovementWhereInput[];
    OR?: Prisma.CashMovementWhereInput[];
    NOT?: Prisma.CashMovementWhereInput | Prisma.CashMovementWhereInput[];
    amount?: Prisma.DecimalFilter<"CashMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CashMovement"> | Date | string;
    reason?: Prisma.StringNullableFilter<"CashMovement"> | string | null;
    sessionId?: Prisma.StringFilter<"CashMovement"> | string;
    type?: Prisma.EnumCashMovementTypeFilter<"CashMovement"> | $Enums.CashMovementType;
    session?: Prisma.XOR<Prisma.CashSessionScalarRelationFilter, Prisma.CashSessionWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
}, "id">;
export type CashMovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.CashMovementCountOrderByAggregateInput;
    _avg?: Prisma.CashMovementAvgOrderByAggregateInput;
    _max?: Prisma.CashMovementMaxOrderByAggregateInput;
    _min?: Prisma.CashMovementMinOrderByAggregateInput;
    _sum?: Prisma.CashMovementSumOrderByAggregateInput;
};
export type CashMovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashMovementScalarWhereWithAggregatesInput | Prisma.CashMovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashMovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashMovementScalarWhereWithAggregatesInput | Prisma.CashMovementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CashMovement"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"CashMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CashMovement"> | Date | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"CashMovement"> | string | null;
    sessionId?: Prisma.StringWithAggregatesFilter<"CashMovement"> | string;
    type?: Prisma.EnumCashMovementTypeWithAggregatesFilter<"CashMovement"> | $Enums.CashMovementType;
};
export type CashMovementCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    type: $Enums.CashMovementType;
    session: Prisma.CashSessionCreateNestedOneWithoutMovementsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutCashMovementInput;
};
export type CashMovementUncheckedCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    sessionId: string;
    type: $Enums.CashMovementType;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutCashMovementInput;
};
export type CashMovementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
    session?: Prisma.CashSessionUpdateOneRequiredWithoutMovementsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutCashMovementNestedInput;
};
export type CashMovementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutCashMovementNestedInput;
};
export type CashMovementCreateManyInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    sessionId: string;
    type: $Enums.CashMovementType;
};
export type CashMovementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
};
export type CashMovementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
};
export type CashMovementNullableScalarRelationFilter = {
    is?: Prisma.CashMovementWhereInput | null;
    isNot?: Prisma.CashMovementWhereInput | null;
};
export type CashMovementListRelationFilter = {
    every?: Prisma.CashMovementWhereInput;
    some?: Prisma.CashMovementWhereInput;
    none?: Prisma.CashMovementWhereInput;
};
export type CashMovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashMovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type CashMovementAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type CashMovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type CashMovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type CashMovementSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type CashMovementCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutPaymentsInput, Prisma.CashMovementUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.CashMovementWhereUniqueInput;
};
export type CashMovementUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutPaymentsInput, Prisma.CashMovementUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.CashMovementUpsertWithoutPaymentsInput;
    disconnect?: Prisma.CashMovementWhereInput | boolean;
    delete?: Prisma.CashMovementWhereInput | boolean;
    connect?: Prisma.CashMovementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashMovementUpdateToOneWithWhereWithoutPaymentsInput, Prisma.CashMovementUpdateWithoutPaymentsInput>, Prisma.CashMovementUncheckedUpdateWithoutPaymentsInput>;
};
export type CashMovementCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput> | Prisma.CashMovementCreateWithoutSessionInput[] | Prisma.CashMovementUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutSessionInput | Prisma.CashMovementCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.CashMovementCreateManySessionInputEnvelope;
    connect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
};
export type CashMovementUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput> | Prisma.CashMovementCreateWithoutSessionInput[] | Prisma.CashMovementUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutSessionInput | Prisma.CashMovementCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.CashMovementCreateManySessionInputEnvelope;
    connect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
};
export type CashMovementUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput> | Prisma.CashMovementCreateWithoutSessionInput[] | Prisma.CashMovementUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutSessionInput | Prisma.CashMovementCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.CashMovementUpsertWithWhereUniqueWithoutSessionInput | Prisma.CashMovementUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.CashMovementCreateManySessionInputEnvelope;
    set?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    disconnect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    delete?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    connect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    update?: Prisma.CashMovementUpdateWithWhereUniqueWithoutSessionInput | Prisma.CashMovementUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.CashMovementUpdateManyWithWhereWithoutSessionInput | Prisma.CashMovementUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.CashMovementScalarWhereInput | Prisma.CashMovementScalarWhereInput[];
};
export type CashMovementUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput> | Prisma.CashMovementCreateWithoutSessionInput[] | Prisma.CashMovementUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.CashMovementCreateOrConnectWithoutSessionInput | Prisma.CashMovementCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.CashMovementUpsertWithWhereUniqueWithoutSessionInput | Prisma.CashMovementUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.CashMovementCreateManySessionInputEnvelope;
    set?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    disconnect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    delete?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    connect?: Prisma.CashMovementWhereUniqueInput | Prisma.CashMovementWhereUniqueInput[];
    update?: Prisma.CashMovementUpdateWithWhereUniqueWithoutSessionInput | Prisma.CashMovementUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.CashMovementUpdateManyWithWhereWithoutSessionInput | Prisma.CashMovementUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.CashMovementScalarWhereInput | Prisma.CashMovementScalarWhereInput[];
};
export type EnumCashMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.CashMovementType;
};
export type CashMovementCreateWithoutPaymentsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    type: $Enums.CashMovementType;
    session: Prisma.CashSessionCreateNestedOneWithoutMovementsInput;
};
export type CashMovementUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    sessionId: string;
    type: $Enums.CashMovementType;
};
export type CashMovementCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.CashMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashMovementCreateWithoutPaymentsInput, Prisma.CashMovementUncheckedCreateWithoutPaymentsInput>;
};
export type CashMovementUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.CashMovementUpdateWithoutPaymentsInput, Prisma.CashMovementUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.CashMovementCreateWithoutPaymentsInput, Prisma.CashMovementUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.CashMovementWhereInput;
};
export type CashMovementUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.CashMovementWhereInput;
    data: Prisma.XOR<Prisma.CashMovementUpdateWithoutPaymentsInput, Prisma.CashMovementUncheckedUpdateWithoutPaymentsInput>;
};
export type CashMovementUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
    session?: Prisma.CashSessionUpdateOneRequiredWithoutMovementsNestedInput;
};
export type CashMovementUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
};
export type CashMovementCreateWithoutSessionInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    type: $Enums.CashMovementType;
    payments?: Prisma.PaymentCreateNestedManyWithoutCashMovementInput;
};
export type CashMovementUncheckedCreateWithoutSessionInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    type: $Enums.CashMovementType;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutCashMovementInput;
};
export type CashMovementCreateOrConnectWithoutSessionInput = {
    where: Prisma.CashMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput>;
};
export type CashMovementCreateManySessionInputEnvelope = {
    data: Prisma.CashMovementCreateManySessionInput | Prisma.CashMovementCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type CashMovementUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.CashMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashMovementUpdateWithoutSessionInput, Prisma.CashMovementUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.CashMovementCreateWithoutSessionInput, Prisma.CashMovementUncheckedCreateWithoutSessionInput>;
};
export type CashMovementUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.CashMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashMovementUpdateWithoutSessionInput, Prisma.CashMovementUncheckedUpdateWithoutSessionInput>;
};
export type CashMovementUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.CashMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.CashMovementUpdateManyMutationInput, Prisma.CashMovementUncheckedUpdateManyWithoutSessionInput>;
};
export type CashMovementScalarWhereInput = {
    AND?: Prisma.CashMovementScalarWhereInput | Prisma.CashMovementScalarWhereInput[];
    OR?: Prisma.CashMovementScalarWhereInput[];
    NOT?: Prisma.CashMovementScalarWhereInput | Prisma.CashMovementScalarWhereInput[];
    id?: Prisma.StringFilter<"CashMovement"> | string;
    amount?: Prisma.DecimalFilter<"CashMovement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CashMovement"> | Date | string;
    reason?: Prisma.StringNullableFilter<"CashMovement"> | string | null;
    sessionId?: Prisma.StringFilter<"CashMovement"> | string;
    type?: Prisma.EnumCashMovementTypeFilter<"CashMovement"> | $Enums.CashMovementType;
};
export type CashMovementCreateManySessionInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    reason?: string | null;
    type: $Enums.CashMovementType;
};
export type CashMovementUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
    payments?: Prisma.PaymentUpdateManyWithoutCashMovementNestedInput;
};
export type CashMovementUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutCashMovementNestedInput;
};
export type CashMovementUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCashMovementTypeFieldUpdateOperationsInput | $Enums.CashMovementType;
};
export type CashMovementCountOutputType = {
    payments: number;
};
export type CashMovementCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | CashMovementCountOutputTypeCountPaymentsArgs;
};
export type CashMovementCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementCountOutputTypeSelect<ExtArgs> | null;
};
export type CashMovementCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type CashMovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    sessionId?: boolean;
    type?: boolean;
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.CashMovement$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CashMovementCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashMovement"]>;
export type CashMovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    sessionId?: boolean;
    type?: boolean;
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashMovement"]>;
export type CashMovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    sessionId?: boolean;
    type?: boolean;
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashMovement"]>;
export type CashMovementSelectScalar = {
    id?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    sessionId?: boolean;
    type?: boolean;
};
export type CashMovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "createdAt" | "reason" | "sessionId" | "type", ExtArgs["result"]["cashMovement"]>;
export type CashMovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.CashMovement$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CashMovementCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CashMovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
};
export type CashMovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.CashSessionDefaultArgs<ExtArgs>;
};
export type $CashMovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashMovement";
    objects: {
        session: Prisma.$CashSessionPayload<ExtArgs>;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        amount: runtime.Decimal;
        createdAt: Date;
        reason: string | null;
        sessionId: string;
        type: $Enums.CashMovementType;
    }, ExtArgs["result"]["cashMovement"]>;
    composites: {};
};
export type CashMovementGetPayload<S extends boolean | null | undefined | CashMovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashMovementPayload, S>;
export type CashMovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashMovementCountAggregateInputType | true;
};
export interface CashMovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashMovement'];
        meta: {
            name: 'CashMovement';
        };
    };
    findUnique<T extends CashMovementFindUniqueArgs>(args: Prisma.SelectSubset<T, CashMovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashMovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashMovementFindFirstArgs>(args?: Prisma.SelectSubset<T, CashMovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashMovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashMovementFindManyArgs>(args?: Prisma.SelectSubset<T, CashMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashMovementCreateArgs>(args: Prisma.SelectSubset<T, CashMovementCreateArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashMovementCreateManyArgs>(args?: Prisma.SelectSubset<T, CashMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashMovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashMovementDeleteArgs>(args: Prisma.SelectSubset<T, CashMovementDeleteArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashMovementUpdateArgs>(args: Prisma.SelectSubset<T, CashMovementUpdateArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashMovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashMovementUpdateManyArgs>(args: Prisma.SelectSubset<T, CashMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashMovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashMovementUpsertArgs>(args: Prisma.SelectSubset<T, CashMovementUpsertArgs<ExtArgs>>): Prisma.Prisma__CashMovementClient<runtime.Types.Result.GetResult<Prisma.$CashMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashMovementCountArgs>(args?: Prisma.Subset<T, CashMovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashMovementCountAggregateOutputType> : number>;
    aggregate<T extends CashMovementAggregateArgs>(args: Prisma.Subset<T, CashMovementAggregateArgs>): Prisma.PrismaPromise<GetCashMovementAggregateType<T>>;
    groupBy<T extends CashMovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashMovementGroupByArgs['orderBy'];
    } : {
        orderBy?: CashMovementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashMovementFieldRefs;
}
export interface Prisma__CashMovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.CashSessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashSessionDefaultArgs<ExtArgs>>): Prisma.Prisma__CashSessionClient<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.CashMovement$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashMovement$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashMovementFieldRefs {
    readonly id: Prisma.FieldRef<"CashMovement", 'String'>;
    readonly amount: Prisma.FieldRef<"CashMovement", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"CashMovement", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"CashMovement", 'String'>;
    readonly sessionId: Prisma.FieldRef<"CashMovement", 'String'>;
    readonly type: Prisma.FieldRef<"CashMovement", 'CashMovementType'>;
}
export type CashMovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    where: Prisma.CashMovementWhereUniqueInput;
};
export type CashMovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    where: Prisma.CashMovementWhereUniqueInput;
};
export type CashMovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashMovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashMovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashMovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashMovementCreateInput, Prisma.CashMovementUncheckedCreateInput>;
};
export type CashMovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashMovementCreateManyInput | Prisma.CashMovementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashMovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    data: Prisma.CashMovementCreateManyInput | Prisma.CashMovementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashMovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashMovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashMovementUpdateInput, Prisma.CashMovementUncheckedUpdateInput>;
    where: Prisma.CashMovementWhereUniqueInput;
};
export type CashMovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashMovementUpdateManyMutationInput, Prisma.CashMovementUncheckedUpdateManyInput>;
    where?: Prisma.CashMovementWhereInput;
    limit?: number;
};
export type CashMovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashMovementUpdateManyMutationInput, Prisma.CashMovementUncheckedUpdateManyInput>;
    where?: Prisma.CashMovementWhereInput;
    limit?: number;
    include?: Prisma.CashMovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashMovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    where: Prisma.CashMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashMovementCreateInput, Prisma.CashMovementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashMovementUpdateInput, Prisma.CashMovementUncheckedUpdateInput>;
};
export type CashMovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
    where: Prisma.CashMovementWhereUniqueInput;
};
export type CashMovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashMovementWhereInput;
    limit?: number;
};
export type CashMovement$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashMovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashMovementSelect<ExtArgs> | null;
    omit?: Prisma.CashMovementOmit<ExtArgs> | null;
    include?: Prisma.CashMovementInclude<ExtArgs> | null;
};
export {};
