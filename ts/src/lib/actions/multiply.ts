import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
