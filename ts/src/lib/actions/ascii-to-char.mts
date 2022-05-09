import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface AsciiToChar extends ActionBase {
  action: ActionType.AsciiToChar;
}

export const $AsciiToChar: RecordIoType<AsciiToChar> = new RecordType<AsciiToChar>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.AsciiToChar as ActionType.AsciiToChar})},
  },
  changeCase: CaseStyle.SnakeCase,
});
