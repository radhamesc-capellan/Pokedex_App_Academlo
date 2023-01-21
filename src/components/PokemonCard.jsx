import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({url}) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(url)
    .then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <li>
      <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
        <h1>{pokemon?.name}</h1>
        <img src={pokemon.sprites?.front_default} alt="" />
      </div>
    </li>
  );
};

export default PokemonCard;
