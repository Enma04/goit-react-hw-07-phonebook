import { createStore } from "redux";

// El valor inicial del estado de Redux para el reducer raíz,
// si no se le pasa el parámetro preloadedState.
const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

// Por ahora, utilizamos un reduser que
// sólo devuelve el estado recibido.
const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);