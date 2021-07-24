import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

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
