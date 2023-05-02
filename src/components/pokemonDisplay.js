import React, {useState} from "react";
import {Link} from "react-router-dom"

export default function PokemonDisplay ({pokemons}) {
    return (
        <div>
            <div>Pokemon app</div>
            <ul>
                {
                !pokemons ?
                <li>"Loading"</li>
                :
                pokemons.map(pokemonSingular=>
                    <li><Link to={`/${pokemonSingular.id}`}>{pokemonSingular.name.english}</Link></li>
                )}
            </ul>
        </div>
        
      
    )
}