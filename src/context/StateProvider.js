import { useContext, useReducer, createContext } from "react";

//creating data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>;
};

//this is the hook which helps us to pull the data from the data layer
export const useStateValue = () => useContext(StateContext);
