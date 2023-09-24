//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    
  }
});



/* const rootReducer = (state = initialState, action) => {
  return state;
};

// Crear una extensión del store para añadir las herramientas de desarrollador.
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);*/
