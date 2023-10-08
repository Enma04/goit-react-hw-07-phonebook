import React from "react";
import css from '../App.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import Swal from "sweetalert2";

export const ContactsList = ({ oldContacts, handleDelete }) => {
  let filtro = useSelector(state => state.filter.value);
  let list = useSelector(state => state.contacts.list);
  let contacts = [];
  let dispatch = useDispatch();

  if( filtro !== '' ) {
    contacts = list.filter(item => item.name.toLowerCase()
                   .includes(filtro.toLowerCase()));
  }
  else {
    contacts = list;
  }

  //console.log("contacts: ", contacts);
  //console.log("Filtro: ", filtro);

  const onDelete = (id, name) => {
    dispatch( deleteContact(id) );
    Swal.fire(`${name} eliminado!`);
  }

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

ContactsList.propTypes = {
  handleDelete: PropTypes.func,
  contacts: PropTypes.array,
};