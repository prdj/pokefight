import React, {useState, useEffect} from 'react';
import PokemonDisplay from './components/pokemonDisplay';
import axios from 'axios';
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  const [pokemons, getPokemons] = useState('');
  
  const url = 'http://localhost:4000/pokemon';

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
    <Routes>
      <Route path="/" element={<PokemonDisplay pokemons={pokemons}/>}/>
      {/* <Route path="/:id" component={<SinglePokemon pokemons={pokemons}/>}/>
      <Route path="/:id/:info" component={<PokemonInfo pokemons={pokemons}/>}/> */}
    </Routes>
  );
}

export default App;
