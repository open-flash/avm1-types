import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringGreater extends ActionBase {
  action: ActionType.StringGreater;
}

export const $StringGreater: RecordIoType<StringGreater> = new RecordType<StringGreater>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringGreater as ActionType.StringGreater})},
  },
  changeCase: CaseStyle.SnakeCase,
});
