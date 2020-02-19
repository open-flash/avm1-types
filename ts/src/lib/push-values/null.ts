import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface Null {
  type: PushValueType.Null;
}

export const $Null: DocumentIoType<Null> = new DocumentType<Null>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Null as PushValueType.Null})},
  },
  changeCase: CaseStyle.SnakeCase,
});
