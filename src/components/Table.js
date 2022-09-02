import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { planets,
    filterByName,
    planetsFiltered } = useContext(AppContext);
  const { name } = filterByName;

  const filterPlanets = () => {
    if (name.length !== 0) {
      return planets.filter((planet) => (planet
        .name).toLowerCase().search(name.toLowerCase()) !== Number('-1'));
    } if (planetsFiltered.length !== 0) {
      return planetsFiltered;
    }
    return planets;
  };

  const columnOrderOptions = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  return (
    <div className="div-table">
      <table className="table-planets">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>

          {
            filterPlanets().map((planet, index) => (
              <tr key={ index }>
                {
                  columnOrderOptions.map((column, i) => (
                    <td
                      data-testi="planet-name"
                      key={ i }
                    >
                      {planet[column]}
                    </td>
                  ))
                }
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default Table;
