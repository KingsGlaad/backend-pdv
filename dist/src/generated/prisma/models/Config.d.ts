import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ConfigPayload>;
export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null;
    _min: ConfigMinAggregateOutputType | null;
    _max: ConfigMaxAggregateOutputType | null;
};
export type ConfigMinAggregateOutputType = {
    id: string | null;
    appName: string | null;
    logoUrl: string | null;
    theme: string | null;
    currency: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    address: string | null;
    cnpj: string | null;
    companyName: string | null;
    email: string | null;
    phone: string | null;
    stateRegistration: string | null;
    tradingName: string | null;
};
export type ConfigMaxAggregateOutputType = {
    id: string | null;
    appName: string | null;
    logoUrl: string | null;
    theme: string | null;
    currency: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    address: string | null;
    cnpj: string | null;
    companyName: string | null;
    email: string | null;
    phone: string | null;
    stateRegistration: string | null;
    tradingName: string | null;
};
export type ConfigCountAggregateOutputType = {
    id: number;
    appName: number;
    logoUrl: number;
    theme: number;
    currency: number;
    createdAt: number;
    updatedAt: number;
    address: number;
    cnpj: number;
    companyName: number;
    email: number;
    phone: number;
    stateRegistration: number;
    tradingName: number;
    _all: number;
};
export type ConfigMinAggregateInputType = {
    id?: true;
    appName?: true;
    logoUrl?: true;
    theme?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
    address?: true;
    cnpj?: true;
    companyName?: true;
    email?: true;
    phone?: true;
    stateRegistration?: true;
    tradingName?: true;
};
export type ConfigMaxAggregateInputType = {
    id?: true;
    appName?: true;
    logoUrl?: true;
    theme?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
    address?: true;
    cnpj?: true;
    companyName?: true;
    email?: true;
    phone?: true;
    stateRegistration?: true;
    tradingName?: true;
};
export type ConfigCountAggregateInputType = {
    id?: true;
    appName?: true;
    logoUrl?: true;
    theme?: true;
    currency?: true;
    createdAt?: true;
    updatedAt?: true;
    address?: true;
    cnpj?: true;
    companyName?: true;
    email?: true;
    phone?: true;
    stateRegistration?: true;
    tradingName?: true;
    _all?: true;
};
export type ConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConfigCountAggregateInputType;
    _min?: ConfigMinAggregateInputType;
    _max?: ConfigMaxAggregateInputType;
};
export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfig[P]> : Prisma.GetScalarType<T[P], AggregateConfig[P]>;
};
export type ConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithAggregationInput | Prisma.ConfigOrderByWithAggregationInput[];
    by: Prisma.ConfigScalarFieldEnum[] | Prisma.ConfigScalarFieldEnum;
    having?: Prisma.ConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfigCountAggregateInputType | true;
    _min?: ConfigMinAggregateInputType;
    _max?: ConfigMaxAggregateInputType;
};
export type ConfigGroupByOutputType = {
    id: string;
    appName: string;
    logoUrl: string | null;
    theme: string;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
    address: string | null;
    cnpj: string | null;
    companyName: string | null;
    email: string | null;
    phone: string | null;
    stateRegistration: string | null;
    tradingName: string | null;
    _count: ConfigCountAggregateOutputType | null;
    _min: ConfigMinAggregateOutputType | null;
    _max: ConfigMaxAggregateOutputType | null;
};
type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfigGroupByOutputType[P]>;
}>>;
export type ConfigWhereInput = {
    AND?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    OR?: Prisma.ConfigWhereInput[];
    NOT?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    id?: Prisma.StringFilter<"Config"> | string;
    appName?: Prisma.StringFilter<"Config"> | string;
    logoUrl?: Prisma.StringNullableFilter<"Config"> | string | null;
    theme?: Prisma.StringFilter<"Config"> | string;
    currency?: Prisma.StringFilter<"Config"> | string;
    createdAt?: Prisma.DateTimeFilter<"Config"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Config"> | Date | string;
    address?: Prisma.StringNullableFilter<"Config"> | string | null;
    cnpj?: Prisma.StringNullableFilter<"Config"> | string | null;
    companyName?: Prisma.StringNullableFilter<"Config"> | string | null;
    email?: Prisma.StringNullableFilter<"Config"> | string | null;
    phone?: Prisma.StringNullableFilter<"Config"> | string | null;
    stateRegistration?: Prisma.StringNullableFilter<"Config"> | string | null;
    tradingName?: Prisma.StringNullableFilter<"Config"> | string | null;
};
export type ConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appName?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    cnpj?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateRegistration?: Prisma.SortOrderInput | Prisma.SortOrder;
    tradingName?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    OR?: Prisma.ConfigWhereInput[];
    NOT?: Prisma.ConfigWhereInput | Prisma.ConfigWhereInput[];
    appName?: Prisma.StringFilter<"Config"> | string;
    logoUrl?: Prisma.StringNullableFilter<"Config"> | string | null;
    theme?: Prisma.StringFilter<"Config"> | string;
    currency?: Prisma.StringFilter<"Config"> | string;
    createdAt?: Prisma.DateTimeFilter<"Config"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Config"> | Date | string;
    address?: Prisma.StringNullableFilter<"Config"> | string | null;
    cnpj?: Prisma.StringNullableFilter<"Config"> | string | null;
    companyName?: Prisma.StringNullableFilter<"Config"> | string | null;
    email?: Prisma.StringNullableFilter<"Config"> | string | null;
    phone?: Prisma.StringNullableFilter<"Config"> | string | null;
    stateRegistration?: Prisma.StringNullableFilter<"Config"> | string | null;
    tradingName?: Prisma.StringNullableFilter<"Config"> | string | null;
}, "id">;
export type ConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appName?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    cnpj?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    stateRegistration?: Prisma.SortOrderInput | Prisma.SortOrder;
    tradingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ConfigCountOrderByAggregateInput;
    _max?: Prisma.ConfigMaxOrderByAggregateInput;
    _min?: Prisma.ConfigMinOrderByAggregateInput;
};
export type ConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConfigScalarWhereWithAggregatesInput | Prisma.ConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConfigScalarWhereWithAggregatesInput | Prisma.ConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Config"> | string;
    appName?: Prisma.StringWithAggregatesFilter<"Config"> | string;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    theme?: Prisma.StringWithAggregatesFilter<"Config"> | string;
    currency?: Prisma.StringWithAggregatesFilter<"Config"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Config"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Config"> | Date | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    cnpj?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    companyName?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    stateRegistration?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
    tradingName?: Prisma.StringNullableWithAggregatesFilter<"Config"> | string | null;
};
export type ConfigCreateInput = {
    id?: string;
    appName?: string;
    logoUrl?: string | null;
    theme?: string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address?: string | null;
    cnpj?: string | null;
    companyName?: string | null;
    email?: string | null;
    phone?: string | null;
    stateRegistration?: string | null;
    tradingName?: string | null;
};
export type ConfigUncheckedCreateInput = {
    id?: string;
    appName?: string;
    logoUrl?: string | null;
    theme?: string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address?: string | null;
    cnpj?: string | null;
    companyName?: string | null;
    email?: string | null;
    phone?: string | null;
    stateRegistration?: string | null;
    tradingName?: string | null;
};
export type ConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appName?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    theme?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cnpj?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stateRegistration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tradingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appName?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    theme?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cnpj?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stateRegistration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tradingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConfigCreateManyInput = {
    id?: string;
    appName?: string;
    logoUrl?: string | null;
    theme?: string;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address?: string | null;
    cnpj?: string | null;
    companyName?: string | null;
    email?: string | null;
    phone?: string | null;
    stateRegistration?: string | null;
    tradingName?: string | null;
};
export type ConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appName?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    theme?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cnpj?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stateRegistration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tradingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appName?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    theme?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cnpj?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stateRegistration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tradingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appName?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    cnpj?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    stateRegistration?: Prisma.SortOrder;
    tradingName?: Prisma.SortOrder;
};
export type ConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appName?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    cnpj?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    stateRegistration?: Prisma.SortOrder;
    tradingName?: Prisma.SortOrder;
};
export type ConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appName?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    cnpj?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    stateRegistration?: Prisma.SortOrder;
    tradingName?: Prisma.SortOrder;
};
export type ConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appName?: boolean;
    logoUrl?: boolean;
    theme?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    address?: boolean;
    cnpj?: boolean;
    companyName?: boolean;
    email?: boolean;
    phone?: boolean;
    stateRegistration?: boolean;
    tradingName?: boolean;
}, ExtArgs["result"]["config"]>;
export type ConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appName?: boolean;
    logoUrl?: boolean;
    theme?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    address?: boolean;
    cnpj?: boolean;
    companyName?: boolean;
    email?: boolean;
    phone?: boolean;
    stateRegistration?: boolean;
    tradingName?: boolean;
}, ExtArgs["result"]["config"]>;
export type ConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appName?: boolean;
    logoUrl?: boolean;
    theme?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    address?: boolean;
    cnpj?: boolean;
    companyName?: boolean;
    email?: boolean;
    phone?: boolean;
    stateRegistration?: boolean;
    tradingName?: boolean;
}, ExtArgs["result"]["config"]>;
export type ConfigSelectScalar = {
    id?: boolean;
    appName?: boolean;
    logoUrl?: boolean;
    theme?: boolean;
    currency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    address?: boolean;
    cnpj?: boolean;
    companyName?: boolean;
    email?: boolean;
    phone?: boolean;
    stateRegistration?: boolean;
    tradingName?: boolean;
};
export type ConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appName" | "logoUrl" | "theme" | "currency" | "createdAt" | "updatedAt" | "address" | "cnpj" | "companyName" | "email" | "phone" | "stateRegistration" | "tradingName", ExtArgs["result"]["config"]>;
export type $ConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Config";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        appName: string;
        logoUrl: string | null;
        theme: string;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        cnpj: string | null;
        companyName: string | null;
        email: string | null;
        phone: string | null;
        stateRegistration: string | null;
        tradingName: string | null;
    }, ExtArgs["result"]["config"]>;
    composites: {};
};
export type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConfigPayload, S>;
export type ConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConfigCountAggregateInputType | true;
};
export interface ConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Config'];
        meta: {
            name: 'Config';
        };
    };
    findUnique<T extends ConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConfigCreateArgs>(args: Prisma.SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConfigDeleteArgs>(args: Prisma.SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConfigUpdateArgs>(args: Prisma.SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConfigUpsertArgs>(args: Prisma.SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ConfigClient<runtime.Types.Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConfigCountArgs>(args?: Prisma.Subset<T, ConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfigCountAggregateOutputType> : number>;
    aggregate<T extends ConfigAggregateArgs>(args: Prisma.Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>;
    groupBy<T extends ConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConfigFieldRefs;
}
export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConfigFieldRefs {
    readonly id: Prisma.FieldRef<"Config", 'String'>;
    readonly appName: Prisma.FieldRef<"Config", 'String'>;
    readonly logoUrl: Prisma.FieldRef<"Config", 'String'>;
    readonly theme: Prisma.FieldRef<"Config", 'String'>;
    readonly currency: Prisma.FieldRef<"Config", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Config", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Config", 'DateTime'>;
    readonly address: Prisma.FieldRef<"Config", 'String'>;
    readonly cnpj: Prisma.FieldRef<"Config", 'String'>;
    readonly companyName: Prisma.FieldRef<"Config", 'String'>;
    readonly email: Prisma.FieldRef<"Config", 'String'>;
    readonly phone: Prisma.FieldRef<"Config", 'String'>;
    readonly stateRegistration: Prisma.FieldRef<"Config", 'String'>;
    readonly tradingName: Prisma.FieldRef<"Config", 'String'>;
}
export type ConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
};
export type ConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
};
export type ConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
};
export type ConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
};
export type ConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where?: Prisma.ConfigWhereInput;
    orderBy?: Prisma.ConfigOrderByWithRelationInput | Prisma.ConfigOrderByWithRelationInput[];
    cursor?: Prisma.ConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfigScalarFieldEnum | Prisma.ConfigScalarFieldEnum[];
};
export type ConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfigCreateInput, Prisma.ConfigUncheckedCreateInput>;
};
export type ConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConfigCreateManyInput | Prisma.ConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.ConfigCreateManyInput | Prisma.ConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfigUpdateInput, Prisma.ConfigUncheckedUpdateInput>;
    where: Prisma.ConfigWhereUniqueInput;
};
export type ConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConfigUpdateManyMutationInput, Prisma.ConfigUncheckedUpdateManyInput>;
    where?: Prisma.ConfigWhereInput;
    limit?: number;
};
export type ConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfigUpdateManyMutationInput, Prisma.ConfigUncheckedUpdateManyInput>;
    where?: Prisma.ConfigWhereInput;
    limit?: number;
};
export type ConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConfigCreateInput, Prisma.ConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConfigUpdateInput, Prisma.ConfigUncheckedUpdateInput>;
};
export type ConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
    where: Prisma.ConfigWhereUniqueInput;
};
export type ConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfigWhereInput;
    limit?: number;
};
export type ConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfigSelect<ExtArgs> | null;
    omit?: Prisma.ConfigOmit<ExtArgs> | null;
};
export {};
