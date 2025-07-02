import React from "react";
import Header from "../../components/Header/Header";
import OurPackages from "../../sections/OurPackages/OurPackages";
import CTA from "../../sections/CTA/CTA";
import PackageBG from "../../assets/images/drink1.png";
import "./Packages.css";

function Packages() {
  return (
    <main className="Packages">
      <Header
        title="See What We Offer"
        subtitle="Choose Any Of Our Three Options"
        background={PackageBG}
      />
      <OurPackages />
      <CTA />
    </main>
  );
}

export default Packages;
