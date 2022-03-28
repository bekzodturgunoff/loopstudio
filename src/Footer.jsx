import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import footerLogo from "../images/logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo-links">
        <img src={footerLogo} />

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="footer-icons">
        <div className="footer-icon-links">
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={pinterest} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
        </div>
        <p className="footer-paragraph">
          @2022 loopstudiuos. All rights reserved.
        </p>
      </div>
    </div>
  );
}
