import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Less2 extends ActionBase {
  action: ActionType.Less2;
}

export const $Less2: RecordIoType<Less2> = new RecordType<Less2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less2 as ActionType.Less2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
