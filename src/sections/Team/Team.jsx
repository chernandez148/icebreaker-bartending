import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Team1 from "../../assets/images/team1.jpg";
import Team2 from "../../assets/images/team2.jpg";
import Team3 from "../../assets/images/team3.jpg";
import Team4 from "../../assets/images/team4.jpg";
import Team5 from "../../assets/images/team5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="Team">
      <SectionTitle title="Our Team" subtitle="Meet Our Bartenders" />
      <div className="team-members">
        <div className="team" data-aos="fade-up">
          <img src={Team5} />
          <div className="team-member">
            <h3>Angela Ramos</h3>
            <p>Owner</p>
          </div>
        </div>
        <div className="team" data-aos="fade-up">
          <img src={Team1} />
          <div className="team-member">
            <p>Bartender</p>
          </div>
        </div>
        <div className="team" data-aos="fade-up">
          <img src={Team4} />
          <div className="team-member">
            <p>Bartender</p>
          </div>
        </div>
        <div className="team" data-aos="fade-up">
          <img src={Team3} />
          <div className="team-member">
            <p>Bartender</p>
          </div>
        </div>
        <div className="team" data-aos="fade-up">
          <img src={Team2} />
          <div className="team-member">
            <p>Bartender</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
