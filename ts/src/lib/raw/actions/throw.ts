import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface Throw extends ActionBase {
  action: ActionType.Throw;
}

export const $Throw: RecordIoType<Throw> = new RecordType<Throw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Throw as ActionType.Throw})},
  },
  changeCase: CaseStyle.SnakeCase,
});
