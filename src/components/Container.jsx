import { useState, useEffect } from "react";
import Cards from "./Cards";
import Prompt from "./Difficulty";
import { resetWatch } from "./utils";
import { PlayAgain } from "./Loading";

const Game = ({
  gameFilms,
  setGameFilms,
  difficulty,
  setDifficulty,
  highScore,
  setHighScore,
}) => {
  let [score, setScore] = useState(0);
  const [gameRound, setGame] = useState("prompt");

  const handleButtonClick = () => {
    if (difficulty === 0) {
      setDifficulty(6);
      setGame("start");
    }
    setGame("start");
  };

  useEffect(() => {
    setGameFilms(resetWatch(gameFilms));
  }, [gameRound]);

  const setDifficultyToEasy = () => {
    setDifficulty(6);
  };
  const setDifficultyToMedium = () => {
    setDifficulty(12);
  };

  const setDifficultyToHard = () => {
    setDifficulty(20);
  };

  return (
    <>
      {gameRound === "start" ? (
        <Cards
          gameFilms={gameFilms}
          setGameFilms={setGameFilms}
          difficulty={difficulty}
          setGame={setGame}
          score={score}
          setScore={setScore}
        />
      ) : gameRound === "play-again" ? (
        <PlayAgain
          setGame={setGame}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
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
    </>
  );
};

export default Game;
