import { createSlice } from '@reduxjs/toolkit';

const initialContacts = JSON.parse( localStorage.getItem("contacts")) !== null ? 
  [ ...JSON.parse( localStorage.getItem("contacts") ) ] : [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: initialContacts,
  },
  reducers: {
    //Reducer add donde el payload es mas que solo texto
    addContact(state, action) {
      state.list = [...state.list, action.payload];
    },

    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
