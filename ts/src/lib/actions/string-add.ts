import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringAdd extends ActionBase {
  action: ActionType.StringAdd;
}

export const $StringAdd: RecordIoType<StringAdd> = new RecordType<StringAdd>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringAdd as ActionType.StringAdd})},
  },
  changeCase: CaseStyle.SnakeCase,
});
