import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum PushValueType {
  Boolean,
  Constant,
  Float32,
  Float64,
  Null,
  Register,
  Sint32,
  String,
  Undefined,
}

export const $PushValueType: TsEnumType<PushValueType> = new TsEnumType<PushValueType>({
  enum: PushValueType,
  changeCase: CaseStyle.KebabCase,
});
