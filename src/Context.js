import { createContext, useReducer } from "react";

// This context is used to share the state among it's children
// Without having to pass props from all the parents to their respective children
// which would have been very tedious
export const themeContext = createContext();

const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    //Here the context provider takes a prop of value that contains the state object which would be available for all descendants of the ThemeProvider.
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
