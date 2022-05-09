import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Call extends ActionBase {
  action: ActionType.Call;
}

export const $Call: RecordIoType<Call> = new RecordType<Call>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Call as ActionType.Call})},
  },
  changeCase: CaseStyle.SnakeCase,
});
