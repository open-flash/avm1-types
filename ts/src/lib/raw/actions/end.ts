import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
