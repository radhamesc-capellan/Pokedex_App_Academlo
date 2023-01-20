import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`) //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279
      .then((res) => setPokemon(res.data.results));
  }, []);

  console.log(pokemon);

  return (
    <div>
      <h1>Ruta de Pokedex</h1>
      <p>Welcome {userName}</p>
    </div>
  );
};

export default Pokedex;
