import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface ToString extends ActionBase {
  action: ActionType.ToString;
}

export const $ToString: RecordIoType<ToString> = new RecordType<ToString>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToString as ActionType.ToString})},
  },
  changeCase: CaseStyle.SnakeCase,
});
