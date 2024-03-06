const TemplateImg = ({ gameFilms }) => {
  return (
    <div className="card-container">
      {gameFilms.map((film) => (
        <div key={film.id}>
          <img
            src={film.templateImg}
            alt={`Ghibli Studio's Logo`}
            style={{ maxWidth: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default TemplateImg;
