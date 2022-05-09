import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface StartDrag extends ActionBase {
  action: ActionType.StartDrag;
}

export const $StartDrag: RecordIoType<StartDrag> = new RecordType<StartDrag>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StartDrag as ActionType.StartDrag})},
  },
  changeCase: CaseStyle.SnakeCase,
});
