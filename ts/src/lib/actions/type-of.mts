import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface TypeOf extends ActionBase {
  action: ActionType.TypeOf;
}

export const $TypeOf: RecordIoType<TypeOf> = new RecordType<TypeOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.TypeOf as ActionType.TypeOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
