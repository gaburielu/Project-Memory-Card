import { useState, useEffect } from "react";
import { resetWatch } from "./utils";
import Cards from "./Card";

const Game = ({ films }) => {
  const [gameRound, setGame] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [gameFilms, setGameFilms] = useState([]);

  const handleButtonClick = () => {
    if (difficulty === 0) {
      alert("Choose a difficulty");
      console.log(gameFilms);
      handleDifficulty();
    } else {
      const updatedFilms = resetWatch(films);
      setGameFilms(updatedFilms);
      setGame(!gameRound);
    }
  };

  const handleDifficulty = () => {
    setDifficulty(12);
  };

  return (
    <div>
      {gameRound ? (
        <Cards gameFilms={gameFilms} />
      ) : (
        <>
          <p>{String(gameRound)}</p>
          <button onClick={handleButtonClick}>test</button>
        </>
      )}
    </div>
  );
};

export default Game;
