import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Trace extends ActionBase {
  action: ActionType.Trace;
}

export const $Trace: RecordIoType<Trace> = new RecordType<Trace>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Trace as ActionType.Trace})},
  },
  changeCase: CaseStyle.SnakeCase,
});
