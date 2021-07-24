import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface NewMethod extends ActionBase {
  action: ActionType.NewMethod;
}

export const $NewMethod: RecordIoType<NewMethod> = new RecordType<NewMethod>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NewMethod as ActionType.NewMethod})},
  },
  changeCase: CaseStyle.SnakeCase,
});
