import { TaggedUnionType } from "kryo/lib/tagged-union.js";
import { $Error, Error } from "./error.js";
import { $If, If } from "./if.js";
import { $Return, Return } from "./return.js";
import { $Simple, Simple } from "./simple.js";
import { $Throw, Throw } from "./throw.js";
import { $Try, Try } from "./try.js";
import { $WaitForFrame, WaitForFrame } from "./wait-for-frame.js";
import { $WaitForFrame2, WaitForFrame2 } from "./wait-for-frame2.js";
import { $With, With } from "./with.js";

export type CfgFlow =
  Error
  | If
  | Return
  | Simple
  | Throw
  | Try
  | WaitForFrame
  | WaitForFrame2
  | With;

export const $CfgFlow: TaggedUnionType<CfgFlow> = new TaggedUnionType<CfgFlow>(() => ({
  variants: [
    $Error,
    $If,
    $Return,
    $Simple,
    $Throw,
    $Try,
    $WaitForFrame,
    $WaitForFrame2,
    $With,
  ],
  tag: "type",
}));
