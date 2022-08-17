import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import PlanetCard from './PlanetCard';

function Table() {
  const { planets } = useContext(AppContext);

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
        {
          planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planet={ planet }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
