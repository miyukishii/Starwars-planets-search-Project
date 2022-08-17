import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const { filterByName, setFilterByName } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterByName({ [name]: value });
  };

  const { name } = filterByName;
  return (
    <section className="planet-filter">
      <label htmlFor="planet-input">
        Digite o nome do planeta:
        <input
          data-testid="name-filter"
          type="text"
          id="planet-input"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </section>
  );
}

export default Filter;
