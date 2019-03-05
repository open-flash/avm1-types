import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $CatchTarget, CatchTarget } from "../catch-target";
import { $Cfg, Cfg } from "../cfg";

export interface CfgTry extends ActionBase {
  action: ActionType.Try;
  try: Cfg;
  catch?: Cfg;
  catchTarget: CatchTarget;
  finally?: Cfg;
}

export const $CfgTry: DocumentIoType<CfgTry> = new DocumentType<CfgTry>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    try: {type: $Cfg},
    catch: {type: $Cfg, optional: true},
    catchTarget: {type: $CatchTarget},
    finally: {type: $Cfg, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
