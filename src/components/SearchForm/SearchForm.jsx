import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './searchForm.module.css';

function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleChange = ev => {
    setSearchQuery(ev.currentTarget.value.toLowerCase());
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        onChange={handleChange}
        value={searchQuery}
        type="text"
        autoComplete="off"
        placeholder="Введіть назву фільму..."
        autoFocus
      />
      <button className={s.btn} type="submit">
        Шукати
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
