import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Extends extends ActionBase {
  action: ActionType.Extends;
}

export const $Extends: RecordIoType<Extends> = new RecordType<Extends>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Extends as ActionType.Extends})},
  },
  changeCase: CaseStyle.SnakeCase,
});
