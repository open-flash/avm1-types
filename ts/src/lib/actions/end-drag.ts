import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface EndDrag extends ActionBase {
  action: ActionType.EndDrag;
}

export const $EndDrag: RecordIoType<EndDrag> = new RecordType<EndDrag>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.EndDrag as ActionType.EndDrag})},
  },
  changeCase: CaseStyle.SnakeCase,
});
