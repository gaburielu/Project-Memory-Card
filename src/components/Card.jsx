import React from "react";
import "../styles/cards.css";
import templateImg from "src/assets/Ghibli-card.png";

const Card = ({ gameFilms, handleCardClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      {gameFilms.map((film) => (
        <img
          key={film.id}
          src={!isFlipped ? film.image : templateImg}
          alt={`${film.title} Poster`}
          onClick={() => handleCardClick(film.id, film.watched)}
        />
      ))}
    </div>
  );
};

export default Card;

