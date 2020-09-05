import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringEquals extends ActionBase {
  action: ActionType.StringEquals;
}

export const $StringEquals: RecordIoType<StringEquals> = new RecordType<StringEquals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringEquals as ActionType.StringEquals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
