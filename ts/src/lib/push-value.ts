import { TaggedUnionType } from "kryo/tagged-union";

import * as values from "./push-values/index.js";

export type PushValue =
  values.Boolean
  | values.String
  | values.Constant
  | values.Float32
  | values.Float64
  | values.Sint32
  | values.Null
  | values.Register
  | values.Undefined;

export const $PushValue: TaggedUnionType<PushValue> = new TaggedUnionType<PushValue>(() => ({
  variants: [
    values.$Boolean,
    values.$String,
    values.$Constant,
    values.$Float32,
    values.$Float64,
    values.$Sint32,
    values.$Null,
    values.$Register,
    values.$Undefined,
  ],
  tag: "type",
}));
