import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $CatchTarget, CatchTarget } from "../catch-target";

export interface CatchBlock {
  target: CatchTarget;
  size: Uint16;
}

export const $CatchBlock: DocumentIoType<CatchBlock> = new DocumentType<CatchBlock>(() => ({
  properties: {
    target: {type: $CatchTarget},
    size: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
