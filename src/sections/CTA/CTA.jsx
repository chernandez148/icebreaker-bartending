import React, { useEffect } from "react";
import Drink1 from "../../assets/images/drink1.webp";
import Image from "../../components/Image/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CTA.css";

function CTA() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="CTA">
      <div className="banner"></div>
      <div className="cta-wrapper">
        <div className="cta-btn" data-aos="fade-right">
          <h1>Create Unforgettable Memories Together</h1>
          <button>Contact Us</button>
        </div>
        <div className="cta-img" data-aos="fade-left">
          <Image image={Drink1} alt="cta image" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
