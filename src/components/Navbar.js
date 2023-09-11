import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../style/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img alt="" src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home </Link>
          <Link to="/projects">Projects </Link>
          <Link to="/contact">Contact </Link>
          <Link to="/about">About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home </Link>
        <Link to="/projects">Projects </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/about">About </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
