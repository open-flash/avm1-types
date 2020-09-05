import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Constant {
  type: PushValueType.Constant;
  value: Uint16;
}

export const $Constant: RecordIoType<Constant> = new RecordType<Constant>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Constant as PushValueType.Constant})},
    value: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
