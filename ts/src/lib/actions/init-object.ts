import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface InitObject extends ActionBase {
  action: ActionType.InitObject;
}

export const $InitObject: RecordIoType<InitObject> = new RecordType<InitObject>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InitObject as ActionType.InitObject})},
  },
  changeCase: CaseStyle.SnakeCase,
});
