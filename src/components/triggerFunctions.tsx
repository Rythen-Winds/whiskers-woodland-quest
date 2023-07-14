// TODO: Define trigger functions
export const triggerFunctions = {
  function1: () => {
    // Perform actions for function1
    console.log("Calling function1");
  },
  function2: () => {
    // Perform actions for function2
    console.log("Calling function2");
  },
  none: () => {},
  // Add more functions as needed
};

export type TriggerFunctionName = keyof typeof triggerFunctions;