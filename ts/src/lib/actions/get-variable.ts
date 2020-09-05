import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
