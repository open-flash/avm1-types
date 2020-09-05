import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetProperty extends ActionBase {
  action: ActionType.SetProperty;
}

export const $SetProperty: RecordIoType<SetProperty> = new RecordType<SetProperty>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetProperty as ActionType.SetProperty})},
  },
  changeCase: CaseStyle.SnakeCase,
});
