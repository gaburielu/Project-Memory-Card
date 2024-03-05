const Cards = ({ gameFilms }) => {
  return (
    <div>
      <ul>
        {gameFilms.map((film) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <img
              src={film.image}
              alt={`${film.title} Poster`}
              style={{ maxWidth: "200px" }}
            />
            <p>Watched? {String(film.watched)}</p>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
