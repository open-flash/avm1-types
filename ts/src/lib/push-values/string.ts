import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { $PushValueType, PushValueType } from "../push-value-type.js";

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
