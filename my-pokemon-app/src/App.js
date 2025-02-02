import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 모든 포켓몬 데이터 습득
      let res = await getAllPokemon(initialUrl);
      console.log(res);
      setLoading(false); // 로딩 완료
    };
    fetchPokemonData();
  }, []);
  return (
    <div className="App">
      {loading ? <h1>로딩중 ... </h1> : <h1>포켓몬 데이터 습득 완료!</h1>}
    </div>
  );
}

export default App;
