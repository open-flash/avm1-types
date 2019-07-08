import { TaggedUnionType } from "kryo/types/tagged-union";
import { $CfgEndBlock, CfgEndBlock } from "./cfg-blocks/cfg-end-block";
import { $CfgReturnBlock, CfgReturnBlock } from "./cfg-blocks/cfg-return-block";
import { $CfgSimpleBlock, CfgSimpleBlock } from "./cfg-blocks/cfg-simple-block";
import { $CfgThrowBlock, CfgThrowBlock } from "./cfg-blocks/cfg-throw-block";

export type CfgBlock =
  CfgEndBlock
  | CfgReturnBlock
  | CfgSimpleBlock
  | CfgThrowBlock;

export const $CfgBlock: TaggedUnionType<CfgBlock> = new TaggedUnionType<CfgBlock>(() => ({
  variants: [
    $CfgEndBlock,
    $CfgReturnBlock,
    $CfgSimpleBlock,
    $CfgThrowBlock,
  ],
  tag: "type",
}));
