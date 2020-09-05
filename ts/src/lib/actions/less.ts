import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Less extends ActionBase {
  action: ActionType.Less;
}

export const $Less: RecordIoType<Less> = new RecordType<Less>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less as ActionType.Less})},
  },
  changeCase: CaseStyle.SnakeCase,
});
