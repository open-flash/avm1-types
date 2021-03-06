import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface End extends ActionBase {
  action: ActionType.End;
}

export const $End: RecordIoType<End> = new RecordType<End>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.End})},
  },
  changeCase: CaseStyle.SnakeCase,
});
