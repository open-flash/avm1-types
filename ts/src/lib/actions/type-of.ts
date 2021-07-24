import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface TypeOf extends ActionBase {
  action: ActionType.TypeOf;
}

export const $TypeOf: RecordIoType<TypeOf> = new RecordType<TypeOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.TypeOf as ActionType.TypeOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
