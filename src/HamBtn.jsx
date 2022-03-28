import { useState } from "react";
import { useDebugValue } from "react/cjs/react.production.min";
import Button from "../images/icon-hamburger.svg";
export default function HamBtn() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerOpen) {
      console.log("clicked");
    } else {
      console.log("not cliked");
    }
  };
  return (
    <div>
      <img src={Button} className="ham-btn" onClick={toggleHamburger} />

      <div className="ham-links">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </div>
      <style jsx>{`
          .ham-links{
              display: ${hamburgerOpen ? "inline" : "none"}
              background-color: #FFF;
          }
          `}</style>
    </div>
  );
}
