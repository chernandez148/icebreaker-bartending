import React from "react";
import Header from "../../components/Header/Header";
import ContactBG from "../../assets/images/bartenders.jpg";
import ContactForm from "../../sections/ContactForm/ContactForm";
import CTA from "../../sections/CTA/CTA";
import "./Contact.css";

function Contact() {
  return (
    <main className="Contact">
      <Header
        title="Have Any Questions?"
        subtitle="Contact Us"
        background={ContactBG}
      />
      <ContactForm />
      <CTA />
    </main>
  );
}

export default Contact;
