import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Delete2 extends ActionBase {
  action: ActionType.Delete2;
}

export const $Delete2: RecordIoType<Delete2> = new RecordType<Delete2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Delete2 as ActionType.Delete2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
