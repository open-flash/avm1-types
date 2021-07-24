import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface CharToAscii extends ActionBase {
  action: ActionType.CharToAscii;
}

export const $CharToAscii: RecordIoType<CharToAscii> = new RecordType<CharToAscii>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CharToAscii as ActionType.CharToAscii})},
  },
  changeCase: CaseStyle.SnakeCase,
});
