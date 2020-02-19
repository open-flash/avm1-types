import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface Undefined {
  type: PushValueType.Undefined;
}

export const $Undefined: DocumentIoType<Undefined> = new DocumentType<Undefined>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Undefined as PushValueType.Undefined})},
  },
  changeCase: CaseStyle.SnakeCase,
});
