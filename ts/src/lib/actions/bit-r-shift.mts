import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface BitRShift extends ActionBase {
  action: ActionType.BitRShift;
}

export const $BitRShift: RecordIoType<BitRShift> = new RecordType<BitRShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitRShift as ActionType.BitRShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
