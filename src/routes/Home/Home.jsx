import React from "react";
import Hero from "../../sections/Hero/Hero";
import OurStory from "../../sections/OurStory/OurStory";
import OurServices from "../../sections/OurServices/OurServices";
import BehindTheBar from "../../sections/BehindTheBar/BehindTheBar";
import Packages from "../../sections/Packages/Packages";
import CTA from "../../sections/CTA/CTA";
import "./Home.css";

function Home() {
  return (
    <main className="Home">
      <Hero />
      <OurStory />
      <OurServices />
      <BehindTheBar />
      <Packages />
      <CTA />
    </main>
  );
}

export default Home;
