import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Equals extends ActionBase {
  action: ActionType.Equals;
}

export const $Equals: RecordIoType<Equals> = new RecordType<Equals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Equals as ActionType.Equals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
