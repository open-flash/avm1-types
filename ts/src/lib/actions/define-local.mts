import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface DefineLocal extends ActionBase {
  action: ActionType.DefineLocal;
}

export const $DefineLocal: RecordIoType<DefineLocal> = new RecordType<DefineLocal>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal as ActionType.DefineLocal})},
  },
  changeCase: CaseStyle.SnakeCase,
});
