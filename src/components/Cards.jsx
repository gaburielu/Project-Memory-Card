import { useState, useEffect } from "react";
import Card from "./Card";
import { shuffle } from "./utils";
import "../styles/cards.css";

const Cards = ({
  gameFilms,
  setGameFilms,
  difficulty,
  setGame,
  score,
  setScore,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (id, watched) => {
    setIsFlipped(!isFlipped);
    if (!watched && score != difficulty - 1) {
      setScore((prevScore) => prevScore + 1);
      setGameFilms((prev) =>
        prev.map((film) => (film.id === id ? { ...film, watched: true } : film))
      );
    } else if (score == difficulty - 1) {
      setScore((prevScore) => prevScore + 1);
      setGame("play-again");
    } else {
      setGame("play-again");
    }
    asyncOperation();
  };

  const asyncOperation = async () => {
    setGameFilms((prev) => shuffle([...prev]));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsFlipped(false);
  };

  return (
    <div className="content">
      <div className="card-container">
        <p>Current Score: {score}</p>
        <Card
          className={!isFlipped ? "flipped" : ""}
          gameFilms={gameFilms}
          handleCardClick={(id, watched) => handleCardClick(id, watched)}
          isFlipped={isFlipped}
        />
      </div>
    </div>
  );
};

export default Cards;
