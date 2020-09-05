import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface InstanceOf extends ActionBase {
  action: ActionType.InstanceOf;
}

export const $InstanceOf: RecordIoType<InstanceOf> = new RecordType<InstanceOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InstanceOf as ActionType.InstanceOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
