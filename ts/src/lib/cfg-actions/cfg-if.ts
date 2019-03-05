import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgIf extends ActionBase {
  action: ActionType.If;
  target: CfgLabel;
}

export const $CfgIf: DocumentIoType<CfgIf> = new DocumentType<CfgIf>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.If as ActionType.If})},
    target: {type: $CfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
