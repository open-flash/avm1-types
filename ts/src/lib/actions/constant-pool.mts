import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface ConstantPool extends ActionBase {
  action: ActionType.ConstantPool;
  pool: string[];
}

export const $ConstantPool: RecordIoType<ConstantPool> = new RecordType<ConstantPool>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ConstantPool as ActionType.ConstantPool})},
    pool: {type: new ArrayType({itemType: new Ucs2StringType({maxLength: Infinity}), maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
