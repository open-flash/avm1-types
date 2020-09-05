import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Equals2 extends ActionBase {
  action: ActionType.Equals2;
}

export const $Equals2: RecordIoType<Equals2> = new RecordType<Equals2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Equals2 as ActionType.Equals2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
