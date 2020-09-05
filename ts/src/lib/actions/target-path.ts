import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface TargetPath extends ActionBase {
  action: ActionType.TargetPath;
}

export const $TargetPath: RecordIoType<TargetPath> = new RecordType<TargetPath>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.TargetPath as ActionType.TargetPath})},
  },
  changeCase: CaseStyle.SnakeCase,
});
