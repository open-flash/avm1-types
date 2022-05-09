import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface InstanceOf extends ActionBase {
  action: ActionType.InstanceOf;
}

export const $InstanceOf: RecordIoType<InstanceOf> = new RecordType<InstanceOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InstanceOf as ActionType.InstanceOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
