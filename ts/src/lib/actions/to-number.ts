import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface ToNumber extends ActionBase {
  action: ActionType.ToNumber;
}

export const $ToNumber: RecordIoType<ToNumber> = new RecordType<ToNumber>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToNumber as ActionType.ToNumber})},
  },
  changeCase: CaseStyle.SnakeCase,
});
