import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Equals2 extends ActionBase {
  action: ActionType.Equals2;
}

export const $Equals2: RecordIoType<Equals2> = new RecordType<Equals2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Equals2 as ActionType.Equals2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
