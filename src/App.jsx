import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Game from "./components/Container";
import axios from "axios";
import { resetWatch } from "./components/utils";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const apiUrl = "https://ghibliapi.vercel.app/films";

  useEffect(() => {
    const asyncOperation = async () => {
      const image = new Image();
      image.src = "src/assets/Ghibli-card.png";
      await image.decode();

      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setFilms(response.data);
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
    
  }, [difficulty]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Game
          films={films}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      )}
    </div>
  );
}

export default App;

//     <div>
//       <h1>Film List</h1>
//       <ul>
//         {films.map((film) => (
//           <li key={film.id}>{film.title}</li>
//         ))}
//       </ul>
//     </div>
