import { values } from "lodash";
import { useState, useEffect } from "react";

const useForm = () => {
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
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;