import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GetVariable extends ActionBase {
  action: ActionType.GetVariable;
}

export const $GetVariable: RecordIoType<GetVariable> = new RecordType<GetVariable>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetVariable as ActionType.GetVariable})},
  },
  changeCase: CaseStyle.SnakeCase,
});
