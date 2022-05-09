import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface DefineLocal2 extends ActionBase {
  action: ActionType.DefineLocal2;
}

export const $DefineLocal2: RecordIoType<DefineLocal2> = new RecordType<DefineLocal2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal2 as ActionType.DefineLocal2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
