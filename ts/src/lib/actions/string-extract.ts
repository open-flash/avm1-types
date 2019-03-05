import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface StringExtract extends ActionBase {
  action: ActionType.StringExtract;
}

export const $StringExtract: DocumentIoType<StringExtract> = new DocumentType<StringExtract>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringExtract as ActionType.StringExtract})},
  },
  changeCase: CaseStyle.SnakeCase,
});
