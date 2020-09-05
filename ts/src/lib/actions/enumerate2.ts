import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Enumerate2 extends ActionBase {
  action: ActionType.Enumerate2;
}

export const $Enumerate2: RecordIoType<Enumerate2> = new RecordType<Enumerate2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Enumerate2 as ActionType.Enumerate2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
