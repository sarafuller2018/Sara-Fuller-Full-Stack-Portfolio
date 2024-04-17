import { useState } from "react";

import { validateEmailAddress } from "../utils/helpers";
import "../styles/Contact.css"

export default function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errorMessage = "";
    if (!validateEmailAddress(email)) {
      // setErrorMessage("Invalid email address");
      errorMessage += "Invalid email address.";
      // return;
    }
    if (!name) {
      // setErrorMessage("Name is required for submission");
      errorMessage += "Name is required for submission.";
      // return;
    }
    if (!message) {
      // setErrorMessage("Message is required for submission");
      errorMessage += "Message is required for submission.";
      // return;
    }
    if (errorMessage.length > 0) {
      setErrorMessage(errorMessage);
      return;
    } else {
      alert("Thank you for your submission!")
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("")
  };

  return (
    <div className="container text-center contact-form">
      <h1>Thank you for visiting my page {name}</h1>
      <p>You may enter your information below, and I will reach out as quickly as possible.</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <br />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br />
        <label>Message:</label>
        <br />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className="message-input"
        />
        <br />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="p-2 m-2 contact-submit-button"><span>Submit</span></button>
      </form>
    </div>
  );
}