import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Drink1 from "../../assets/images/drink1.webp";
import Image from "../../components/Image/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css";

function OurStory() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="OurStory">
      <div className="our-story-wrapper">
        <SectionTitle title="Who We Are" subtitle="Mixologists Who Mingle" />
        <div className="our-story">
          <div className="about-img" data-aos="fade-right">
            <Image image={Drink1} alt="about image" />
          </div>
          <div className="about-us" data-aos="fade-left">
            <h3>Our Story</h3>
            <p>
              With over a decade of experience behind the bar, we’ve been
              serving handcrafted cocktails and unforgettable hospitality
              throughout Greater Souther California. What began as a passion for
              mixology and connection has grown into a full-service bartending
              company trusted by hundreds of clients — from intimate gatherings
              to large-scale events. We believe in more than just pouring
              drinks; we craft experiences, create memories, and bring a touch
              of flair and professionalism to every celebration. Whether it's a
              wedding, corporate event, or private party, our team is here to
              mix while you mingle.
            </p>
            <br />
            <p>
              At the heart of our service is a commitment to quality,
              creativity, and genuine connection. Our team of seasoned
              bartenders doesn’t just know how to mix a perfect cocktail — they
              know how to read a room, elevate the atmosphere, and deliver an
              experience that guests will remember. We tailor every bar setup to
              fit your event's style and needs, offering curated menus, custom
              cocktails, and seamless service from setup to last call. When you
              choose us, you’re not just hiring bartenders — you’re partnering
              with professionals who care about making your event flawless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
