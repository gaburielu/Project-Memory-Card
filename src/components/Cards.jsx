import { useState, useEffect } from "react";
import Card from "./Card";
import TemplateImg from "./TemplateImg";
import { shuffle } from "./utils";
import "../styles/cards.css";

const Cards = ({ gameFilms, setGameFilms, difficulty, setGame }) => {
  let [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (id, watched) => {
    setIsFlipped(!isFlipped);
    if (!watched && score != difficulty - 1) {
      setScore((prevScore) => prevScore + 1);
      setGameFilms((prev) =>
        prev.map((film) => (film.id === id ? { ...film, watched: true } : film))
      );
    } else {
      setGame("play-again");
      alert("end");
    }
    asyncOperation();
  };

  const asyncOperation = async () => {
    setGameFilms((prev) => shuffle([...prev]));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsFlipped(false);
  };

  useEffect(() => {
    console.log(gameFilms);
  }, [gameFilms]);

  return (
    <div>
      <p>{score}</p>
      <div >
        {!isFlipped ? (
          <Card
            gameFilms={gameFilms}
            handleCardClick={(id, watched) => handleCardClick(id, watched)}
          />
        ) : (
          <TemplateImg gameFilms={gameFilms} />
        )}
      </div>
    </div>
  );
};

export default Cards;
