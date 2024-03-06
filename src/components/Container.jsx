import { useState, useEffect } from "react";
import Cards from "./Cards";
import Prompt from "./Difficulty";
import { resetWatch } from "./utils";
import { PlayAgain } from "./Loading";

const Game = ({ gameFilms, setGameFilms, difficulty, setDifficulty }) => {
  const [gameRound, setGame] = useState("prompt");

  const handleButtonClick = () => {
    if (difficulty === 0) {
      alert("Choose a difficulty");
    } else {
      setGame("start");
    }
  };

  useEffect(() => {
    setGameFilms(resetWatch(gameFilms));
  }, [gameRound]);

  const setDifficultyToEasy = () => {
    setDifficulty(6);
    console.log(difficulty);
  };
  const setDifficultyToMedium = () => {
    setDifficulty(12);
    console.log(difficulty);
  };

  const setDifficultyToHard = () => {
    setDifficulty(20);
    console.log(difficulty);
  };

  return (
    <div>
      {gameRound === "start" ? (
        <Cards
          gameFilms={gameFilms}
          setGameFilms={setGameFilms}
          difficulty={difficulty}
          setGame={setGame}
        />
      ) : gameRound === "play-again" ? (
        <PlayAgain setGame={setGame} />
      ) : (
        <Prompt
          gameRound={gameRound}
          difficulty={difficulty}
          handleButtonClick={handleButtonClick}
          setDifficultyToEasy={setDifficultyToEasy}
          setDifficultyToMedium={setDifficultyToMedium}
          setDifficultyToHard={setDifficultyToHard}
        />
      )}
    </div>
  );
};

export default Game;
