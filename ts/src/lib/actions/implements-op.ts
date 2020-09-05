import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface ImplementsOp extends ActionBase {
  action: ActionType.ImplementsOp;
}

export const $ImplementsOp: RecordIoType<ImplementsOp> = new RecordType<ImplementsOp>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ImplementsOp as ActionType.ImplementsOp})},
  },
  changeCase: CaseStyle.SnakeCase,
});
