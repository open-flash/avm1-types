import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

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
