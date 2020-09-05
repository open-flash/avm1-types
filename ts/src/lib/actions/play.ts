import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

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
