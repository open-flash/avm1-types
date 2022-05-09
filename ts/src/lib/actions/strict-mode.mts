import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

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
