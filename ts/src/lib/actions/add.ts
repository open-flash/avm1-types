import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Add extends ActionBase {
  action: ActionType.Add;
}

export const $Add: RecordIoType<Add> = new RecordType<Add>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Add as ActionType.Add})},
  },
  changeCase: CaseStyle.SnakeCase,
});
