import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface AsciiToChar extends ActionBase {
  action: ActionType.AsciiToChar;
}

export const $AsciiToChar: RecordIoType<AsciiToChar> = new RecordType<AsciiToChar>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.AsciiToChar as ActionType.AsciiToChar})},
  },
  changeCase: CaseStyle.SnakeCase,
});
