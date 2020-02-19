import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface ConstantPool extends ActionBase {
  action: ActionType.ConstantPool;
  pool: string[];
}

export const $ConstantPool: DocumentIoType<ConstantPool> = new DocumentType<ConstantPool>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ConstantPool as ActionType.ConstantPool})},
    pool: {type: new ArrayType({itemType: new Ucs2StringType({maxLength: Infinity}), maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
