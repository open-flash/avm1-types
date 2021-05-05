import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/lib/boolean.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StrictMode extends ActionBase {
  action: ActionType.StrictMode;
  isStrict: boolean;
}

export const $StrictMode: RecordIoType<StrictMode> = new RecordType<StrictMode>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictMode as ActionType.StrictMode})},
    isStrict: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
