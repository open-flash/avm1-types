import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

export interface InvalidActionError {
  message: string;
}

export const $InvalidActionError: RecordIoType<InvalidActionError> = new RecordType<InvalidActionError>({
  properties: {
    message: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
