import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GetProperty extends ActionBase {
  action: ActionType.GetProperty;
}

export const $GetProperty: RecordIoType<GetProperty> = new RecordType<GetProperty>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetProperty as ActionType.GetProperty})},
  },
  changeCase: CaseStyle.SnakeCase,
});
