import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgAction, CfgAction } from "./cfg-action";
import { $CfgLabel, CfgLabel } from "./cfg-label";

export interface CfgBlock {
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<CfgAction>;
  readonly next?: CfgLabel;
}

export const $CfgBlock: DocumentIoType<CfgBlock> = new DocumentType<CfgBlock>(() => ({
  properties: {
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    next: {type: $CfgLabel, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
