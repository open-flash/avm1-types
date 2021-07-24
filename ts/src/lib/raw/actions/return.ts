import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface Return extends ActionBase {
  action: ActionType.Return;
}

export const $Return: RecordIoType<Return> = new RecordType<Return>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Return as ActionType.Return})},
  },
  changeCase: CaseStyle.SnakeCase,
});
