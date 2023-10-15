import React from "react";
import css from '../App.module.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import Swal from "sweetalert2";

export const ContactsList = () => {
  //-----------------------------------------
  //--------------- VARIABLES
  let filtro = useSelector(state => state.contacts.filter);
  let list = useSelector(state => state.contacts.contacts);
  let contacts = list;
  let dispatch = useDispatch();

  if( filtro !== '' ) {
    contacts = list.filter(item => item.name.toLowerCase()
                   .includes(filtro.toLowerCase()));
  }

  //-----------------------------------------
  //--------------- METHODS
  const onDelete = (id, name) => {
    dispatch( deleteContact(id) );
    Swal.fire(`${name} eliminado!`);
  }

  //-----------------------------------------
  //--------------- COMPONENT
  return(
    <ul className={css.contactList}>
      {contacts.length !== 0 &&
        contacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            {contact.name}: {contact.number}
            <button onClick={() => onDelete(contact.id, contact.name)} >Delete</button>
          </li>
        ))}
    </ul>
  );
}
