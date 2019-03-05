import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgJump extends ActionBase {
  action: ActionType.Jump;
  target: CfgLabel;
}

export const $CfgJump: DocumentIoType<CfgJump> = new DocumentType<CfgJump>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Jump as ActionType.Jump})},
    target: {type: $CfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
