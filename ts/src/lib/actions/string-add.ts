import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

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
