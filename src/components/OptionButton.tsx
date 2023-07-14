import { Action } from "../reducer";
import {
  ArrayOperator,
  NumberOperator,
  Operator,
  Requirement,
} from "../types/OptionRequirement";

export interface Option {
  name: string;
  text: string;
  goTo: string;
  trigger: Action;
  preReqs?: Requirement[];
}

function isMathOperator(operator: Operator): operator is NumberOperator {
  return [">", "<", ">=", "<="].includes(operator);
}

function isArrayOperator(operator: Operator): operator is ArrayOperator {
  return ["includes", "does not include"].includes(operator);
}

function checkMath(requirement: Requirement): boolean {
  const playerValue = true;
  return playerValue;
}

function checkRequirement(requirement: Requirement) {
  if (isMathOperator(requirement.operator)) {
    checkMath(requirement);
  } else if (isArrayOperator(requirement.operator)) {
    isArrayOperator(requirement.operator);
  }
}

const OptionButton = ({
  option,
  dispatch,
}: {
  option: Option;
  dispatch: React.Dispatch<Action>;
}) => {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    dispatch(option.trigger);
  }
  return (
    <button key={option.name} onClick={handleClick} disabled={false}>
      {option.text}
    </button>
  );
};

export default OptionButton;
