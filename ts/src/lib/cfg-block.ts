import { TaggedUnionType } from "kryo/types/tagged-union";
import { $CfgErrorBlock, CfgErrorBlock } from "./cfg-blocks/cfg-error-block";
import { $CfgReturnBlock, CfgReturnBlock } from "./cfg-blocks/cfg-return-block";
import { $CfgSimpleBlock, CfgSimpleBlock } from "./cfg-blocks/cfg-simple-block";
import { $CfgThrowBlock, CfgThrowBlock } from "./cfg-blocks/cfg-throw-block";
import { $CfgTryBlock, CfgTryBlock } from "./cfg-blocks/cfg-try-block";
import { $CfgWithBlock, CfgWithBlock } from "./cfg-blocks/cfg-with-block";

export type CfgBlock =
  CfgErrorBlock
  | CfgReturnBlock
  | CfgSimpleBlock
  | CfgThrowBlock
  | CfgTryBlock
  | CfgWithBlock;

export const $CfgBlock: TaggedUnionType<CfgBlock> = new TaggedUnionType<CfgBlock>(() => ({
  variants: [
    $CfgErrorBlock,
    $CfgReturnBlock,
    $CfgSimpleBlock,
    $CfgThrowBlock,
    $CfgTryBlock,
    $CfgWithBlock,
  ],
  tag: "type",
}));
