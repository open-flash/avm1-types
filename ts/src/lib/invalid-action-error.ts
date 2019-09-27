import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Ucs2StringType } from "kryo/types/ucs2-string";

export interface InvalidActionError {
  message: string;
}

export const $InvalidActionError: DocumentIoType<InvalidActionError> = new DocumentType<InvalidActionError>({
  properties: {
    message: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
