import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    //Reducer add donde el payload es mas que solo texto
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContact(state, action) {
      state.contacts = [ ...state.contacts.filter( item => item.id !== action.payload )];
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
