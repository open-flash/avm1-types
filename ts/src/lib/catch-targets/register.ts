import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint8 } from "semantic-types";
import { $CatchTargetType, CatchTargetType } from "./_type.js";

export interface Register {
  type: CatchTargetType.Register;
  target: Uint8;
}

export const $Register: RecordIoType<Register> = new RecordType<Register>({
  properties: {
    type: {
      type: new LiteralType({
        type: $CatchTargetType,
        value: CatchTargetType.Register as CatchTargetType.Register,
      }),
    },
    target: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
