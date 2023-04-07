import { createContext, useReducer } from "react";

export const HikesContext = createContext();

export const hikesReducer = (state, action) => {
  switch (action.type) {
    case "SET_HIKES":
      return {
        hikes: action.payload,
      };
    case "CREATE_HIKE":
      return {
        hikes: [action.payload, ...state.hikes],
      };
    default:
      return state;
  }
};

// children represents the components(s) that our context provider wraps. i this case, we wrapped the App component. All of it's children will also have access
export const HikesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hikesReducer, {
    hikes: null,
  });
  // the dispatch function takes an object as an argument and it should have a type property that describes in words the state change that we want to make, the second property is called payload and it contains the data we need to make the change. The argument object is called an action
  // when we call the dispatch function the reducer function is invoked. It passes the action into the reducer functionso that it can update state with the data
  // dispatch({ type: "SET_HIKES", payload: [{}, {}] });

  return (
    <HikesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HikesContext.Provider>
  );
};
