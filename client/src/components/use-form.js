import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    type: "",
    comment: ""
  })
  const [errors, setErrors] = useState({})

  const handleChange = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;