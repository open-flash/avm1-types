import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface CastOp extends ActionBase {
  action: ActionType.CastOp;
}

export const $CastOp: RecordIoType<CastOp> = new RecordType<CastOp>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CastOp as ActionType.CastOp})},
  },
  changeCase: CaseStyle.SnakeCase,
});
