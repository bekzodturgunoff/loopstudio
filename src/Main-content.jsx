import InteractiveImg from "../images/desktop/image-interactive.jpg";
import Movie from "./Movie";
import movie1 from "../images/desktop/image-deep-earth.jpg";
import movie2 from "../images/desktop/image-night-arcade.jpg";
import movie3 from "../images/desktop/image-soccer-team.jpg";
import movie4 from "../images/desktop/image-grid.jpg";
import movie5 from "../images/desktop/image-from-above.jpg";
import movie6 from "../images/desktop/image-pocket-borealis.jpg";
import movie7 from "../images/desktop/image-curiosity.jpg";
import movie8 from "../images/desktop/image-fisheye.jpg";

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-one">
        <div className="interactive-img-container">
          <img src={InteractiveImg} />
        </div>
        <div className="interactive-text-container">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
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
          <Movie img={movie1} title="DEEP EARTH" />

          <Movie img={movie2} title="NIGHT ARCADE" />

          <Movie img={movie3} title="SOCCER TEAM VR" />

          <Movie img={movie4} title="THE GRID" />

          <Movie img={movie5} title="FROM UP ABOVE VR" />

          <Movie img={movie6} title="POCKET BOREALIS" />

          <Movie img={movie7} title="THE CURIOSITY" />

          <Movie img={movie8} title="MAKE IT FISHEYE" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
