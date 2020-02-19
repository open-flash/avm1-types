import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CatchTarget, CatchTarget } from "../catch-target";
import { $Cfg, Cfg } from "./cfg";

export interface CatchBlock {
  target: CatchTarget;
  body: Cfg;
}

export const $CatchBlock: DocumentIoType<CatchBlock> = new DocumentType<CatchBlock>(() => ({
  properties: {
    target: {type: $CatchTarget},
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
