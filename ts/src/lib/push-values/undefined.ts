import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Undefined {
  type: PushValueType.Undefined;
}

export const $Undefined: RecordIoType<Undefined> = new RecordType<Undefined>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Undefined as PushValueType.Undefined})},
  },
  changeCase: CaseStyle.SnakeCase,
});
