import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`) //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279
      .then((res) => setPokemons(res.data.results));
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1>Ruta de Pokedex</h1>
      <p>Welcome {userName}</p>

      <ul>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} url={pokemon.url} />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
