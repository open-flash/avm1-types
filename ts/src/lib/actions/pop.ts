import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
