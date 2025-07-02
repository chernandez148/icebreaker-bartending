import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactForm.css";

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  guests: Yup.number().required("Required").min(1),
  message: Yup.string().required("Required"),
});

function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <section className="ContactForm">
      <SectionTitle subtitle="Inquire" />
      <div className="line" data-aos="fade-up" />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data:", values);
          resetForm();
        }}
      >
        {() => (
          <Form data-aos="fade-up">
            <div className="full-name">
              <div>
                <Field name="firstName" placeholder="FIRST NAME" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <Field name="lastName" placeholder="LAST NAME" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <div>
              <Field name="email" placeholder="EMAIL" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field name="phone" placeholder="TELEPHONE" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="date-and-time">
              <div>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component="div" className="error" />
              </div>
              <div>
                <Field type="time" name="time" />
                <ErrorMessage name="time" component="div" className="error" />
              </div>
            </div>

            <div className="message">
              <div>
                <Field name="guests" placeholder="NO. OF GUESTS" />
                <ErrorMessage name="guests" component="div" className="error" />
              </div>
              <div>
                <Field name="message" placeholder="MESSAGE" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default ContactForm;
