import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Raw extends ActionBase {
  action: ActionType.Raw;
  code: Uint8;
  data: Uint8Array;
}

export const $Raw: RecordIoType<Raw> = new RecordType<Raw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Raw as const})},
    code: {type: new IntegerType()},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
