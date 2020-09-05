import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

export interface InvalidActionError {
  message: string;
}

export const $InvalidActionError: RecordIoType<InvalidActionError> = new RecordType<InvalidActionError>({
  properties: {
    message: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
