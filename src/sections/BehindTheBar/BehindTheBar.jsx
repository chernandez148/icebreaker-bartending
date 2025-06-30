import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Drink4 from "../../assets/images/drink4.jpg";
import Drink2 from "../../assets/images/drink4.webp";
import Drink5 from "../../assets/images/drink5.webp";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BehindTheBar.css";

function BehindTheBar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="BehindTheBar">
      <div className="behind-the-bar-wrapper">
        <SectionTitle
          title="Behind The Bar"
          subtitle="Crafted by Our Experts"
        />
        <div className="behind-the-bar">
          <div className="behind-the-bar-images" data-aos="fade-right">
            <img src={Drink4} className="large-image" alt="Bartenders" />
            <div className="small-images">
              <img src={Drink2} alt="Drink 2" />
              <img src={Drink5} alt="Drink 3" />
            </div>
          </div>
          <div className="behind-the-bar-content" data-aos="fade-left">
            <div className="bartenders">
              <h3>Meet Our Bartenders</h3>
              <p>
                Get to know the talented individuals behind the bar. Our
                bartenders bring years of experience, creativity, and passion to
                every pour—ensuring each drink is as memorable as the event
                itself.
              </p>
              <Link to="/about">
                <i>
                  View Our Bartenders <CgArrowLongRight />
                </i>
              </Link>
            </div>
            <div className="drinks">
              <h3>View Our Drinks</h3>
              <p>
                Discover our signature cocktails, crafted with precision and
                personality. Each drink on our menu is a reflection of our
                dedication to quality, creativity, and unforgettable flavor.
                Whether you're into bold mixes or refreshing classics, there's a
                cocktail for every taste and every occasion.
              </p>
              <Link to="/packages">
                <i>
                  View Our Packages <CgArrowLongRight />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BehindTheBar;
