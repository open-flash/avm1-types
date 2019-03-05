import { Ucs2StringType } from "kryo/types/ucs2-string";

export type CfgLabel = string;

export const $CfgLabel: Ucs2StringType = new Ucs2StringType({maxLength: Infinity});
