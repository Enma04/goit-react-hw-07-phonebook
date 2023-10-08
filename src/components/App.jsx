import React from 'react';
import css from './App.module.css';
import {ContactForm} from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}
