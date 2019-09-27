import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, $NullableCfgLabel, CfgLabel, NullableCfgLabel } from "../cfg-label";

export interface CfgIfBlock {
  type: CfgBlockType.If;
  label: CfgLabel;
  actions: CfgAction[];
  ifTrue: NullableCfgLabel;
  ifFalse: NullableCfgLabel;
}

export const $CfgIfBlock: DocumentIoType<CfgIfBlock> = new DocumentType<CfgIfBlock>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgBlockType.If as const,
      }),
    },
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    ifTrue: {type: $NullableCfgLabel},
    ifFalse: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
