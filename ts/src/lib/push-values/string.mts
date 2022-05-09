import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { $PushValueType, PushValueType } from "../push-value-type.mjs";

export interface String {
  type: PushValueType.String;
  value: string;
}

export const $String: RecordIoType<String> = new RecordType<String>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.String as PushValueType.String})},
    value: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
