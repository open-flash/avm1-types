import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
