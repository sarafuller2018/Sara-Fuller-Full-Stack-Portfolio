import { useState } from "react";

import { validateEmailAddress } from "../utils/helpers";
import "../styles/Contact.css"


export default function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    if (name && email && message) {
    alert("Thank you for your submission!")
    } else {
      alert("Please fill out required fields.")
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container text-center contact-form">
      <h1>Thank you for visiting my page {name}</h1>
      <p>You may enter your information below, and I will reach out as quickly as possible.</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <br />
        <input
          onBlur={(e) => {
            if (e.currentTarget === e.target && name.length === 0) {
              alert("You must enter your name to submit.");
            }
          }
          }
          value={name.trim()}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          onBlur={(e) => {
            if (e.currentTarget === e.target && email.length === 0 || !validateEmailAddress(email)) {
              alert("Please enter a valid email address.");
            }
          }
          }
          value={email.trim()}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br />
        <label>Message:</label>
        <br />
        <input
          onBlur={(e) => {
            if (e.currentTarget === e.target && message.length === 0) {
              alert("You must enter a message to submit.");
            }
          }
          }
          value={message.trim()}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className="message-input"
        />
        <br />
        <button type="submit" className="p-2 m-2 contact-submit-button"><span>Submit</span></button>
      </form>
    </div>
  );
}