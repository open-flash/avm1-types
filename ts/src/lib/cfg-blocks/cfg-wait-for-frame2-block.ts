import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, $NullableCfgLabel, CfgLabel, NullableCfgLabel } from "../cfg-label";

export interface CfgWaitForFrame2Block {
  readonly type: CfgBlockType.WaitForFrame2;
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<CfgAction>;
  readonly ifLoaded: NullableCfgLabel;
  readonly ifNotLoaded: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $CfgWaitForFrame2Block: DocumentIoType<CfgWaitForFrame2Block> = new DocumentType<CfgWaitForFrame2Block>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgBlockType.WaitForFrame2 as const,
      }),
    },
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    ifLoaded: {type: $NullableCfgLabel},
    ifNotLoaded: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
