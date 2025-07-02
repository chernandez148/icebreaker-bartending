import React from "react";
import Header from "../../components/Header/Header";
import OurStory from "../../sections/OurStory/OurStory";
import Team from "../../sections/Team/Team";
import CTA from "../../sections/CTA/CTA";
import AboutBG from "../../assets/images/about-us.webp";
import "./About.css";

function About() {
  return (
    <main className="About">
      <Header
        title="Who We Are"
        subtitle="Get To Know Us"
        background={AboutBG}
      />
      <OurStory />
      <Team />
      <CTA />
    </main>
  );
}

export default About;
