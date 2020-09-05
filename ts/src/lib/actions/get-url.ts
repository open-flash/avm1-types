import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GetUrl extends ActionBase {
  action: ActionType.GetUrl;
  url: string;
  target: string;
}

export const $GetUrl: RecordIoType<GetUrl> = new RecordType<GetUrl>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetUrl as ActionType.GetUrl})},
    url: {type: new Ucs2StringType({maxLength: Infinity})},
    target: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
