import { CaseStyle } from "kryo";
import { Float64Type } from "kryo/float64";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Float64 as _Float64 } from "semantic-types";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

export interface Float64 {
  type: PushValueType.Float64;
  value: _Float64;
}

export const $Float64: RecordIoType<Float64> = new RecordType<Float64>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Float64 as PushValueType.Float64})},
    value: {type: new Float64Type({allowInfinity: true, allowNaN: true})},
  },
  changeCase: CaseStyle.SnakeCase,
});
