import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import image from "../assets/arch_image1.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
      <div className="headerContainer">
        <h1>Xherahu_Arch</h1>
        <p toUppercase>
          Any architectural work that doesn't express serenity is an error{" "}
        </p>
        <Link to="/projects">
          <button>Current Projects</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
