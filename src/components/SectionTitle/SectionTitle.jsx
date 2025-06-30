import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="SectionTitle" data-aos="fade-up">
      <p>{title}</p>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default SectionTitle;
