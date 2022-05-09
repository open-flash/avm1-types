import { TaggedUnionType } from "kryo/tagged-union";

import { $Error, Error } from "./error.mjs";
import { $If, If } from "./if.mjs";
import { $Return, Return } from "./return.mjs";
import { $Simple, Simple } from "./simple.mjs";
import { $Throw, Throw } from "./throw.mjs";
import { $Try, Try } from "./try.mjs";
import { $WaitForFrame, WaitForFrame } from "./wait-for-frame.mjs";
import { $WaitForFrame2, WaitForFrame2 } from "./wait-for-frame2.mjs";
import { $With, With } from "./with.mjs";

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
