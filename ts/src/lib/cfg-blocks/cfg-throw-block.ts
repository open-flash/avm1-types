import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgLabel, CfgLabel } from "../cfg-label";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { LiteralType } from "kryo/types/literal";

export interface CfgThrowBlock {
  readonly type: CfgBlockType.Throw;
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<CfgAction>;
}

export const $CfgThrowBlock: DocumentIoType<CfgThrowBlock> = new DocumentType<CfgThrowBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Throw as CfgBlockType.Throw})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
