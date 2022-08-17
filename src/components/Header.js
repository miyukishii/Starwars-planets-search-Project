import React from 'react';
import starwars from '../img/starwars.png';

function Header() {
  return (
    <header>
      <h1>
        <img
          src={ starwars }
          alt="StarWars"
        />
      </h1>
    </header>
  );
}

export default Header;
