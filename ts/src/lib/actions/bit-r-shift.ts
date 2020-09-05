import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface BitRShift extends ActionBase {
  action: ActionType.BitRShift;
}

export const $BitRShift: RecordIoType<BitRShift> = new RecordType<BitRShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitRShift as ActionType.BitRShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
