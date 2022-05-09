import { TaggedUnionType } from "kryo/tagged-union";

import * as catchTargets from "./catch-targets/index.mjs";

export type CatchTarget = catchTargets.Register | catchTargets.Variable;

export const $CatchTarget: TaggedUnionType<CatchTarget> = new TaggedUnionType<CatchTarget>({
  variants: [
    catchTargets.$Register,
    catchTargets.$Variable,
  ],
  tag: "type",
});
