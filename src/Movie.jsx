function Movie(props) {
  return (
    <div className="movie">
      <img src={props.img} />
      <h2>{props.title}</h2>
    </div>
  );
}

export default Movie;
