import { $Null } from "kryo/builtins/null";
import { TryUnionType } from "kryo/types/try-union";
import { Ucs2StringType } from "kryo/types/ucs2-string";

export type CfgLabel = string;

export const $CfgLabel: Ucs2StringType = new Ucs2StringType({maxLength: Infinity});

export type NullableCfgLabel = null | CfgLabel;

export const $NullableCfgLabel: TryUnionType<NullableCfgLabel> = new TryUnionType({variants: [$Null, $CfgLabel]});
