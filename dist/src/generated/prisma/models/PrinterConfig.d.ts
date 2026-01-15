import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrinterConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PrinterConfigPayload>;
export type AggregatePrinterConfig = {
    _count: PrinterConfigCountAggregateOutputType | null;
    _avg: PrinterConfigAvgAggregateOutputType | null;
    _sum: PrinterConfigSumAggregateOutputType | null;
    _min: PrinterConfigMinAggregateOutputType | null;
    _max: PrinterConfigMaxAggregateOutputType | null;
};
export type PrinterConfigAvgAggregateOutputType = {
    width: number | null;
};
export type PrinterConfigSumAggregateOutputType = {
    width: number | null;
};
export type PrinterConfigMinAggregateOutputType = {
    id: string | null;
    terminalId: string | null;
    name: string | null;
    printerName: string | null;
    printerType: string | null;
    connection: string | null;
    width: number | null;
    enabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrinterConfigMaxAggregateOutputType = {
    id: string | null;
    terminalId: string | null;
    name: string | null;
    printerName: string | null;
    printerType: string | null;
    connection: string | null;
    width: number | null;
    enabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrinterConfigCountAggregateOutputType = {
    id: number;
    terminalId: number;
    name: number;
    printerName: number;
    printerType: number;
    connection: number;
    width: number;
    enabled: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PrinterConfigAvgAggregateInputType = {
    width?: true;
};
export type PrinterConfigSumAggregateInputType = {
    width?: true;
};
export type PrinterConfigMinAggregateInputType = {
    id?: true;
    terminalId?: true;
    name?: true;
    printerName?: true;
    printerType?: true;
    connection?: true;
    width?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrinterConfigMaxAggregateInputType = {
    id?: true;
    terminalId?: true;
    name?: true;
    printerName?: true;
    printerType?: true;
    connection?: true;
    width?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrinterConfigCountAggregateInputType = {
    id?: true;
    terminalId?: true;
    name?: true;
    printerName?: true;
    printerType?: true;
    connection?: true;
    width?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PrinterConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrinterConfigWhereInput;
    orderBy?: Prisma.PrinterConfigOrderByWithRelationInput | Prisma.PrinterConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrinterConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrinterConfigCountAggregateInputType;
    _avg?: PrinterConfigAvgAggregateInputType;
    _sum?: PrinterConfigSumAggregateInputType;
    _min?: PrinterConfigMinAggregateInputType;
    _max?: PrinterConfigMaxAggregateInputType;
};
export type GetPrinterConfigAggregateType<T extends PrinterConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePrinterConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrinterConfig[P]> : Prisma.GetScalarType<T[P], AggregatePrinterConfig[P]>;
};
export type PrinterConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrinterConfigWhereInput;
    orderBy?: Prisma.PrinterConfigOrderByWithAggregationInput | Prisma.PrinterConfigOrderByWithAggregationInput[];
    by: Prisma.PrinterConfigScalarFieldEnum[] | Prisma.PrinterConfigScalarFieldEnum;
    having?: Prisma.PrinterConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrinterConfigCountAggregateInputType | true;
    _avg?: PrinterConfigAvgAggregateInputType;
    _sum?: PrinterConfigSumAggregateInputType;
    _min?: PrinterConfigMinAggregateInputType;
    _max?: PrinterConfigMaxAggregateInputType;
};
export type PrinterConfigGroupByOutputType = {
    id: string;
    terminalId: string;
    name: string | null;
    printerName: string;
    printerType: string;
    connection: string;
    width: number;
    enabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PrinterConfigCountAggregateOutputType | null;
    _avg: PrinterConfigAvgAggregateOutputType | null;
    _sum: PrinterConfigSumAggregateOutputType | null;
    _min: PrinterConfigMinAggregateOutputType | null;
    _max: PrinterConfigMaxAggregateOutputType | null;
};
type GetPrinterConfigGroupByPayload<T extends PrinterConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrinterConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrinterConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrinterConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrinterConfigGroupByOutputType[P]>;
}>>;
export type PrinterConfigWhereInput = {
    AND?: Prisma.PrinterConfigWhereInput | Prisma.PrinterConfigWhereInput[];
    OR?: Prisma.PrinterConfigWhereInput[];
    NOT?: Prisma.PrinterConfigWhereInput | Prisma.PrinterConfigWhereInput[];
    id?: Prisma.StringFilter<"PrinterConfig"> | string;
    terminalId?: Prisma.StringFilter<"PrinterConfig"> | string;
    name?: Prisma.StringNullableFilter<"PrinterConfig"> | string | null;
    printerName?: Prisma.StringFilter<"PrinterConfig"> | string;
    printerType?: Prisma.StringFilter<"PrinterConfig"> | string;
    connection?: Prisma.StringFilter<"PrinterConfig"> | string;
    width?: Prisma.IntFilter<"PrinterConfig"> | number;
    enabled?: Prisma.BoolFilter<"PrinterConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PrinterConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PrinterConfig"> | Date | string;
};
export type PrinterConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    terminalId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    printerName?: Prisma.SortOrder;
    printerType?: Prisma.SortOrder;
    connection?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrinterConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    terminalId?: string;
    AND?: Prisma.PrinterConfigWhereInput | Prisma.PrinterConfigWhereInput[];
    OR?: Prisma.PrinterConfigWhereInput[];
    NOT?: Prisma.PrinterConfigWhereInput | Prisma.PrinterConfigWhereInput[];
    name?: Prisma.StringNullableFilter<"PrinterConfig"> | string | null;
    printerName?: Prisma.StringFilter<"PrinterConfig"> | string;
    printerType?: Prisma.StringFilter<"PrinterConfig"> | string;
    connection?: Prisma.StringFilter<"PrinterConfig"> | string;
    width?: Prisma.IntFilter<"PrinterConfig"> | number;
    enabled?: Prisma.BoolFilter<"PrinterConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PrinterConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PrinterConfig"> | Date | string;
}, "id" | "terminalId">;
export type PrinterConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    terminalId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    printerName?: Prisma.SortOrder;
    printerType?: Prisma.SortOrder;
    connection?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PrinterConfigCountOrderByAggregateInput;
    _avg?: Prisma.PrinterConfigAvgOrderByAggregateInput;
    _max?: Prisma.PrinterConfigMaxOrderByAggregateInput;
    _min?: Prisma.PrinterConfigMinOrderByAggregateInput;
    _sum?: Prisma.PrinterConfigSumOrderByAggregateInput;
};
export type PrinterConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrinterConfigScalarWhereWithAggregatesInput | Prisma.PrinterConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrinterConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrinterConfigScalarWhereWithAggregatesInput | Prisma.PrinterConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PrinterConfig"> | string;
    terminalId?: Prisma.StringWithAggregatesFilter<"PrinterConfig"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"PrinterConfig"> | string | null;
    printerName?: Prisma.StringWithAggregatesFilter<"PrinterConfig"> | string;
    printerType?: Prisma.StringWithAggregatesFilter<"PrinterConfig"> | string;
    connection?: Prisma.StringWithAggregatesFilter<"PrinterConfig"> | string;
    width?: Prisma.IntWithAggregatesFilter<"PrinterConfig"> | number;
    enabled?: Prisma.BoolWithAggregatesFilter<"PrinterConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PrinterConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PrinterConfig"> | Date | string;
};
export type PrinterConfigCreateInput = {
    id?: string;
    terminalId: string;
    name?: string | null;
    printerName: string;
    printerType: string;
    connection: string;
    width?: number;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrinterConfigUncheckedCreateInput = {
    id?: string;
    terminalId: string;
    name?: string | null;
    printerName: string;
    printerType: string;
    connection: string;
    width?: number;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrinterConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    terminalId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printerName?: Prisma.StringFieldUpdateOperationsInput | string;
    printerType?: Prisma.StringFieldUpdateOperationsInput | string;
    connection?: Prisma.StringFieldUpdateOperationsInput | string;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrinterConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    terminalId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printerName?: Prisma.StringFieldUpdateOperationsInput | string;
    printerType?: Prisma.StringFieldUpdateOperationsInput | string;
    connection?: Prisma.StringFieldUpdateOperationsInput | string;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrinterConfigCreateManyInput = {
    id?: string;
    terminalId: string;
    name?: string | null;
    printerName: string;
    printerType: string;
    connection: string;
    width?: number;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrinterConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    terminalId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printerName?: Prisma.StringFieldUpdateOperationsInput | string;
    printerType?: Prisma.StringFieldUpdateOperationsInput | string;
    connection?: Prisma.StringFieldUpdateOperationsInput | string;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrinterConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    terminalId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printerName?: Prisma.StringFieldUpdateOperationsInput | string;
    printerType?: Prisma.StringFieldUpdateOperationsInput | string;
    connection?: Prisma.StringFieldUpdateOperationsInput | string;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrinterConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminalId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    printerName?: Prisma.SortOrder;
    printerType?: Prisma.SortOrder;
    connection?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrinterConfigAvgOrderByAggregateInput = {
    width?: Prisma.SortOrder;
};
export type PrinterConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminalId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    printerName?: Prisma.SortOrder;
    printerType?: Prisma.SortOrder;
    connection?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrinterConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminalId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    printerName?: Prisma.SortOrder;
    printerType?: Prisma.SortOrder;
    connection?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrinterConfigSumOrderByAggregateInput = {
    width?: Prisma.SortOrder;
};
export type PrinterConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminalId?: boolean;
    name?: boolean;
    printerName?: boolean;
    printerType?: boolean;
    connection?: boolean;
    width?: boolean;
    enabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["printerConfig"]>;
export type PrinterConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminalId?: boolean;
    name?: boolean;
    printerName?: boolean;
    printerType?: boolean;
    connection?: boolean;
    width?: boolean;
    enabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["printerConfig"]>;
export type PrinterConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminalId?: boolean;
    name?: boolean;
    printerName?: boolean;
    printerType?: boolean;
    connection?: boolean;
    width?: boolean;
    enabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["printerConfig"]>;
export type PrinterConfigSelectScalar = {
    id?: boolean;
    terminalId?: boolean;
    name?: boolean;
    printerName?: boolean;
    printerType?: boolean;
    connection?: boolean;
    width?: boolean;
    enabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PrinterConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "terminalId" | "name" | "printerName" | "printerType" | "connection" | "width" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["printerConfig"]>;
export type $PrinterConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrinterConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        terminalId: string;
        name: string | null;
        printerName: string;
        printerType: string;
        connection: string;
        width: number;
        enabled: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["printerConfig"]>;
    composites: {};
};
export type PrinterConfigGetPayload<S extends boolean | null | undefined | PrinterConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload, S>;
export type PrinterConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrinterConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrinterConfigCountAggregateInputType | true;
};
export interface PrinterConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrinterConfig'];
        meta: {
            name: 'PrinterConfig';
        };
    };
    findUnique<T extends PrinterConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PrinterConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrinterConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrinterConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrinterConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PrinterConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrinterConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrinterConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrinterConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PrinterConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrinterConfigCreateArgs>(args: Prisma.SelectSubset<T, PrinterConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrinterConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PrinterConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrinterConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrinterConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrinterConfigDeleteArgs>(args: Prisma.SelectSubset<T, PrinterConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrinterConfigUpdateArgs>(args: Prisma.SelectSubset<T, PrinterConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrinterConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrinterConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrinterConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PrinterConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrinterConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrinterConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrinterConfigUpsertArgs>(args: Prisma.SelectSubset<T, PrinterConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PrinterConfigClient<runtime.Types.Result.GetResult<Prisma.$PrinterConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrinterConfigCountArgs>(args?: Prisma.Subset<T, PrinterConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrinterConfigCountAggregateOutputType> : number>;
    aggregate<T extends PrinterConfigAggregateArgs>(args: Prisma.Subset<T, PrinterConfigAggregateArgs>): Prisma.PrismaPromise<GetPrinterConfigAggregateType<T>>;
    groupBy<T extends PrinterConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrinterConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PrinterConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrinterConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinterConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrinterConfigFieldRefs;
}
export interface Prisma__PrinterConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrinterConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly terminalId: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly name: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly printerName: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly printerType: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly connection: Prisma.FieldRef<"PrinterConfig", 'String'>;
    readonly width: Prisma.FieldRef<"PrinterConfig", 'Int'>;
    readonly enabled: Prisma.FieldRef<"PrinterConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PrinterConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PrinterConfig", 'DateTime'>;
}
export type PrinterConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where: Prisma.PrinterConfigWhereUniqueInput;
};
export type PrinterConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where: Prisma.PrinterConfigWhereUniqueInput;
};
export type PrinterConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where?: Prisma.PrinterConfigWhereInput;
    orderBy?: Prisma.PrinterConfigOrderByWithRelationInput | Prisma.PrinterConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrinterConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrinterConfigScalarFieldEnum | Prisma.PrinterConfigScalarFieldEnum[];
};
export type PrinterConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where?: Prisma.PrinterConfigWhereInput;
    orderBy?: Prisma.PrinterConfigOrderByWithRelationInput | Prisma.PrinterConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrinterConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrinterConfigScalarFieldEnum | Prisma.PrinterConfigScalarFieldEnum[];
};
export type PrinterConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where?: Prisma.PrinterConfigWhereInput;
    orderBy?: Prisma.PrinterConfigOrderByWithRelationInput | Prisma.PrinterConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrinterConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrinterConfigScalarFieldEnum | Prisma.PrinterConfigScalarFieldEnum[];
};
export type PrinterConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrinterConfigCreateInput, Prisma.PrinterConfigUncheckedCreateInput>;
};
export type PrinterConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrinterConfigCreateManyInput | Prisma.PrinterConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrinterConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    data: Prisma.PrinterConfigCreateManyInput | Prisma.PrinterConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrinterConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrinterConfigUpdateInput, Prisma.PrinterConfigUncheckedUpdateInput>;
    where: Prisma.PrinterConfigWhereUniqueInput;
};
export type PrinterConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrinterConfigUpdateManyMutationInput, Prisma.PrinterConfigUncheckedUpdateManyInput>;
    where?: Prisma.PrinterConfigWhereInput;
    limit?: number;
};
export type PrinterConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrinterConfigUpdateManyMutationInput, Prisma.PrinterConfigUncheckedUpdateManyInput>;
    where?: Prisma.PrinterConfigWhereInput;
    limit?: number;
};
export type PrinterConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where: Prisma.PrinterConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrinterConfigCreateInput, Prisma.PrinterConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrinterConfigUpdateInput, Prisma.PrinterConfigUncheckedUpdateInput>;
};
export type PrinterConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
    where: Prisma.PrinterConfigWhereUniqueInput;
};
export type PrinterConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrinterConfigWhereInput;
    limit?: number;
};
export type PrinterConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrinterConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrinterConfigOmit<ExtArgs> | null;
};
export {};
