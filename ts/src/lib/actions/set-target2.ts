import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetTarget2 extends ActionBase {
  action: ActionType.SetTarget2;
}

export const $SetTarget2: RecordIoType<SetTarget2> = new RecordType<SetTarget2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetTarget2 as ActionType.SetTarget2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
