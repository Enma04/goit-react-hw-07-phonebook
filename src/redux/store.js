//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
});



/* const rootReducer = (state = initialState, action) => {
  return state;
};

// Crear una extensión del store para añadir las herramientas de desarrollador.
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);*/
