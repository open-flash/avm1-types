import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { UintSize } from "semantic-types";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, $NullableCfgLabel, CfgLabel, NullableCfgLabel } from "../cfg-label";

export interface CfgWaitForFrameBlock {
  type: CfgBlockType.WaitForFrame;
  label: CfgLabel;
  actions: CfgAction[];
  frame: UintSize;
  ifLoaded: NullableCfgLabel;
  ifNotLoaded: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $CfgWaitForFrameBlock: DocumentIoType<CfgWaitForFrameBlock> = new DocumentType<CfgWaitForFrameBlock>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgBlockType.WaitForFrame as const,
      }),
    },
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    frame: {type: new IntegerType()},
    ifLoaded: {type: $NullableCfgLabel},
    ifNotLoaded: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
