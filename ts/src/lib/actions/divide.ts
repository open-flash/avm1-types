import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Divide extends ActionBase {
  action: ActionType.Divide;
}

export const $Divide: RecordIoType<Divide> = new RecordType<Divide>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Divide as ActionType.Divide})},
  },
  changeCase: CaseStyle.SnakeCase,
});
