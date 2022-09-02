import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const {
    filterByName,
    inputs,
    planets,
    filterByNumericValues,
    columnFilter,
    setFilterByName,
    setFilterByNumericValues,
    setInputs,
    setColumnFilter,
    setPlanetsFiltered } = useContext(AppContext);

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
    setColumnFilter(columnFilter.filter((options) => options !== inputs.column));
    setInputs({
      column: columnFilter[0],
      comparison: 'maior que',
      value: '0',
    });
  };

  const handleDeleteFilter = (filter) => {
    setColumnFilter([...columnFilter, filter.column]);
    setFilterByNumericValues(filterByNumericValues
      .filter((filterOption) => filterOption.column !== filter.column));
    setPlanetsFiltered(planets);
  };

  const handleRemove = () => {
    setColumnFilter(['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water']);
    setFilterByNumericValues([]);
    setPlanetsFiltered([]);
  };

  const { name } = filterByName;
  const { column, comparison, value } = inputs;
  return (
    <section className="planet-filter">
      <label htmlFor="planet-input">
        Search for a planet:
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
            {columnFilter.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))}
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
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ handleRemove }
        >
          Remove filters
        </button>

      </form>
      <div className="filters-container">
        {
          filterByNumericValues.map((filterOption) => (
            <div
              className="filter-option"
              data-testid="filter"
              key={ filterOption.column }
            >
              <p>{filterOption.column}</p>
              <p>{filterOption.comparison}</p>
              <p>{filterOption.value}</p>
              <button
                type="button"
                onClick={ () => {
                  handleDeleteFilter(filterOption);
                } }
              >
                <i className="gg-trash" />
              </button>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Filter;
