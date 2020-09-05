import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Not extends ActionBase {
  action: ActionType.Not;
}

export const $Not: RecordIoType<Not> = new RecordType<Not>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Not as ActionType.Not})},
  },
  changeCase: CaseStyle.SnakeCase,
});
