import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface FsCommand2 extends ActionBase {
  action: ActionType.FsCommand2;
}

export const $FsCommand2: RecordIoType<FsCommand2> = new RecordType<FsCommand2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.FsCommand2 as ActionType.FsCommand2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
