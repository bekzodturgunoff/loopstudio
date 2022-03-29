import InteractiveImg from "../images/desktop/image-interactive.jpg";
import Movie from "./Movie";
import MovieData from "./MovieData";
console.log(MovieData);

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-one">
        <div className="interactive-img-container">
          <img src={InteractiveImg} />
        </div>
        <div className="interactive-text-container">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p className="interactive-paragraph">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creation have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="content-two">
        <div className="creation">
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </div>

        <div className="movie-container">
          {MovieData.map((movie) => {
            return <Movie title={movie.title} imgSrc={movie.imgSrc} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
