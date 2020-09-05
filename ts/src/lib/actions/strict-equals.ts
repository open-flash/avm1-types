import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StrictEquals extends ActionBase {
  action: ActionType.StrictEquals;
}

export const $StrictEquals: RecordIoType<StrictEquals> = new RecordType<StrictEquals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictEquals as ActionType.StrictEquals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
