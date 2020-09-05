import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Call extends ActionBase {
  action: ActionType.Call;
}

export const $Call: RecordIoType<Call> = new RecordType<Call>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Call as ActionType.Call})},
  },
  changeCase: CaseStyle.SnakeCase,
});
