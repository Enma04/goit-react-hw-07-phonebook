import { createSlice } from '@reduxjs/toolkit';

const initialContacts = JSON.parse( localStorage.getItem("contacts")) !== null ? 
  [ ...JSON.parse( localStorage.getItem("contacts") ) ] : [];

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: initialContacts,
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
      state.value = action.payload;
    },
  }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
