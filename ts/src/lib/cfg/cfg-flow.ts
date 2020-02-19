import { TaggedUnionType } from "kryo/types/tagged-union";
import { $Error, Error } from "./error";
import { $If, If } from "./if";
import { $Return, Return } from "./return";
import { $Simple, Simple } from "./simple";
import { $Throw, Throw } from "./throw";
import { $Try, Try } from "./try";
import { $WaitForFrame, WaitForFrame } from "./wait-for-frame";
import { $WaitForFrame2, WaitForFrame2 } from "./wait-for-frame2";
import { $With, With } from "./with";

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
