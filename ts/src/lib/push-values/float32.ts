import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Float64Type } from "kryo/lib/float64.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Float32 as _Float32 } from "semantic-types";
import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Float32 {
  type: PushValueType.Float32;
  value: _Float32;
}

export const $Float32: RecordIoType<Float32> = new RecordType<Float32>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Float32 as PushValueType.Float32})},
    value: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
