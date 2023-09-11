import React from "react";
import image from "../assets/iamge.jpeg";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <h2>Call : 0682290939</h2>
        <h2> Email address: xherahu.acrh@gmail.com</h2>
        <h2>Location: Teodor Keko Road,Astir,Tirana,Albania</h2>
      </div>
    </div>
  );
}

export default Contact;
