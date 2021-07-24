import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface MbCharToAscii extends ActionBase {
  action: ActionType.MbCharToAscii;
}

export const $MbCharToAscii: RecordIoType<MbCharToAscii> = new RecordType<MbCharToAscii>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.MbCharToAscii as ActionType.MbCharToAscii})},
  },
  changeCase: CaseStyle.SnakeCase,
});
