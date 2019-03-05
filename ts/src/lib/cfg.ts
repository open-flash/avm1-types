import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Block, Block } from "./cfg-block";

export interface Cfg {
  readonly blocks: ReadonlyArray<Block>;
}

export const $Cfg: DocumentIoType<Cfg> = new DocumentType<Cfg>(() => ({
  properties: {
    blocks: {type: new ArrayType({itemType: $Block, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
