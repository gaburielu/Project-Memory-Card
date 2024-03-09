import React from "react";
import "../styles/cards.css";

const Card = ({ gameFilms, handleCardClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      {gameFilms.map((film) => (
        <img
          key={film.id}
          src={!isFlipped ? film.image : "src/assets/Ghibli-card.png"}
          alt={`${film.title} Poster`}
          onClick={() => handleCardClick(film.id, film.watched)}
        />
      ))}
    </div>
  );
};

export default Card;

