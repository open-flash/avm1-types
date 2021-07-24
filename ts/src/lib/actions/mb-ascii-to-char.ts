import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface MbAsciiToChar extends ActionBase {
  action: ActionType.MbAsciiToChar;
}

export const $MbAsciiToChar: RecordIoType<MbAsciiToChar> = new RecordType<MbAsciiToChar>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.MbAsciiToChar as ActionType.MbAsciiToChar})},
  },
  changeCase: CaseStyle.SnakeCase,
});
