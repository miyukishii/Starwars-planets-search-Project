import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const {
    filterByName,
    setFilterByName,
    setFilterByNumericValues,
    inputs,
    setInputs,
    filterByNumericValues } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterByName({ [name]: value });
  };

  const handleFilter = ({ target }) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, inputs]);
    setInputs({
      column: 'population',
      comparison: 'maior que',
      value: '0',
    });
  };

  const { name } = filterByName;
  const { column, comparison, value } = inputs;
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
      <form>
        <label htmlFor="column-filter">
          Column
          <select
            data-testid="column-filter"
            id="column-filter"
            name="column"
            value={ column }
            onChange={ handleFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Comparison
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            name="comparison"
            value={ comparison }
            onChange={ handleFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value-filter">
          Value
          <input
            type="number"
            data-testid="value-filter"
            id="value-filter"
            name="value"
            value={ value }
            onChange={ handleFilter }
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filter
        </button>
      </form>
    </section>
  );
}

export default Filter;
