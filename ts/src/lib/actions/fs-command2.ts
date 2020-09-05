import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface FsCommand2 extends ActionBase {
  action: ActionType.FsCommand2;
}

export const $FsCommand2: RecordIoType<FsCommand2> = new RecordType<FsCommand2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.FsCommand2 as ActionType.FsCommand2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
