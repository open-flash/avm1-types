import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface BitURShift extends ActionBase {
  action: ActionType.BitURShift;
}

export const $BitURShift: RecordIoType<BitURShift> = new RecordType<BitURShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitURShift as ActionType.BitURShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
