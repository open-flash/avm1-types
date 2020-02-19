import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface Register {
  type: PushValueType.Register;
  value: Uint8;
}

export const $Register: DocumentIoType<Register> = new DocumentType<Register>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Register as PushValueType.Register})},
    value: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
