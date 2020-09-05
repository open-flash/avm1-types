import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint8 } from "semantic-types";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StrictMode extends ActionBase {
  action: ActionType.StrictMode;
  mode: Uint8;
}

export const $StrictMode: RecordIoType<StrictMode> = new RecordType<StrictMode>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictMode as ActionType.StrictMode})},
    mode: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
