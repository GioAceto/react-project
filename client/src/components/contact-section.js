import React, { useState } from "react"
import "../App.css"
import ContactForm from "./form.js"
import FormSuccess from "./form-success.js"
import "./contact.css"

const ContactSection = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  function submitForm() {
    setIsSubmit(true);
  }
  return (
    <>
      <div className="contact-container">
        <div className="details-container">
          <h1>CONTACT INFO</h1>
          <h3>PORT COFFEE COMPANY</h3>
          <h3>352 COMMERCIAL STREET</h3>
          <h3>PORTLAND, MAINE</h3>
          <h3>207-999-9999</h3>
          <h1>LOCATION HOURS</h1>
          <h3>SUN CLOSED</h3>
          <h3>MON - FRI 9am - 4pm</h3>
          <h3>SAT 10am - 3pm</h3>
        </div>
        {!isSubmit ? <ContactForm submitForm=
          {submitForm} /> : <FormSuccess />}
      </div>
    </>
  )
};

export default ContactSection