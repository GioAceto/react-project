import React, { useState } from "react"
import "../../App.css"
import ContactForm from "../form.js"
import FormSuccess from "../form-success.js"

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  function submitForm() {
    setIsSubmit(true);
  }
  return (
    <>
      {!isSubmit ? <ContactForm submitForm=
        {submitForm} /> : <FormSuccess />}
    </>
  )
};

export default Contact