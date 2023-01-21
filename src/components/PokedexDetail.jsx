import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexDetail = () => {

  const {id} = useParams();

  const [pokemonDetail, setpokemonDetail] = useState({});

  useEffect(() => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setpokemonDetail(res.data));
  }, [])

  console.log(pokemonDetail);

  return (
    <div>
      <h1>{pokemonDetail.name}</h1>
      <h2>{id}</h2>
      <img src={pokemonDetail.sprites?.front_default} alt="" />
    </div>
  );
};

export default PokedexDetail;
