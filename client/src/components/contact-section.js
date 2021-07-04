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

        </div>
        {!isSubmit ? <ContactForm submitForm=
          {submitForm} /> : <FormSuccess />}
      </div>
    </>
  )
};

export default ContactSection