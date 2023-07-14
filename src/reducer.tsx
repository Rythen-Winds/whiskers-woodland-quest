import { GameState } from "./types";

export const initialGameState: GameState = {
  name: "Player",
  health: 100,
  experience: 0,
  level: 1,
  inventory: [],
};
type ACTIONS = {
  LEVELUP: "levelUp";
  DAMAGE: "damage";
  HEAL: "heal";
  GAINEXP: "gainExp";
};
export type ActionType = keyof ACTIONS;

export type Action = {
  type: keyof ACTIONS;
  payload?: number;
};
export const reducer = (state: GameState, action: Action) => {
  switch (action.type) {
    case "LEVELUP":
      return { ...state, level: state.level + 1 };
    case "DAMAGE":
      console.log("DAMAGE", action.payload);
      return damagePlayer(state, action);

    default:
      console.warn("Action not supported " + action.type);
      return state;
  }
};

export function damagePlayer(state: GameState, action: Action): GameState {
  return {
    ...state,
    health: (state.health -= action.payload ? action.payload : 0),
  };
}
