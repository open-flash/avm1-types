import { TaggedUnionType } from "kryo/lib/tagged-union.js";

import * as catchTargets from "./catch-targets/index.js";

export type CatchTarget = catchTargets.Register | catchTargets.Variable;

export const $CatchTarget: TaggedUnionType<CatchTarget> = new TaggedUnionType<CatchTarget>({
  variants: [
    catchTargets.$Register,
    catchTargets.$Variable,
  ],
  tag: "type",
});
