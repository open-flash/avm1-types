import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StartDrag extends ActionBase {
  action: ActionType.StartDrag;
}

export const $StartDrag: RecordIoType<StartDrag> = new RecordType<StartDrag>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StartDrag as ActionType.StartDrag})},
  },
  changeCase: CaseStyle.SnakeCase,
});
