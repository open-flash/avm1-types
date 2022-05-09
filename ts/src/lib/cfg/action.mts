import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { TaggedUnionType } from "kryo/tagged-union";

import { ActionType } from "../action-type.mjs";
import { $Action as $RawAction, Action as RawAction } from "../raw/action.mjs";
import { DefineFunction as RawDefineFunction } from "../raw/actions/define-function.mjs";
import { DefineFunction2 as RawDefineFunction2 } from "../raw/actions/define-function2.mjs";
import { End as RawEnd } from "../raw/actions/end.mjs";
import { Error as RawError } from "../raw/actions/error.mjs";
import { If as RawIf } from "../raw/actions/if.mjs";
import { Jump as RawJump } from "../raw/actions/jump.mjs";
import { Return as RawReturn } from "../raw/actions/return.mjs";
import { Throw as RawThrow } from "../raw/actions/throw.mjs";
import { Try as RawTry } from "../raw/actions/try.mjs";
import { WaitForFrame as RawWaitForFrame } from "../raw/actions/wait-for-frame.mjs";
import { WaitForFrame2 as RawWaitForFrame2 } from "../raw/actions/wait-for-frame2.mjs";
import { With as RawWith } from "../raw/actions/with.mjs";
import { $DefineFunction, DefineFunction } from "./actions/define-function.mjs";
import { $DefineFunction2, DefineFunction2 } from "./actions/define-function2.mjs";

export type Action =
  Exclude<RawAction,
    RawDefineFunction
    | RawDefineFunction2
    | RawEnd
    | RawError
    | RawIf
    | RawJump
    | RawReturn
    | RawThrow
    | RawTry
    | RawWaitForFrame
    | RawWaitForFrame2
    | RawWith>
  | DefineFunction
  | DefineFunction2;

export const $Action: TaggedUnionType<Action> = new TaggedUnionType<Action>(() => {
  const variants: RecordType<Action>[] = [];
  for (const $rawAction of $RawAction.variants) {
    const $rawActionType: LiteralType<ActionType> = $rawAction.properties.action.type as any;
    switch ($rawActionType.value) {
      case ActionType.DefineFunction:
        variants.push($DefineFunction);
        break;
      case ActionType.DefineFunction2:
        variants.push($DefineFunction2);
        break;
      case ActionType.End:
      case ActionType.Error:
      case ActionType.If:
      case ActionType.Jump:
      case ActionType.Return:
      case ActionType.Throw:
      case ActionType.Try:
      case ActionType.WaitForFrame:
      case ActionType.WaitForFrame2:
      case ActionType.With:
        // These raw actions have no CFG equivalent.
        break;
      default:
        variants.push($rawAction as RecordIoType<Action>);
        break;
    }
  }
  return {variants, tag: "action"};
});
