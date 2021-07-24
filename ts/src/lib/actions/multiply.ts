import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Multiply extends ActionBase {
  action: ActionType.Multiply;
}

export const $Multiply: RecordIoType<Multiply> = new RecordType<Multiply>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Multiply as ActionType.Multiply})},
  },
  changeCase: CaseStyle.SnakeCase,
});
