import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";
import { $InvalidActionError, InvalidActionError } from "../../invalid-action-error.js";

export interface Error extends ActionBase {
  action: ActionType.Error;
  error?: InvalidActionError;
}

export const $Error: RecordIoType<Error> = new RecordType<Error>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Error})},
    error: {type: $InvalidActionError, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
