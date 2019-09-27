import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CatchTarget, CatchTarget } from "../catch-target";
import { $Cfg, Cfg } from "../cfg";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgTryBlock {
  type: CfgBlockType.Try;
  label: CfgLabel;
  actions: CfgAction[];
  try: Cfg;
  catch?: Cfg;
  catchTarget: CatchTarget;
  finally?: Cfg;
}

export const $CfgTryBlock: DocumentIoType<CfgTryBlock> = new DocumentType<CfgTryBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Try as CfgBlockType.Try})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    try: {type: $Cfg},
    catch: {type: $Cfg, optional: true},
    catchTarget: {type: $CatchTarget},
    finally: {type: $Cfg, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
