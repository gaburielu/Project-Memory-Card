import React, { useState } from "react";
// import './Card.css';

const Card = ({ gameFilms, handleCardClick }) => {
  return (
    <div className="card-container">
      {gameFilms.map((film) => (
        <div key={film.id}>
          <img
            src={film.image}
            alt={`${film.title} Poster`}
            style={{ maxWidth: "200px" }}
            onClick={()=>handleCardClick(film.id, film.watched)}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
