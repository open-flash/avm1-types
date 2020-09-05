import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum CatchTargetType {
  Register,
  Variable,
}

export const $CatchTargetType: TsEnumType<CatchTargetType> = new TsEnumType<CatchTargetType>({
  enum: CatchTargetType,
  changeCase: CaseStyle.KebabCase,
});
