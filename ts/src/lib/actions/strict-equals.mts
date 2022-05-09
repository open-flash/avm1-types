import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface StrictEquals extends ActionBase {
  action: ActionType.StrictEquals;
}

export const $StrictEquals: RecordIoType<StrictEquals> = new RecordType<StrictEquals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictEquals as ActionType.StrictEquals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
