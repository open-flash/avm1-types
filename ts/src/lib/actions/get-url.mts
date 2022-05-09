import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

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
