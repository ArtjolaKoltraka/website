import React, { useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import image from "../assets/arch_image1.jpeg";
import HomeMsg from "./HomeMsg";

function Home() {
  const [onShowModal, setShowModal] = useState(false);
  const [modified, setModified] = useState(false);
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
      <div className="headerContainer">
        <h1>Xherahu_Arch</h1>
        <p toUppercase>
          Any architectural work that doesn't express serenity is an error{" "}
        </p>
        <div>
          <button onClick={() => setShowModal(true)}>Show Msg</button>
          {onShowModal && (
            <HomeMsg
              onShowModal={onShowModal}
              setModified={(e) => setModified(e)}
              setShowModal={(e) => setShowModal(e)}
            />
          )}
        </div>
        <Link to="/projects">
          <button>Current Projects</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
