import { GameState } from "../types";

export type Operator = NumberOperator | ArrayOperator;

export type NumberOperator = ">" | "<" | ">=" | "<=";
export type ArrayOperator = "includes" | "does not include";
export type Requirement = levelRequirement | inventoryRequirement; //.. all other requirements

type baseRequirement<T extends keyof GameState> = {
  checkType: T;
  value: GameState[T];
  operator: Operator;
};

type levelRequirement = baseRequirement<"level"> & {
  value: number;
  operator: NumberOperator;
};

type inventoryRequirement = baseRequirement<"inventory"> & {
  value: string[];
  operator: ArrayOperator;
};
