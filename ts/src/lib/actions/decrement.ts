import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Decrement extends ActionBase {
  action: ActionType.Decrement;
}

export const $Decrement: RecordIoType<Decrement> = new RecordType<Decrement>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Decrement as ActionType.Decrement})},
  },
  changeCase: CaseStyle.SnakeCase,
});
