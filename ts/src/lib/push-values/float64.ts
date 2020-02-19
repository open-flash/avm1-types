import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { LiteralType } from "kryo/types/literal";
import { Float64 as _Float64 } from "semantic-types";
import { $PushValueType, PushValueType } from "../push-value-type";

export interface Float64 {
  type: PushValueType.Float64;
  value: _Float64;
}

export const $Float64: DocumentIoType<Float64> = new DocumentType<Float64>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Float64 as PushValueType.Float64})},
    value: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
