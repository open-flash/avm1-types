import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $Cfg, Cfg } from "../cfg";

export interface CfgWith extends ActionBase {
  action: ActionType.With;
  with: Cfg;
}

export const $CfgWith: DocumentIoType<CfgWith> = new DocumentType<CfgWith>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    with: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
