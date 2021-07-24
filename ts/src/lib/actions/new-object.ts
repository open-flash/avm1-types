import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface NewObject extends ActionBase {
  action: ActionType.NewObject;
}

export const $NewObject: RecordIoType<NewObject> = new RecordType<NewObject>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NewObject as ActionType.NewObject})},
  },
  changeCase: CaseStyle.SnakeCase,
});
