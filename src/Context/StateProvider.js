// setup data layer
// we need this to track the baskter
import React, { useContext, useReducer, createContext } from "react";

//THIS IS DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};


//This is how we use this in components
export const useStateValue = ()=> useContext(StateContext);