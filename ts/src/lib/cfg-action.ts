import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { TaggedUnionType } from "kryo/types/tagged-union";
import { $Action as $RawAction, Action as RawAction } from "./action";
import { ActionType } from "./action-type";
import { DefineFunction as RawDefineFunction } from "./actions/define-function";
import { DefineFunction2 as RawDefineFunction2 } from "./actions/define-function2";
import { If as RawIf } from "./actions/if";
import { Jump as RawJump } from "./actions/jump";
import { Try as RawTry } from "./actions/try";
import { With as RawWith } from "./actions/with";
import { $CfgDefineFunction, CfgDefineFunction } from "./cfg-actions/cfg-define-function";
import { $CfgDefineFunction2, CfgDefineFunction2 } from "./cfg-actions/cfg-define-function2";
import { $CfgIf, CfgIf } from "./cfg-actions/cfg-if";
import { $CfgJump, CfgJump } from "./cfg-actions/cfg-jump";
import { $CfgTry, CfgTry } from "./cfg-actions/cfg-try";
import { $CfgWith, CfgWith } from "./cfg-actions/cfg-with";

export type CfgAction = Exclude<RawAction, RawDefineFunction | RawDefineFunction2 | RawIf | RawJump | RawTry | RawWith>
  | CfgDefineFunction
  | CfgDefineFunction2
  | CfgIf
  | CfgJump
  | CfgTry
  | CfgWith;

export const $CfgAction: TaggedUnionType<CfgAction> = new TaggedUnionType<CfgAction>(() => ({
  variants: $RawAction.variants.map(($rawAction: DocumentType<RawAction>): DocumentIoType<CfgAction> => {
    const $rawActionType: LiteralType<ActionType> = $rawAction.properties.action.type as any;
    switch ($rawActionType.value) {
      case ActionType.DefineFunction:
        return $CfgDefineFunction;
      case ActionType.DefineFunction2:
        return $CfgDefineFunction2;
      case ActionType.If:
        return $CfgIf;
      case ActionType.Jump:
        return $CfgJump;
      case ActionType.Try:
        return $CfgTry;
      case ActionType.With:
        return $CfgWith;
      default:
        return $rawAction as DocumentIoType<CfgAction>;
    }
  }),
  tag: "action",
}));
