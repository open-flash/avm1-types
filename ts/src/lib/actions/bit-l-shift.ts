import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface BitLShift extends ActionBase {
  action: ActionType.BitLShift;
}

export const $BitLShift: RecordIoType<BitLShift> = new RecordType<BitLShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitLShift as ActionType.BitLShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
