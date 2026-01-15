import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CashRegisterModel = runtime.Types.Result.DefaultSelection<Prisma.$CashRegisterPayload>;
export type AggregateCashRegister = {
    _count: CashRegisterCountAggregateOutputType | null;
    _min: CashRegisterMinAggregateOutputType | null;
    _max: CashRegisterMaxAggregateOutputType | null;
};
export type CashRegisterMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    isActive: boolean | null;
};
export type CashRegisterMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    isActive: boolean | null;
};
export type CashRegisterCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    isActive: number;
    _all: number;
};
export type CashRegisterMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    isActive?: true;
};
export type CashRegisterMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    isActive?: true;
};
export type CashRegisterCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    isActive?: true;
    _all?: true;
};
export type CashRegisterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashRegisterCountAggregateInputType;
    _min?: CashRegisterMinAggregateInputType;
    _max?: CashRegisterMaxAggregateInputType;
};
export type GetCashRegisterAggregateType<T extends CashRegisterAggregateArgs> = {
    [P in keyof T & keyof AggregateCashRegister]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashRegister[P]> : Prisma.GetScalarType<T[P], AggregateCashRegister[P]>;
};
export type CashRegisterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithAggregationInput | Prisma.CashRegisterOrderByWithAggregationInput[];
    by: Prisma.CashRegisterScalarFieldEnum[] | Prisma.CashRegisterScalarFieldEnum;
    having?: Prisma.CashRegisterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashRegisterCountAggregateInputType | true;
    _min?: CashRegisterMinAggregateInputType;
    _max?: CashRegisterMaxAggregateInputType;
};
export type CashRegisterGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    isActive: boolean;
    _count: CashRegisterCountAggregateOutputType | null;
    _min: CashRegisterMinAggregateOutputType | null;
    _max: CashRegisterMaxAggregateOutputType | null;
};
type GetCashRegisterGroupByPayload<T extends CashRegisterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashRegisterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashRegisterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashRegisterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashRegisterGroupByOutputType[P]>;
}>>;
export type CashRegisterWhereInput = {
    AND?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    OR?: Prisma.CashRegisterWhereInput[];
    NOT?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    id?: Prisma.StringFilter<"CashRegister"> | string;
    name?: Prisma.StringFilter<"CashRegister"> | string;
    createdAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    isActive?: Prisma.BoolFilter<"CashRegister"> | boolean;
    logs?: Prisma.CashDrawerLogListRelationFilter;
    sessions?: Prisma.CashSessionListRelationFilter;
};
export type CashRegisterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    logs?: Prisma.CashDrawerLogOrderByRelationAggregateInput;
    sessions?: Prisma.CashSessionOrderByRelationAggregateInput;
};
export type CashRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    OR?: Prisma.CashRegisterWhereInput[];
    NOT?: Prisma.CashRegisterWhereInput | Prisma.CashRegisterWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"CashRegister"> | Date | string;
    isActive?: Prisma.BoolFilter<"CashRegister"> | boolean;
    logs?: Prisma.CashDrawerLogListRelationFilter;
    sessions?: Prisma.CashSessionListRelationFilter;
}, "id" | "name">;
export type CashRegisterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.CashRegisterCountOrderByAggregateInput;
    _max?: Prisma.CashRegisterMaxOrderByAggregateInput;
    _min?: Prisma.CashRegisterMinOrderByAggregateInput;
};
export type CashRegisterScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashRegisterScalarWhereWithAggregatesInput | Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashRegisterScalarWhereWithAggregatesInput | Prisma.CashRegisterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CashRegister"> | string;
    name?: Prisma.StringWithAggregatesFilter<"CashRegister"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CashRegister"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"CashRegister"> | boolean;
};
export type CashRegisterCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    logs?: Prisma.CashDrawerLogCreateNestedManyWithoutCashRegisterInput;
    sessions?: Prisma.CashSessionCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    logs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutCashRegisterInput;
    sessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logs?: Prisma.CashDrawerLogUpdateManyWithoutCashRegisterNestedInput;
    sessions?: Prisma.CashSessionUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutCashRegisterNestedInput;
    sessions?: Prisma.CashSessionUncheckedUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
};
export type CashRegisterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CashRegisterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CashRegisterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type CashRegisterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type CashRegisterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type CashRegisterScalarRelationFilter = {
    is?: Prisma.CashRegisterWhereInput;
    isNot?: Prisma.CashRegisterWhereInput;
};
export type CashRegisterCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutSessionsInput, Prisma.CashRegisterUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutSessionsInput, Prisma.CashRegisterUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.CashRegisterUpsertWithoutSessionsInput;
    connect?: Prisma.CashRegisterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashRegisterUpdateToOneWithWhereWithoutSessionsInput, Prisma.CashRegisterUpdateWithoutSessionsInput>, Prisma.CashRegisterUncheckedUpdateWithoutSessionsInput>;
};
export type CashRegisterCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutLogsInput, Prisma.CashRegisterUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutLogsInput;
    connect?: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.CashRegisterCreateWithoutLogsInput, Prisma.CashRegisterUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.CashRegisterCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.CashRegisterUpsertWithoutLogsInput;
    connect?: Prisma.CashRegisterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashRegisterUpdateToOneWithWhereWithoutLogsInput, Prisma.CashRegisterUpdateWithoutLogsInput>, Prisma.CashRegisterUncheckedUpdateWithoutLogsInput>;
};
export type CashRegisterCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    logs?: Prisma.CashDrawerLogCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterUncheckedCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    logs?: Prisma.CashDrawerLogUncheckedCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterCreateOrConnectWithoutSessionsInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutSessionsInput, Prisma.CashRegisterUncheckedCreateWithoutSessionsInput>;
};
export type CashRegisterUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.CashRegisterUpdateWithoutSessionsInput, Prisma.CashRegisterUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutSessionsInput, Prisma.CashRegisterUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.CashRegisterWhereInput;
};
export type CashRegisterUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.CashRegisterWhereInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateWithoutSessionsInput, Prisma.CashRegisterUncheckedUpdateWithoutSessionsInput>;
};
export type CashRegisterUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logs?: Prisma.CashDrawerLogUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logs?: Prisma.CashDrawerLogUncheckedUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterCreateWithoutLogsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    sessions?: Prisma.CashSessionCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterUncheckedCreateWithoutLogsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    isActive?: boolean;
    sessions?: Prisma.CashSessionUncheckedCreateNestedManyWithoutCashRegisterInput;
};
export type CashRegisterCreateOrConnectWithoutLogsInput = {
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutLogsInput, Prisma.CashRegisterUncheckedCreateWithoutLogsInput>;
};
export type CashRegisterUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.CashRegisterUpdateWithoutLogsInput, Prisma.CashRegisterUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.CashRegisterCreateWithoutLogsInput, Prisma.CashRegisterUncheckedCreateWithoutLogsInput>;
    where?: Prisma.CashRegisterWhereInput;
};
export type CashRegisterUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.CashRegisterWhereInput;
    data: Prisma.XOR<Prisma.CashRegisterUpdateWithoutLogsInput, Prisma.CashRegisterUncheckedUpdateWithoutLogsInput>;
};
export type CashRegisterUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sessions?: Prisma.CashSessionUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sessions?: Prisma.CashSessionUncheckedUpdateManyWithoutCashRegisterNestedInput;
};
export type CashRegisterCountOutputType = {
    logs: number;
    sessions: number;
};
export type CashRegisterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | CashRegisterCountOutputTypeCountLogsArgs;
    sessions?: boolean | CashRegisterCountOutputTypeCountSessionsArgs;
};
export type CashRegisterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterCountOutputTypeSelect<ExtArgs> | null;
};
export type CashRegisterCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashDrawerLogWhereInput;
};
export type CashRegisterCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashSessionWhereInput;
};
export type CashRegisterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
    logs?: boolean | Prisma.CashRegister$logsArgs<ExtArgs>;
    sessions?: boolean | Prisma.CashRegister$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CashRegisterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["cashRegister"]>;
export type CashRegisterSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
};
export type CashRegisterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "isActive", ExtArgs["result"]["cashRegister"]>;
export type CashRegisterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | Prisma.CashRegister$logsArgs<ExtArgs>;
    sessions?: boolean | Prisma.CashRegister$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CashRegisterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CashRegisterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CashRegisterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CashRegisterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashRegister";
    objects: {
        logs: Prisma.$CashDrawerLogPayload<ExtArgs>[];
        sessions: Prisma.$CashSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
        isActive: boolean;
    }, ExtArgs["result"]["cashRegister"]>;
    composites: {};
};
export type CashRegisterGetPayload<S extends boolean | null | undefined | CashRegisterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload, S>;
export type CashRegisterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashRegisterCountAggregateInputType | true;
};
export interface CashRegisterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashRegister'];
        meta: {
            name: 'CashRegister';
        };
    };
    findUnique<T extends CashRegisterFindUniqueArgs>(args: Prisma.SelectSubset<T, CashRegisterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashRegisterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashRegisterFindFirstArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashRegisterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashRegisterFindManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashRegisterCreateArgs>(args: Prisma.SelectSubset<T, CashRegisterCreateArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashRegisterCreateManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashRegisterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashRegisterDeleteArgs>(args: Prisma.SelectSubset<T, CashRegisterDeleteArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashRegisterUpdateArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashRegisterDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashRegisterUpdateManyArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashRegisterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashRegisterUpsertArgs>(args: Prisma.SelectSubset<T, CashRegisterUpsertArgs<ExtArgs>>): Prisma.Prisma__CashRegisterClient<runtime.Types.Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashRegisterCountArgs>(args?: Prisma.Subset<T, CashRegisterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashRegisterCountAggregateOutputType> : number>;
    aggregate<T extends CashRegisterAggregateArgs>(args: Prisma.Subset<T, CashRegisterAggregateArgs>): Prisma.PrismaPromise<GetCashRegisterAggregateType<T>>;
    groupBy<T extends CashRegisterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashRegisterGroupByArgs['orderBy'];
    } : {
        orderBy?: CashRegisterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashRegisterFieldRefs;
}
export interface Prisma__CashRegisterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    logs<T extends Prisma.CashRegister$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashRegister$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashDrawerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.CashRegister$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashRegister$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashRegisterFieldRefs {
    readonly id: Prisma.FieldRef<"CashRegister", 'String'>;
    readonly name: Prisma.FieldRef<"CashRegister", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CashRegister", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"CashRegister", 'Boolean'>;
}
export type CashRegisterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashRegisterScalarFieldEnum | Prisma.CashRegisterScalarFieldEnum[];
};
export type CashRegisterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashRegisterScalarFieldEnum | Prisma.CashRegisterScalarFieldEnum[];
};
export type CashRegisterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where?: Prisma.CashRegisterWhereInput;
    orderBy?: Prisma.CashRegisterOrderByWithRelationInput | Prisma.CashRegisterOrderByWithRelationInput[];
    cursor?: Prisma.CashRegisterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashRegisterScalarFieldEnum | Prisma.CashRegisterScalarFieldEnum[];
};
export type CashRegisterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterCreateInput, Prisma.CashRegisterUncheckedCreateInput>;
};
export type CashRegisterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashRegisterCreateManyInput | Prisma.CashRegisterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashRegisterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    data: Prisma.CashRegisterCreateManyInput | Prisma.CashRegisterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashRegisterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterUpdateInput, Prisma.CashRegisterUncheckedUpdateInput>;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyInput>;
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
};
export type CashRegisterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashRegisterUpdateManyMutationInput, Prisma.CashRegisterUncheckedUpdateManyInput>;
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
};
export type CashRegisterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashRegisterCreateInput, Prisma.CashRegisterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashRegisterUpdateInput, Prisma.CashRegisterUncheckedUpdateInput>;
};
export type CashRegisterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
    where: Prisma.CashRegisterWhereUniqueInput;
};
export type CashRegisterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashRegisterWhereInput;
    limit?: number;
};
export type CashRegister$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashRegister$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CashRegisterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashRegisterSelect<ExtArgs> | null;
    omit?: Prisma.CashRegisterOmit<ExtArgs> | null;
    include?: Prisma.CashRegisterInclude<ExtArgs> | null;
};
export {};
