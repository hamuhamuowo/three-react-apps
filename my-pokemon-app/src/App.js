import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import { Card } from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 모든 포켓몬 데이터 습득
      let res = await getAllPokemon(initialUrl);
      // 각 포켓몬 상세 데이터 습득
      loadPokemon(res.results); // 정보 url
      setNextURL(res.next); // 다음 포켓몬 리스트 정보가 담긴 url
      setPrevURL(res.previous); // 가장 처음은 null
      setLoading(false); // 로딩 완료
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      // Promise.all일 때는 배열이 온다 (모두 다 될 때까지 기다린다는 약속의 의미...)
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
    // console.log(pokemonData);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    // console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>로딩중 ... </h1>
        ) : (
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        )}
        <div className="btn">
          <button onClick={handlePrevPage}>이전</button>
          <button onClick={handleNextPage}>다음</button>
        </div>
      </div>
    </>
  );
}

export default App;
