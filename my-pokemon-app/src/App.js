import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    const fetchPokemonData = async () => {
      // 모든 포켓몬 데이터 습득
      let res = await getAllPokemon(initialUrl);
      console.log(res);
    };
    fetchPokemonData();
  }, []);
  return <div className="App"></div>;
}

export default App;
