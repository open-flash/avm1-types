import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface MbStringExtract extends ActionBase {
  action: ActionType.MbStringExtract;
}

export const $MbStringExtract: DocumentIoType<MbStringExtract> = new DocumentType<MbStringExtract>({
  properties: {
    action: {
      type: new LiteralType({
        type: $ActionType,
        value: ActionType.MbStringExtract as ActionType.MbStringExtract,
      }),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
