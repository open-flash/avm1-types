import { $Boolean as _$Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface Boolean {
  type: PushValueType.Boolean;
  value: boolean;
}

export const $Boolean: DocumentIoType<Boolean> = new DocumentType<Boolean>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Boolean as PushValueType.Boolean})},
    value: {type: _$Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
