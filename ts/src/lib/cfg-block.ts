import { TaggedUnionType } from "kryo/types/tagged-union";
import { $CfgErrorBlock, CfgErrorBlock } from "./cfg-blocks/cfg-error-block";
import { $CfgIfBlock, CfgIfBlock } from "./cfg-blocks/cfg-if-block";
import { $CfgReturnBlock, CfgReturnBlock } from "./cfg-blocks/cfg-return-block";
import { $CfgSimpleBlock, CfgSimpleBlock } from "./cfg-blocks/cfg-simple-block";
import { $CfgThrowBlock, CfgThrowBlock } from "./cfg-blocks/cfg-throw-block";
import { $CfgTryBlock, CfgTryBlock } from "./cfg-blocks/cfg-try-block";
import { $CfgWaitForFrameBlock, CfgWaitForFrameBlock } from "./cfg-blocks/cfg-wait-for-frame-block";
import { $CfgWaitForFrame2Block, CfgWaitForFrame2Block } from "./cfg-blocks/cfg-wait-for-frame2-block";
import { $CfgWithBlock, CfgWithBlock } from "./cfg-blocks/cfg-with-block";

export type CfgBlock =
  CfgErrorBlock
  | CfgIfBlock
  | CfgReturnBlock
  | CfgSimpleBlock
  | CfgThrowBlock
  | CfgTryBlock
  | CfgWaitForFrameBlock
  | CfgWaitForFrame2Block
  | CfgWithBlock;

export const $CfgBlock: TaggedUnionType<CfgBlock> = new TaggedUnionType<CfgBlock>(() => ({
  variants: [
    $CfgErrorBlock,
    $CfgIfBlock,
    $CfgReturnBlock,
    $CfgSimpleBlock,
    $CfgThrowBlock,
    $CfgTryBlock,
    $CfgWaitForFrameBlock,
    $CfgWaitForFrame2Block,
    $CfgWithBlock,
  ],
  tag: "type",
}));
