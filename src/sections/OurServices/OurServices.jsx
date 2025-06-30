import React, { useEffect } from "react";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Image from "../../components/Image/Image";
import BartendingImage from "../../assets/images/bartending-image.jpg";
import MobileBar from "../../assets/images/mobile-bar.jpg";
import PatioRental from "../../assets/images/patio-rental.jpg";
import SignitureCocktails from "../../assets/images/drink1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurServices.css";

function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="OurServices">
      <HorizontalLine left={180} />
      <HorizontalLine left={200} />
      <SectionTitle
        title="Our Services"
        subtitle="Tailored Bartending for Every Event"
      />
      <div className="our-services-wrapper">
        {/* Bartender Staffing */}
        <div className="service" data-aos="fade-up">
          <div className="service-description">
            <h3>Bartender Staffing</h3>
            <p>
              Our expert bartenders bring not just skill, but an unmatched level
              of professionalism to every event. Whether it’s a small gathering
              or a large celebration, our team ensures that every drink is
              perfectly crafted and served with a smile. From creating custom
              cocktails to offering curated drink menus that fit your event’s
              theme, we provide more than just bartenders — we provide an
              experience.
            </p>
            <br />
            <p>
              With over a decade of experience, our bartenders are adept at
              handling any type of event — from intimate backyard parties to
              grand wedding receptions. We offer flexible packages that allow
              you to choose the perfect staffing level for your event, whether
              you need a single bartender or a full team. Our team is trained
              not only in the art of mixology but also in customer service,
              ensuring that your guests feel cared for throughout the event.
            </p>
            <br />
            <p>
              We handle everything — from setup to cleanup — so you can focus on
              enjoying the event. Our bartenders are equipped with high-quality
              tools and ingredients, ensuring every cocktail is a masterpiece.
              Whether you’re looking for a signature drink or a classic
              cocktail, we’ll craft the perfect menu to fit your style. Let us
              manage the bar, so you can relax and enjoy the party.
            </p>
          </div>
          <div className="service-image">
            <Image image={BartendingImage} alt="bartending image" />
          </div>
        </div>

        {/* Mobile Bar Rental */}
        <div className="service" data-aos="fade-up">
          <div className="service-image">
            <Image image={MobileBar} alt="mobile bar" />
          </div>
          <div className="service-description">
            <h3>Mobile Bar Rental</h3>
            <p>
              Bring the bar to you with our fully-equipped mobile bar setups.
              Perfect for any location, our mobile bar service adds convenience
              and style to your event, whether it's a wedding, corporate
              gathering, or private party. Our mobile bars come complete with
              professional bartenders, top-shelf spirits, and everything you
              need to keep the drinks flowing smoothly. We provide a wide
              selection of drinks to suit any taste, from signature cocktails to
              mocktails and non-alcoholic beverages.
            </p>
            <br />
            <p>
              Our mobile bar setups are not only functional but designed to
              enhance the aesthetic of your event. We offer a variety of bar
              styles to match your venue and theme, from sleek modern bars to
              rustic, vintage-inspired setups. From setup to breakdown, we take
              care of everything, ensuring that your mobile bar experience is
              seamless and stress-free. Whether indoors or outdoors, our mobile
              bars are designed to make your event stand out, offering
              high-quality drinks and exceptional service wherever you are.
            </p>
            <br />
            <p>
              Our team is trained to provide efficient, friendly service while
              creating a fun and interactive experience for your guests. We also
              provide additional services, such as personalized cocktail
              stations, bar games, and more, to engage guests and add a special
              touch to your event. Let us bring the party to you!
            </p>
          </div>
        </div>

        {/* Patio Rental */}
        <div className="service" data-aos="fade-up">
          <div className="service-description">
            <h3>Patio Rental</h3>
            <p>
              Elevate your outdoor event with our stylish patio rentals, perfect
              for creating an inviting and memorable atmosphere. Our patios are
              designed to complement any event, providing a beautiful setting
              for guests to relax, mingle, and enjoy expertly crafted cocktails.
              Whether you're hosting a wedding reception, a casual outdoor
              party, or a corporate gathering, our patio setups can be
              customized to suit your needs and style.
            </p>
            <br />
            <p>
              Our patio rentals come with a range of features, including
              comfortable seating arrangements, elegant lighting, and weather
              protection options to ensure your guests stay comfortable no
              matter the season. We also provide stylish decor to match your
              event’s theme and can customize the setup to accommodate your
              guest list, from cozy intimate spaces to larger group gatherings.
            </p>
            <br />
            <p>
              With full-service bartending options and complete event
              coordination, our patio rentals ensure that your outdoor
              celebration goes off without a hitch. We handle all the logistics,
              from setup to breakdown, allowing you to focus on enjoying your
              special day. Whether it's a small family gathering or a larger
              celebration, our patio rental service provides the perfect space
              for your guests to enjoy delicious drinks and great company. Let
              us handle the details while you enjoy your event in comfort and
              style.
            </p>
          </div>
          <div className="service-image">
            <Image image={PatioRental} alt="patio rental" />
          </div>
        </div>

        {/* Signature Cocktails */}
        <div className="service" data-aos="fade-up">
          <div className="service-image">
            <Image image={SignitureCocktails} alt="signature cocktails" />
          </div>
          <div className="service-description">
            <h3>Signature Cocktails</h3>
            <p>
              At our bartending service, we believe that every drink should tell
              a story. Our custom cocktail creations are designed to reflect
              your event’s personality, theme, and vibe. Whether you're looking
              for a sophisticated signature drink for your wedding or a fun,
              creative mix for a corporate event, we work with you to craft the
              perfect cocktail experience. From classic concoctions to
              innovative, one-of-a-kind recipes, our team of expert mixologists
              is passionate about blending quality ingredients with unique
              flavors that leave a lasting impression.
            </p>
            <br />
            <p>
              We take pride in offering a personalized cocktail menu tailored
              specifically to your needs. We start by understanding your guests’
              preferences and the overall ambiance you wish to create. Then, we
              design cocktails that not only taste exceptional but look visually
              stunning. Whether it’s incorporating seasonal ingredients, locally
              sourced fruits, or an inspired drink to match your event’s theme,
              we ensure that each cocktail is a true work of art. Our custom
              cocktail creations can also be paired with specific food menus,
              adding an extra layer of detail to your event’s experience.
            </p>
            <br />
            <p>
              Beyond just mixing drinks, our creative cocktail designs engage
              your guests and enhance the overall celebration. We offer the
              option for personalized garnishes, fun cocktail names, and
              interactive cocktail stations where guests can customize their own
              drinks. From the first sip to the last, we make sure your custom
              cocktails leave everyone talking long after the event. Let us
              elevate your special occasion with drinks that are as memorable as
              the moments they accompany.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
