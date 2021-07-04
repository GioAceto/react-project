import React from 'react'
import "./form.css"

const ContactForm = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>CONTACT US</h1>
        <h2>For product questions and business inquiries please fill out the form below.</h2>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" name="name" className="form-input" placeholder="Enter your name" />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" name="email" className="form-input" placeholder="Enter your email" />
        </div>
        <div className="form-inputs">
          <label htmlFor="type" className="form-label">Inquiry Type</label>
          <select id="type" name="type" className="form-input">
            <option value="products">Products</option>
            <option value="wholesale">Wholesale</option>
            <option value="orders">Orders</option>
            <option value="other">Other</option>
          </select>
          <div className="form-inputs">
            <label htmlFor="comment" className="form-label">Comment</label>
            <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Enter comment here"></textarea>
          </div>
          <button className="form-input-btn" type="submit">Send</button>
        </div>
      </form>

    </div >
  )
}

export default ContactForm
