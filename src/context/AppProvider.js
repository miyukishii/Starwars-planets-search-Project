import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      //   console.log(results);
      const data = results
        .filter((planet) => delete planet.residents);
      //   console.log(data);
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        planets,
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
