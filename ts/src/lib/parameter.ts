import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint8 } from "semantic-types";

// TODO(demurgos): rename to RegisterParameter or make register optional (undefined if 0)
export interface Parameter {
  register: Uint8;
  name: string;
}

export const $Parameter: RecordIoType<Parameter> = new RecordType<Parameter>({
  properties: {
    register: {type: $Uint8},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
