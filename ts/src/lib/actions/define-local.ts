import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface DefineLocal extends ActionBase {
  action: ActionType.DefineLocal;
}

export const $DefineLocal: RecordIoType<DefineLocal> = new RecordType<DefineLocal>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal as ActionType.DefineLocal})},
  },
  changeCase: CaseStyle.SnakeCase,
});
