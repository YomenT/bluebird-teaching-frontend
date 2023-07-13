import React, { useState } from "react";
import "./css/Logo.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div class="navbar">
      <div class="navbar-logo">
        <Link to="/">
          <img
            style={{ marginBottom: "0px" }}
            src={"https://i.ibb.co/1GqfVv1/Blue-Bird-Logo-Color-Light-Text.png"}
            alt="Open"
            width={130}
            height={100}
          />
        </Link>
      </div>
      <div class={`navbar-buttons ${menuOpen ? "open" : ""}`}>
        <Link to="/satprep">
          <button type="button" class="outline-button">
            SAT Prep
          </button>
        </Link>
        <Link to="/python">
          <button type="button" class="outline-button">
            Python For Non-Engineers
          </button>
        </Link>
        <Link to="/focus_log">
          <button type="button" class="outline-button">
            Focus Log
          </button>
        </Link>
      </div>
      <div class="navbar-menu-icon" onClick={toggleMenu}>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </div>
    </div>
  );
};

export default Navbar;