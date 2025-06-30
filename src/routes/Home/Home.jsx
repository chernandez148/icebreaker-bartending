import React from "react";
import Hero from "../../sections/Hero/Hero";
import OurStory from "../../sections/OurStory/OurStory";
import OurServices from "../../sections/OurServices/OurServices";
import BehindTheBar from "../../sections/BehindTheBar/BehindTheBar";
import "./Home.css";

function Home() {
  return (
    <main className="Home">
      <Hero />
      <OurStory />
      <OurServices />
      <BehindTheBar />
    </main>
  );
}

export default Home;
