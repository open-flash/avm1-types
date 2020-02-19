import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CatchBlock, CatchBlock } from "./catch-block";
import { $Cfg, Cfg } from "./cfg";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";

export interface Try {
  type: CfgFlowType.Try;
  try: Cfg;
  catch?: CatchBlock;
  finally?: Cfg;
}

export const $Try: DocumentIoType<Try> = new DocumentType<Try>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Try as CfgFlowType.Try})},
    try: {type: $Cfg},
    catch: {type: $CatchBlock, optional: true},
    finally: {type: $Cfg, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
