import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Add2 extends ActionBase {
  action: ActionType.Add2;
}

export const $Add2: RecordIoType<Add2> = new RecordType<Add2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Add2 as ActionType.Add2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
