import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import PokedexDetail from "./components/PokedexDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedexDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
