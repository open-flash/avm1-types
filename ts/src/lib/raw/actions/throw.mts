import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../../action-base.mjs";
import { $ActionType, ActionType } from "../../action-type.mjs";

export interface Throw extends ActionBase {
  action: ActionType.Throw;
}

export const $Throw: RecordIoType<Throw> = new RecordType<Throw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Throw as ActionType.Throw})},
  },
  changeCase: CaseStyle.SnakeCase,
});
