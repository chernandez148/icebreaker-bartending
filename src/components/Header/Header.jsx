import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

function Header({ title, subtitle, background }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <header
      className="Header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <p data-aos="fade-up">{title}</p>
      <h1 data-aos="fade-up">{subtitle}</h1>
    </header>
  );
}

export default Header;
