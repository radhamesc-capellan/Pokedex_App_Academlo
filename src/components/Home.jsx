import React, { useState } from "react";
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
    <div className="container mx-auto mt-5">
      <div className="text-center">
        <h2 className="text-[50px] font-bold text-[#FE1936]">¡Hola entrenador!</h2>
        <h2 className="text-[25px] font-medium text-[#302F2F]">Para poder comenzar, dame tu nombre</h2>
      </div>

      <div className="mt-5 text-center">
        <input
        className="shadow-md text-xl text-left px-[20px] py-[8px]"
          type="text"
          placeholder="Tu nombre..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-[#D93F3F] text-white px-[30px] py-[10px] rounded-sm" onClick={clickButton}>Comenzar</button>
      </div>
    </div>
  );
};

export default Home;
