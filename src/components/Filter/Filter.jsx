import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className="filter">
      <span className="filter__icon" aria-hidden="true">
        ⌕
      </span>
      <span className="visually-hidden">Пошук контактів за ім’ям</span>
      <input
        className="filter__input"
        type="search"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Знайти контакт..."
      />
    </label>
  );
};
