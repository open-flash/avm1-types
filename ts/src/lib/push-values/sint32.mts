import { CaseStyle } from "kryo";
import { $Sint32 as _$Sint32 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint32 as _Sint32 } from "semantic-types";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

export interface Sint32 {
  type: PushValueType.Sint32;
  value: _Sint32;
}

export const $Sint32: RecordIoType<Sint32> = new RecordType<Sint32>(() => ({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Sint32 as PushValueType.Sint32})},
    value: {type: _$Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
}));
