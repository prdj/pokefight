import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


// Create a new component here were you will get all the information from the props
// get the ID of the pokemon from useParams
// use that ID to display the specific information for your pokemon and store it inside of a useState hook
// Do an axios xall to get the image from the API
//show all this information inside of your component


/*
Back end should provide all pokemons + images embedded in the object

*/


export default function SinglePokemon ({pokemons}) {
    const [singlePokemon, setSinglePokemon] = useState(null);
    const {id} = useParams();

    const getPokemon = async () => {
      try { 
        const findPoke = pokemons.find(pokemon => pokemon.id === parseInt(id))
        // Fetch the image URL from the PokeAPI
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();
        setSinglePokemon({ ...findPoke, imageUrl: pokemonData.sprites.other['official-artwork'].front_default });
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      pokemons && getPokemon()
    }, [pokemons]);
  



    return (
        <div>
            <div>Single Pokemon</div>
            <ul>
                { 
                !singlePokemon ?
                <li>"Loading"</li>
                :
                <li>{singlePokemon.name.english}</li>            
                }

            </ul>
            {singlePokemon && <img src={singlePokemon.imageUrl} alt={singlePokemon.name.english} />}
        </div>
        
    )
}