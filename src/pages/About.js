import React from "react";
import image from "../assets/image3.jpeg";
import "../style/About.css";

const About = () => {
  console.log("hello");

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          With over 8 years of experience, we offer interior design for all
          types of ambient, with the most competitive prices in the market. The
          possibility to follow the project until completion. Providing safety
          and quality are our main principle.
        </p>
      </div>
    </div>
  );
};

export default About;
