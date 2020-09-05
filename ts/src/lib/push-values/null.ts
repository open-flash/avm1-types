import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $PushValueType, PushValueType } from "../push-value-type.js";

export interface Null {
  type: PushValueType.Null;
}

export const $Null: RecordIoType<Null> = new RecordType<Null>({
  properties: {
    type: {type: new LiteralType({type: $PushValueType, value: PushValueType.Null as PushValueType.Null})},
  },
  changeCase: CaseStyle.SnakeCase,
});
