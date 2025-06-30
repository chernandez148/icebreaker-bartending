import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoGoogle } from "react-icons/io5";
import { FaYelp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Drink3 from "../../assets/images/drink3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="Hero">
      <div className="hero-top"></div>
      <h1 className="jumbo-text" data-aos="fade-up">
        We Mix, <br />
        You Mingle
      </h1>
      <div className="hero-bottom" data-aos="fade-up">
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
        <Link>
          <MdAlternateEmail />
        </Link>
      </div>
      <div className="header-right">
        <img src={Drink3} data-aos="fade-left" />
      </div>
    </section>
  );
}

export default Hero;
