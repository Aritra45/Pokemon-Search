import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const getPokemonId = (url) => url.split('/')[url.split('/').length - 2];

  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
