import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringLess extends ActionBase {
  action: ActionType.StringLess;
}

export const $StringLess: RecordIoType<StringLess> = new RecordType<StringLess>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringLess as ActionType.StringLess})},
  },
  changeCase: CaseStyle.SnakeCase,
});
