import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

export interface Register {
  type: PushValueType.Register;
  value: Uint8;
}

export const $Register: RecordIoType<Register> = new RecordType<Register>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Register as PushValueType.Register})},
    value: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
