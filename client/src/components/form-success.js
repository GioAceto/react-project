import React from 'react';
import "./contact.css";

const FormSuccess = () => {
  return (
    <div>
      <div className="form-content-right">
        <div className="form-success">Your inquiry was sent. Thanks!
          <img src="images/airplane.svg" alt="message received" />
        </div>
      </div>
    </div>
  )
};

export default FormSuccess
