import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StopSounds extends ActionBase {
  action: ActionType.StopSounds;
}

export const $StopSounds: RecordIoType<StopSounds> = new RecordType<StopSounds>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StopSounds as ActionType.StopSounds})},
  },
  changeCase: CaseStyle.SnakeCase,
});
