import React from 'react';
import "./contact.css"
import useForm from './use-form.js';
import validate from "./validate.js";

const ContactForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-header">LET'S CHAT!</h1>
        <h2>For product questions and business inquiries, please fill out the form below.</h2>
        <hr />
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">Name</label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="err-message">{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="err-message">{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="type" className="form-label">Inquiry Type</label>
          <br />
          <select id="type" name="type" className="form-input">
            <option value="products">Products</option>
            <option value="wholesale">Wholesale</option>
            <option value="orders">Orders</option>
            <option value="other">Other</option>
          </select>
          <div className="form-inputs">
            <label htmlFor="comment" className="form-label">Comment</label>
            <br />
            <textarea
              id="comment"
              name="comment"
              rows="7"
              cols="50"
              placeholder="Enter comment here"
              maxLength="1000"
              value={values.comment}
              onChange={handleChange}></textarea>
            {errors.comment && <p className="err-message">{errors.comment}</p>}
          </div>
          <button className="form-input-btn" type="submit">Send</button>
        </div>
      </form>
    </div >
  )
}

export default ContactForm
