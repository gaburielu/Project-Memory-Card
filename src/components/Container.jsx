import { useState, useEffect } from "react";
import { resetWatch } from "./utils";
import Cards from "./Card";
import Prompt from "./Difficulty";

const Game = ({ films, difficulty, setDifficulty }) => {
  const [gameRound, setGame] = useState(false);
  const [gameFilms, setGameFilms] = useState([]);

  const handleButtonClick = () => {
    if (difficulty === 0) {
      alert("Choose a difficulty");
      console.log(gameFilms);
    } else {
      const updatedFilms = resetWatch(films);
      setGameFilms(updatedFilms);
      setGame(!gameRound);
    }
  };
  const setDifficultyToEasy = () => {
    setDifficulty(6);
    console.log(difficulty)
  }
  const setDifficultyToMedium = () => {
    setDifficulty(12);
    console.log(difficulty)
  }

  const setDifficultyToHard = () => {
    setDifficulty(20);
    console.log(difficulty)
  }

  return (
    <div>
      {gameRound ? (
        <Cards gameFilms={gameFilms} />
      ) : (
        <>
          <Prompt
            gameRound={gameRound}
            difficulty={difficulty}
            handleButtonClick={handleButtonClick}
            setDifficultyToEasy={setDifficultyToEasy}
            setDifficultyToMedium={setDifficultyToMedium}
            setDifficultyToHard={setDifficultyToHard}
          />
        </>
      )}
    </div>
  );
};



export default Game;
