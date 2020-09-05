import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Stop extends ActionBase {
  action: ActionType.Stop;
}

export const $Stop: RecordIoType<Stop> = new RecordType<Stop>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Stop as ActionType.Stop})},
  },
  changeCase: CaseStyle.SnakeCase,
});
