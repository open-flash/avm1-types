import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface DefineLocal2 extends ActionBase {
  action: ActionType.DefineLocal2;
}

export const $DefineLocal2: RecordIoType<DefineLocal2> = new RecordType<DefineLocal2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal2 as ActionType.DefineLocal2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
