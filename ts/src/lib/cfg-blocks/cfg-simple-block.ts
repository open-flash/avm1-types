import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgLabel, CfgLabel } from "../cfg-label";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { LiteralType } from "kryo/types/literal";

export interface CfgSimpleBlock {
  readonly type: CfgBlockType.Simple;
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<CfgAction>;
  readonly next: CfgLabel;
}

export const $CfgSimpleBlock: DocumentIoType<CfgSimpleBlock> = new DocumentType<CfgSimpleBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Simple as CfgBlockType.Simple})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    next: {type: $CfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
