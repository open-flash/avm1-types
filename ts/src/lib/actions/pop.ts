import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Pop extends ActionBase {
  action: ActionType.Pop;
}

export const $Pop: RecordIoType<Pop> = new RecordType<Pop>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Pop as ActionType.Pop})},
  },
  changeCase: CaseStyle.SnakeCase,
});
