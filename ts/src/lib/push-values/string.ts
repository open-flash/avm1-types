import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface String {
  type: PushValueType.String;
  value: string;
}

export const $String: DocumentIoType<String> = new DocumentType<String>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.String as PushValueType.String})},
    value: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
