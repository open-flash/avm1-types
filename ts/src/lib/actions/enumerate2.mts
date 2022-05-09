import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Enumerate2 extends ActionBase {
  action: ActionType.Enumerate2;
}

export const $Enumerate2: RecordIoType<Enumerate2> = new RecordType<Enumerate2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Enumerate2 as ActionType.Enumerate2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
