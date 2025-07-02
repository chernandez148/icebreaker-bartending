import React, { useEffect } from "react";
import Logo from "../../assets/images/icebreaker-logo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <nav className="Navbar">
      <ul data-aos="fade">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">
            <img src={Logo} alt="logo" width={150} />
          </Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
