import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Or extends ActionBase {
  action: ActionType.Or;
}

export const $Or: RecordIoType<Or> = new RecordType<Or>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Or as ActionType.Or})},
  },
  changeCase: CaseStyle.SnakeCase,
});
