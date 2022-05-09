import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
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
