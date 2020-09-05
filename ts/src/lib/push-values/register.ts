import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint8 } from "semantic-types";
import { $PushValueType, PushValueType } from "../push-value-type.js";

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
