import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import PlanetCard from './PlanetCard';

function Table() {
  const { planets, filterByName } = useContext(AppContext);
  const { name } = filterByName;

  return (
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
        { name.length !== 0
          ? (
            planets.filter((planet) => (planet
              .name).toLowerCase().search(name.toLowerCase()) !== Number('-1'))
              .map((planet) => (
                <PlanetCard
                  key={ planet.name }
                  planet={ planet }
                />
              ))
          )
          : planets.map((planet) => (
            <PlanetCard
              key={ planet.url }
              planet={ planet }
            />
          ))}
      </tbody>
    </table>
  );
}

export default Table;
