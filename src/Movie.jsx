function Movie({ imgSrc, title }) {
  return (
    <div className="movie">
      <img src={imgSrc} />
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Movie;
