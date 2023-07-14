import OptionButton, { Option } from "./components/OptionButton";
import { useReducer } from "react";
import { initialGameState, reducer } from "./reducer";

export interface iScene {
  title: string;
  description: string;
  options: Option[];
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialGameState);
  const scene: iScene = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci, ratione necessitatibus iusto rem qui est nihil velit sapiente recusandae. Harum atque fugiat quae rerum labore quidem praesentium magni molestiae.",
    options: [
      {
        name: "good option",
        text: "option 1",
        goTo: "Destination 1",
        trigger: { type: "LEVELUP" },
      },
      {
        preReqs: [{ checkType: "level", value: 10, operator: "<=" }],
        name: "bad option",
        text: "option 2",
        goTo: "Destination 2",
        trigger: { type: "DAMAGE", payload: 10 },
      },
    ],
  };

  return (
    <>
      <h1>{scene.title}</h1>
      <p>{scene.description}</p>
      {scene.options.map((option) => (
        <OptionButton
          key={option.name}
          option={option}
          dispatch={dispatch}
        ></OptionButton>
      ))}

      <div className='playerCard'>
        <p>
          {state.name}
          <br />
          {state.health}
        </p>
      </div>
    </>
  );
}

export default App;
