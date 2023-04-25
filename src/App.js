import React, {useState, useEffect} from 'react';
import PokemonDisplay from './components/pokemonDisplay';
import axios from 'axios';

import './App.css';

function App() {
  const [pokemons, getPokemons] = useState('');
  
  const url = 'http://localhost:8008/pokemon';

  useEffect(() => {
    getAllPokemons();
  }, [])

  const getAllPokemons = () => {
    axios.get(`${url}`)
    .then((response) => {
      const allPokemons = response.data;
      // add our data to state
      getPokemons(allPokemons)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  return (
    <PokemonDisplay pokemons={pokemons}/>
  );
}

export default App;
