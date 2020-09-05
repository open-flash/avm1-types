import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Subtract extends ActionBase {
  action: ActionType.Subtract;
}

export const $Subtract: RecordIoType<Subtract> = new RecordType<Subtract>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Subtract as ActionType.Subtract})},
  },
  changeCase: CaseStyle.SnakeCase,
});
