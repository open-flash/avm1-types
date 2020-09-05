import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

import { $CatchTargetType, CatchTargetType } from "./_type.js";

export interface Variable {
  type: CatchTargetType.Variable;
  target: string;
}

export const $Variable: RecordIoType<Variable> = new RecordType<Variable>({
  properties: {
    type: {
      type: new LiteralType({
        type: $CatchTargetType,
        value: CatchTargetType.Variable as CatchTargetType.Variable,
      }),
    },
    target: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
