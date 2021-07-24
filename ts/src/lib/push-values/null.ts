import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Null {
  type: PushValueType.Null;
}

export const $Null: RecordIoType<Null> = new RecordType<Null>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Null as PushValueType.Null})},
  },
  changeCase: CaseStyle.SnakeCase,
});
