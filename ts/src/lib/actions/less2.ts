import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Less2 extends ActionBase {
  action: ActionType.Less2;
}

export const $Less2: RecordIoType<Less2> = new RecordType<Less2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less2 as ActionType.Less2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
