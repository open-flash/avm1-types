import { CaseStyle } from "kryo";
import { Float64Type } from "kryo/float64";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Float32 as _Float32 } from "semantic-types";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

export interface Float32 {
  type: PushValueType.Float32;
  value: _Float32;
}

export const $Float32: RecordIoType<Float32> = new RecordType<Float32>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Float32 as PushValueType.Float32})},
    value: {type: new Float64Type({allowInfinity: true, allowNaN: true})},
  },
  changeCase: CaseStyle.SnakeCase,
});
