import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface And extends ActionBase {
  action: ActionType.And;
}

export const $And: RecordIoType<And> = new RecordType<And>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.And as ActionType.And})},
  },
  changeCase: CaseStyle.SnakeCase,
});
