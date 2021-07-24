import { CaseStyle } from "kryo";
import { $Boolean as _$Boolean } from "kryo/boolean";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Boolean {
  type: PushValueType.Boolean;
  value: boolean;
}

export const $Boolean: RecordIoType<Boolean> = new RecordType<Boolean>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Boolean as PushValueType.Boolean})},
    value: {type: _$Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
