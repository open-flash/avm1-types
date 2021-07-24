import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Delete extends ActionBase {
  action: ActionType.Delete;
}

export const $Delete: RecordIoType<Delete> = new RecordType<Delete>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Delete as ActionType.Delete})},
  },
  changeCase: CaseStyle.SnakeCase,
});
