import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { TaggedUnionType } from "kryo/types/tagged-union";
import { $Action as $RawAction, Action as RawAction } from "./action";
import { ActionType } from "./action-type";
import { DefineFunction as RawDefineFunction } from "./actions/define-function";
import { DefineFunction2 as RawDefineFunction2 } from "./actions/define-function2";
import { End as RawEnd } from "./actions/end";
import { Error as RawError } from "./actions/error";
import { If as RawIf } from "./actions/if";
import { Jump as RawJump } from "./actions/jump";
import { Try as RawTry } from "./actions/try";
import { WaitForFrame as RawWaitForFrame } from "./actions/wait-for-frame";
import { WaitForFrame2 as RawWaitForFrame2 } from "./actions/wait-for-frame2";
import { With as RawWith } from "./actions/with";
import { $CfgDefineFunction, CfgDefineFunction } from "./cfg-actions/cfg-define-function";
import { $CfgDefineFunction2, CfgDefineFunction2 } from "./cfg-actions/cfg-define-function2";

export type CfgAction =
  Exclude<RawAction,
    RawDefineFunction
    | RawDefineFunction2
    | RawEnd
    | RawError
    | RawIf
    | RawJump
    | RawTry
    | RawWaitForFrame
    | RawWaitForFrame2
    | RawWith>
  | CfgDefineFunction
  | CfgDefineFunction2;

export const $CfgAction: TaggedUnionType<CfgAction> = new TaggedUnionType<CfgAction>(() => {
  const variants: DocumentType<CfgAction>[] = [];
  for (const $rawAction of $RawAction.variants) {
    const $rawActionType: LiteralType<ActionType> = $rawAction.properties.action.type as any;
    switch ($rawActionType.value) {
      case ActionType.DefineFunction:
        variants.push($CfgDefineFunction);
        break;
      case ActionType.DefineFunction2:
        variants.push($CfgDefineFunction2);
        break;
      case ActionType.End:
      case ActionType.Error:
      case ActionType.Jump:
      case ActionType.Return:
      case ActionType.Try:
      case ActionType.Throw:
      case ActionType.WaitForFrame:
      case ActionType.WaitForFrame2:
      case ActionType.With:
        // These raw actions have no CFG equivalent.
        break;
      default:
        variants.push($rawAction as DocumentIoType<CfgAction>);
        break;
    }
  }
  return {variants, tag: "action"};
});
