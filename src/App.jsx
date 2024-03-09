import { useState, useEffect } from "react";
import { Loading } from "./components/Loading";
import Game from "./components/Container";
import axios from "axios";
import { resetWatch, getRandomSelection, shuffle } from "./components/utils";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [gameFilms, setGameFilms] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const apiUrl = "https://ghibliapi.vercel.app/films";

  useEffect(() => {
    const asyncOperation = async () => {

      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setFilms(response.data);
          setFilms((prev) => shuffle([...prev]));
        } catch (error) {
          console.error(`Error fetching data: ${error.message}`);
        }
      };
      fetchData();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    asyncOperation();
  }, []);

  useEffect(() => {
    const updatedFilms = getRandomSelection(difficulty, resetWatch(films));
    setGameFilms(updatedFilms);
  }, [difficulty]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Game
          gameFilms={gameFilms}
          setGameFilms={setGameFilms}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      )}
    </>
  );
}

export default App;
