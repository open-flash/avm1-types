import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface CallFunction extends ActionBase {
  action: ActionType.CallFunction;
}

export const $CallFunction: RecordIoType<CallFunction> = new RecordType<CallFunction>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CallFunction as ActionType.CallFunction})},
  },
  changeCase: CaseStyle.SnakeCase,
});
