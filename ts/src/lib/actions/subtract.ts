import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
