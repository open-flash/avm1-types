import { $Boolean as _$Boolean } from "kryo/lib/boolean.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
