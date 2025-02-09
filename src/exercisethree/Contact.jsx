import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us </h1>
      <p>Got a question? Want to chat? Reach out and we’ll be happy to help you! </p>
      <p>Feel free to contact us through any of the following ways:</p>
      <div className="contact-details">
        <p>Email: sonicfan@blueblur.com</p>
        <p>Phone: 1-800-SONIC-4U</p>
        <p>Twitter: @SonicTheHedgehog</p>
      </div>
      <p>We’re always excited to hear from fellow Sonic fans! 💙</p>
    </div>
  );
}
