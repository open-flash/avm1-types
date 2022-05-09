import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface ToInteger extends ActionBase {
  action: ActionType.ToInteger;
}

export const $ToInteger: RecordIoType<ToInteger> = new RecordType<ToInteger>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToInteger as ActionType.ToInteger})},
  },
  changeCase: CaseStyle.SnakeCase,
});
