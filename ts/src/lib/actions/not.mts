import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Not extends ActionBase {
  action: ActionType.Not;
}

export const $Not: RecordIoType<Not> = new RecordType<Not>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Not as ActionType.Not})},
  },
  changeCase: CaseStyle.SnakeCase,
});
