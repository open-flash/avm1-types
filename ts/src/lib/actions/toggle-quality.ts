import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface ToggleQuality extends ActionBase {
  action: ActionType.ToggleQuality;
}

export const $ToggleQuality: RecordIoType<ToggleQuality> = new RecordType<ToggleQuality>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToggleQuality as ActionType.ToggleQuality})},
  },
  changeCase: CaseStyle.SnakeCase,
});
