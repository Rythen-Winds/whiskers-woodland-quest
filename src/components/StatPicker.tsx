import React, { useReducer } from "react";
import "./StatPicker.css";

const baseStatArray = [16, 15, 13, 12, 9, 8];

type statArrayWithUndefined = {
  str: number | undefined;
  dex: number | undefined;
  con: number | undefined;
  int: number | undefined;
  wis: number | undefined;
  cha: number | undefined;
};
type statState = {
  availableStats: number[];
  chosenStats: statArrayWithUndefined;
};
const initialState: statState = {
  availableStats: baseStatArray,
  chosenStats: {
    str: undefined,
    dex: undefined,
    con: undefined,
    int: undefined,
    wis: undefined,
    cha: undefined,
  },
};

type ActionType = {
  type: "SELECT_STAT";
  payload: {
    name: keyof statArrayWithUndefined;
    value: number;
  };
};
type ResetAction = {
  type: "RESET_STATS";
};
const StatPicker = () => {
  const reducer = (state: statState, action: ActionType | ResetAction) => {
    switch (action.type) {
      case "SELECT_STAT":
        const selectedValue = action.payload.value;
        const selectedKey = action.payload.name;
        const previousValue = state.chosenStats[selectedKey];
        console.log(action);

        // Remove the previous value from availableStats
        const updatedAvailableStats = [...state.availableStats];
        if (previousValue) {
          updatedAvailableStats.push(previousValue);
        }

        // Update the state with the selected value and updated availableStats
        return {
          chosenStats: {
            ...state.chosenStats,
            [selectedKey]: selectedValue,
          },
          availableStats: updatedAvailableStats.filter(
            (stat) => stat !== selectedValue
          ),
        };
      case "RESET_STATS":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const areStatsStillAvailable = Object.values(state.chosenStats).some(
    (value) => value === undefined
  );
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: "RESET_STATS" });
  };
  const handleStatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: "SELECT_STAT",
      payload: {
        name: name as keyof statArrayWithUndefined,
        value: Number(value),
      },
    });
    console.log(state.chosenStats);
  };

  return (
    <div className='stats-container'>
      {Object.entries(state.chosenStats).map(([key, value]) => (
        <div className='stat-cell' key={key}>
          <label htmlFor='key'>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </label>
          <div className='score'>{value || ""}</div>
          <select
            name={key}
            id={key}
            value={value || ""}
            onChange={handleStatChange}
          >
            <option value=''>Choose a value</option>
            {state.availableStats.map((stat) => (
              <option key={stat} value={stat} selected={stat === value}>
                {stat}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div style={{ display: "flex" }}>
        Available stats:
        {state.availableStats.map((stat) => (
          <div key={stat} style={{ padding: "2px" }}>
            {stat}
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
      <button type='submit' disabled={areStatsStillAvailable}></button>
    </div>
  );
};

export default StatPicker;
