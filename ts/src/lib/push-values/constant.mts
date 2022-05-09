import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

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
