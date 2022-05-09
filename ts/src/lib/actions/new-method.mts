import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface NewMethod extends ActionBase {
  action: ActionType.NewMethod;
}

export const $NewMethod: RecordIoType<NewMethod> = new RecordType<NewMethod>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NewMethod as ActionType.NewMethod})},
  },
  changeCase: CaseStyle.SnakeCase,
});
