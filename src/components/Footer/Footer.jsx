import React from "react";
import Logo from "../../assets/images/icebreaker-logo.png";
import "./Footer.css";
import { IoLogoGoogle, IoLogoInstagram } from "react-icons/io5";
import { FaYelp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-wrapper">
        <img src={Logo} width={150} />
        <p>2629 W Via San Miguel</p>
        <p>San Bernardino, CA 92410</p>
        <p>909-659-4705</p>
        <p>icebreakerbartending@gmail.com</p>
        <ul className="socials">
          <li>
            <Link>
              <IoLogoInstagram />
            </Link>
          </li>
          <li>
            <Link>
              <FaYelp />
            </Link>
          </li>
          <li>
            <Link>
              <IoLogoGoogle />
            </Link>
          </li>
        </ul>
        <hr />
        <p>&copy; 2025 Icebreaker Bartending Co. All rights reserved.</p>
        <p>Designed and developed by Nxthing Is Made</p>
      </div>
    </footer>
  );
}

export default Footer;
