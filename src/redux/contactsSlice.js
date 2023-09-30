import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = JSON.parse( localStorage.getItem("contacts")) !== null ? 
  [ ...JSON.parse( localStorage.getItem("contacts") ) ] : [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state = [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
