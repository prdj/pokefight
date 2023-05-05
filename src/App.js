import React, {useState, useEffect} from 'react';
import PokemonDisplay from './components/pokemonDisplay';
import SinglePokemon from './components/SinglePokemon';
import axios from 'axios';
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState('');
  
  const url = 'http://localhost:4000/pokemon';

  useEffect(() => {
    getAllPokemons();
  }, [])

  const getAllPokemons = async () => {
    try {
      const { data } = await axios.get(`${url}`)
      setPokemons(data)
    } catch (error) {
      console.error(error.message)
    }

  }

  return (
    <Routes>
      <Route path="/" element={<PokemonDisplay pokemons={pokemons}/>}/>
      <Route path="/:id" element={<SinglePokemon pokemons={pokemons}/>}/>
      {/* <Route path="/:id/:info" component={<PokemonInfo pokemons={pokemons}/>}/> */}
    </Routes>
  );
}

export default App;
