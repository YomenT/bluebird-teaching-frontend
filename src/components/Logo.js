import React, { useState, useEffect } from "react";
import "./css/Logo.css"
import { Link } from "react-router-dom";
import "firebase/auth";
import { auth, logout} from "../firebase.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

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
        <Link to="/PCEP Course">
          <button type="button" class="outline-button">
            PCEP Course at IAR
          </button>
        </Link>
        <Link to="/focus_log">
          <button type="button" class="outline-button">
            Focus Log
          </button>
        </Link>
        <Link to="/teacher-corner">
          <button type="button" class="outline-button">
            Teacher Corner
          </button>
        </Link>
        {loggedIn ? (
          <button type="button" className="button logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button type="button" className="button login-button">
              Login
            </button>
          </Link>
        )}
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