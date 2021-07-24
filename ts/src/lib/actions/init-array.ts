import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface InitArray extends ActionBase {
  action: ActionType.InitArray;
}

export const $InitArray: RecordIoType<InitArray> = new RecordType<InitArray>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InitArray as ActionType.InitArray})},
  },
  changeCase: CaseStyle.SnakeCase,
});
