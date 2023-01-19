import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/UserName.slice";

const Home = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const clickButton = () => {
    dispatch(changeUserName(inputValue));
    navigate("/pokedex");
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={clickButton}>enviar</button>
    </div>
  );
};

export default Home;
