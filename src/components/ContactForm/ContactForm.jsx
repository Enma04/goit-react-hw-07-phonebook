import React, { useState } from 'react';
import css from '../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

export const ContactForm = () => {
  //-----------------------------------------
  //--------------- VARIABLES
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  let con = useSelector(state => state.contacts.contacts);
  
  //-----------------------------------------
  //--------------- METHODS
  const handleChange = evt => {
    const {name, value} = evt.target;
    if(name === "name") setName(value);
    if(name === "number") setNumber(value);
  };

  const handleReset = e => {
    setName("");
    setNumber("");
  };

  function OnSubmit(evt) {
    evt.preventDefault();
    const id = "id-" + (con.length + 1) + "-" + nanoid(2);

    if (con.map(item => item.name).includes(name)) {
      Swal.fire('El contacto ya existe!');
      return
    }
    else if (con.map(item => item.number).includes(number)) {
      Swal.fire('Este numero ya esta agregado!');
      return
    }

    dispatch(addContact({ id, name, number }));
    handleReset(evt);
  }

  //-----------------------------------------
  //--------------- COMPONENT
  return (
    <form className={css.contactsForm} onSubmit={OnSubmit} >
      <h3 className={css.contactsH3} >Phonebooks</h3>
      <label htmlFor="">
        <span>Name</span>
        <br />
        <input
          type="text"
          name="name"
          className="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
          value={name}
        />
      </label>
      <label htmlFor="">
        <span>Number</span>
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
          value={number}
        />
      </label>
      <button className={css.contactsBtnSubmit} type='submit' >
        Add contact
      </button>
    </form>
  );
}
