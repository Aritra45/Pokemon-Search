import React, { useState, useEffect } from 'react';
import { getPokemons } from './services/pokemonService';
import PokemonCard from './components/PokemonCard';
import './App.css'; // Import the CSS file
import { FaSearch, FaTimes } from 'react-icons/fa'; 

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemons();
      setPokemons(result);
    };

    fetchData();
  }, []);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-icon" onClick={handleClearSearch}>
            <FaTimes />
          </button>
        )}
      </div>
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
