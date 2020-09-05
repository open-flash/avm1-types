import { $Null } from "kryo/lib/null.js";
import { TryUnionType } from "kryo/lib/try-union.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

export type CfgLabel = string;

export const $CfgLabel: Ucs2StringType = new Ucs2StringType({maxLength: Infinity});

export type NullableCfgLabel = null | CfgLabel;

export const $NullableCfgLabel: TryUnionType<NullableCfgLabel> = new TryUnionType({variants: [$Null, $CfgLabel]});
