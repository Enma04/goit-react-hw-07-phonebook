import { setFilter } from 'redux/contactsSlice';
import css from '../App.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  //-----------------------------------------
  //--------------- VARIABLES
  let dispatch = useDispatch();

  //-----------------------------------------
  //--------------- METHODS
  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  }

  //-----------------------------------------
  //--------------- COMPONENT
  return (
    <>
      <h3 className={css.contactsH3}>Contacts</h3>
      <span className={css.filterText}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        className={css.inputFilter}
        onChange={(e) => changeFilter(e)}
      />
    </>
  );
}
