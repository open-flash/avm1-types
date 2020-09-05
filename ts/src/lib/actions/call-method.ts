import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface CallMethod extends ActionBase {
  action: ActionType.CallMethod;
}

export const $CallMethod: RecordIoType<CallMethod> = new RecordType<CallMethod>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CallMethod as ActionType.CallMethod})},
  },
  changeCase: CaseStyle.SnakeCase,
});
