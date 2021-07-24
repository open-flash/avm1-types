import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
