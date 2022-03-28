import Logo from "../images/logo.svg";
import HamBtn from "./HamBtn";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="overlay">
        <div className="navbar">
          <img src={Logo} />
          <HamBtn />

          <div className="links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>
        </div>

        <div className="hero-heading">
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
