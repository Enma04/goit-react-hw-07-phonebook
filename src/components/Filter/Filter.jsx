import css from '../App.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ handleFilter }) => {
  let filterValue = useSelector(state => state.filter);
  let dispatch = useDispatch();

  //console.log("Filtro: ", filterValue);

  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
    //handleFilter(e.target.value);
  }

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

Filter.propTypes = {
  handleFilter: PropTypes.func,
};
