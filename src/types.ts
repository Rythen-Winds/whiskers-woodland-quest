export type GameState = {
  name: string;
  health: number;
  experience: number;
  level: number;
  inventory: Item[];
};

type Item = {
  id: string;
  name: string;
  quantity: number;
};

type DamagePayload = {
  caster: Actor;
  target: Actor;
};

type Actor = {};
