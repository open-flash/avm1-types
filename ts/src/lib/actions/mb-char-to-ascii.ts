import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
