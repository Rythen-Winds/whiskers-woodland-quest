import { useReducer } from "react";

export type GameState = {
  level: number;
  xp: number;
  maxHP: number;
  currentHP: number;
  inventory: any[];
};

const initialState: GameState = {
  level: 1,
  xp: 0,
  maxHP: 10,
  currentHP: 10,
  inventory: [],
};

type ACTIONS = {
  DAMAGE_PLAYER: "DamagePlayer";
  HEAL_PLAYER: "HealPlayer";
  GAIN_EXP: "gainExp";
  GAIN_ITEM: "gainItem";
};
type ActionType = keyof ACTIONS;

type ActionPayload = any; //todo:make this an actual type
type Action = { type: ActionType; payload: ActionPayload };
const gameStateReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "DAMAGE_PLAYER":
      return {
        ...state,
        currentHP: (state.currentHP -= action.payload ? action.payload : 0),
      };
    case "HEAL_PLAYER":
      return {
        ...state,
        currentHP: (state.currentHP += action.payload ? action.payload : 0),
      };
    case "GAIN_EXP":
      return {
        ...state,
        xp: (state.xp += action.payload ? action.payload : 0),
      };
    case "GAIN_ITEM":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };

    default:
      return state;
  }
};
const useGameState = () => {
  const [gameState, gameStateDispatch] = useReducer(
    gameStateReducer,
    initialState
  );
  return [gameState, gameStateDispatch];
};
export default useGameState;
