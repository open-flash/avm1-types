import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Increment extends ActionBase {
  action: ActionType.Increment;
}

export const $Increment: RecordIoType<Increment> = new RecordType<Increment>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Increment as ActionType.Increment})},
  },
  changeCase: CaseStyle.SnakeCase,
});
