import { useState } from "react";
import Button from "../images/icon-hamburger.svg";
import closeImg from "../images/icon-close.svg";
import Logo from "../images/logo.svg";

export default function HamBtn() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <img src={Button} className="ham-btn" onClick={toggleHamburger} />

      <div className="hamburger-links">
        <div className="hamburger-close-div">
          <img src={Logo} />
          <img className="close-btn" src={closeImg} onClick={toggleHamburger} />
        </div>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </div>

      <style jsx>
        {`
          .hamburger-links {
            display: ${hamburgerOpen ? "flex" : "none"};
          }
        `}
      </style>
    </div>
  );
}
