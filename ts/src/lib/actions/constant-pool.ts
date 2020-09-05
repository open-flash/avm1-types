import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

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
