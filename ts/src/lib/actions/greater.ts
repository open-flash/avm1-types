import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Greater extends ActionBase {
  action: ActionType.Greater;
}

export const $Greater: RecordIoType<Greater> = new RecordType<Greater>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Greater as ActionType.Greater})},
  },
  changeCase: CaseStyle.SnakeCase,
});
