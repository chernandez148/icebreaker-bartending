import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FiCheckCircle } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Packages.css";

function Packages() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="Packages">
      <SectionTitle
        title="Our Packages"
        subtitle="Packages for Every Occasion"
      />
      <div className="packages">
        {/* Basic Package */}
        <div className="bar-package basic" data-aos="fade-right">
          <div className="package-title">
            <h3>Basic Package</h3>
            <h1>$450</h1>
            <p>Serves up to 90 guests</p>
          </div>
          <div className="package-content">
            <p>
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>
                <FiCheckCircle /> One bartender with white wooden mobile bar (if
                needed)
              </li>
              <li>
                <FiCheckCircle /> 4.5 hours of service
              </li>
              <li>
                <FiCheckCircle /> Printed personalized menu
              </li>
              <li>
                <FiCheckCircle /> All acrylic cocktail cups
              </li>
              <li>
                <FiCheckCircle /> Shot cups (if needed)
              </li>
              <li>
                <FiCheckCircle /> Cocktail napkins
              </li>
              <li>
                <FiCheckCircle /> Cocktail straws
              </li>
              <li>
                <FiCheckCircle /> Chamoy rimmer
              </li>
              <li>
                <FiCheckCircle /> Margarita salt
              </li>
              <li>
                <FiCheckCircle /> Tajin salt
              </li>
            </ul>
            <p>
              <strong>Garnishes included:</strong>
            </p>
            <ul>
              <li>
                <FiCheckCircle /> Fresh mint
              </li>
              <li>
                <FiCheckCircle /> Lime slices
              </li>
              <li>
                <FiCheckCircle /> Lemon slices
              </li>
              <li>
                <FiCheckCircle /> Orange slices
              </li>
              <li>
                <FiCheckCircle /> Pineapple slices
              </li>
              <li>
                <FiCheckCircle /> Dehydrated garnishes
              </li>
            </ul>
            <p>
              <strong>Note:</strong> Client provides liquor, mixers, ice, and
              beer.
            </p>
            <p>
              <strong>Milage fee included.</strong>
            </p>
          </div>
        </div>

        {/* Basic Plus Package */}
        <div className="bar-package basic-plus" data-aos="fade">
          <div className="package-title">
            <h3>Basic Package Plus</h3>
            <h1>$725</h1>
            <p>Serves up to 180 guests</p>
          </div>
          <div className="package-content">
            <p>
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>
                <FiCheckCircle /> Two bartenders with white wooden mobile bars
                (if needed)
              </li>
              <li>
                <FiCheckCircle /> 5 hours of service
              </li>
              <li>
                <FiCheckCircle /> Printed personalized menu
              </li>
              <li>
                <FiCheckCircle /> All acrylic cocktail cups
              </li>
              <li>
                <FiCheckCircle /> Shot cups (if needed)
              </li>
              <li>
                <FiCheckCircle /> Cocktail napkins
              </li>
              <li>
                <FiCheckCircle /> Cocktail straws
              </li>
              <li>
                <FiCheckCircle /> Chamoy rimmer
              </li>
              <li>
                <FiCheckCircle /> Margarita salt
              </li>
              <li>
                <FiCheckCircle /> Tajin salt
              </li>
            </ul>
            <p>
              <strong>Garnishes included:</strong>
            </p>
            <ul>
              <li>
                <FiCheckCircle /> Fresh mint
              </li>
              <li>
                <FiCheckCircle /> Lime slices
              </li>
              <li>
                <FiCheckCircle /> Lemon slices
              </li>
              <li>
                <FiCheckCircle /> Orange slices
              </li>
              <li>
                <FiCheckCircle /> Pineapple slices
              </li>
              <li>
                <FiCheckCircle /> Dehydrated garnishes
              </li>
            </ul>
            <p>
              <strong>Note:</strong> Client provides liquor, mixers, ice, and
              beer.
            </p>
            <p>
              <strong>Milage fee included.</strong>
            </p>
          </div>
        </div>

        {/* Pro Package */}
        <div className="bar-package basic-pro" data-aos="fade-left">
          <div className="package-title">
            <h3>Basic Package Pro</h3>
            <h1>Contact Us</h1>
            <p>
              Fully customizable package based on your guest count and event
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
