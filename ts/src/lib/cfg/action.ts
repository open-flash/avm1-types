import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { TaggedUnionType } from "kryo/types/tagged-union";
import { ActionType } from "../action-type";
import { $Action as $RawAction, Action as RawAction } from "../raw/action";
import { DefineFunction as RawDefineFunction } from "../raw/actions/define-function";
import { DefineFunction2 as RawDefineFunction2 } from "../raw/actions/define-function2";
import { End as RawEnd } from "../raw/actions/end";
import { Error as RawError } from "../raw/actions/error";
import { If as RawIf } from "../raw/actions/if";
import { Jump as RawJump } from "../raw/actions/jump";
import { Return as RawReturn } from "../raw/actions/return";
import { Throw as RawThrow } from "../raw/actions/throw";
import { Try as RawTry } from "../raw/actions/try";
import { WaitForFrame as RawWaitForFrame } from "../raw/actions/wait-for-frame";
import { WaitForFrame2 as RawWaitForFrame2 } from "../raw/actions/wait-for-frame2";
import { With as RawWith } from "../raw/actions/with";
import { $DefineFunction, DefineFunction } from "./actions/define-function";
import { $DefineFunction2, DefineFunction2 } from "./actions/define-function2";

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
  const variants: DocumentType<Action>[] = [];
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
        variants.push($rawAction as DocumentIoType<Action>);
        break;
    }
  }
  return {variants, tag: "action"};
});
