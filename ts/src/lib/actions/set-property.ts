import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetProperty extends ActionBase {
  action: ActionType.SetProperty;
}

export const $SetProperty: RecordIoType<SetProperty> = new RecordType<SetProperty>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetProperty as ActionType.SetProperty})},
  },
  changeCase: CaseStyle.SnakeCase,
});
