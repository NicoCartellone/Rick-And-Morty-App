import { useState, useEffect } from "react";
import "./App.css";
import Characteres from "./Components/Characteres/Characteres";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";


function App() {
  const [loading, setLoading] = useState(true);
  const [getAllCharacters, setGetAllCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const [nameCharacter, setNameCharacter] = useState("")


  const apiBase = "https://rickandmortyapi.com/api/character/";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGetAllCharacters(data.results);
        setinfo(data.info);
        setLoading(false);
      })
      .catch((error) => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(apiBase);
  }, []);

  const characteresFiltrados = getAllCharacters.filter(character => character.name.toLowerCase().includes(nameCharacter.toLocaleLowerCase()))

  return (
    <div className="App">
      <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" width="450px" height="150px"></img>
      {/* <h1>Rick And Morty App</h1> */}
      <Search nameCharacter={nameCharacter} setNameCharacter={setNameCharacter}/>
      <br/>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <Characteres characteres={characteresFiltrados} />
        </div>
      )}
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}

export default App;
