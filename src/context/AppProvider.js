import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [order, setOrder] = useState({ column: 'population', sort: '' });
  const [inputs, setInputs] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [columnFilter, setColumnFilter] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      const data = results
        .filter((planet) => delete planet.residents);
      setPlanets(data);
      setPlanetsFiltered(data);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        setPlanetsFiltered(planetsFiltered
          .filter((planet) => planet[column] > Number(value)));
      } else if (comparison === 'menor que') {
        setPlanetsFiltered(planetsFiltered
          .filter((planet) => planet[column] < Number(value)));
      } else {
        setPlanetsFiltered(planetsFiltered.filter((planet) => planet[column] === value));
      }
    });
  }, [filterByNumericValues, columnFilter]);

  return (
    <AppContext.Provider
      value={ {
        order,
        columnFilter,
        filterByName,
        inputs,
        filterByNumericValues,
        planetsFiltered,
        planets,
        setInputs,
        setFilterByName,
        setFilterByNumericValues,
        setPlanets,
        setColumnFilter,
        setPlanetsFiltered,
        setOrder,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
