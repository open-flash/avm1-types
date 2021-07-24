import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Play extends ActionBase {
  action: ActionType.Play;
}

export const $Play: RecordIoType<Play> = new RecordType<Play>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Play as ActionType.Play})},
  },
  changeCase: CaseStyle.SnakeCase,
});
