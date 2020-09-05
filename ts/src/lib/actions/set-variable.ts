import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetVariable extends ActionBase {
  action: ActionType.SetVariable;
}

export const $SetVariable: RecordIoType<SetVariable> = new RecordType<SetVariable>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetVariable as ActionType.SetVariable})},
  },
  changeCase: CaseStyle.SnakeCase,
});
