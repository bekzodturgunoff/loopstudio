function Movie({ img, title }) {
  return (
    <div className="movie">
      <img src={img} />
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Movie;
