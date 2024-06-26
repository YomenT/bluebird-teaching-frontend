import React, { useState, useEffect } from "react";
import "./css/Logo.css"
import { Link } from "react-router-dom";
import "firebase/auth";
import { auth, logout, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState("student");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then(docSnap => {
        if (docSnap.exists()) {
          setUserType(docSnap.data().userType);
        }
      });
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
          <button type="button" class="outline-button Logo__button">
            SAT Prep
          </button>
        </Link>
        <DropdownMenu />
        <Link to="/focus_log">
          <button type="button" class="outline-button Logo__button">
            Focus Log
          </button>
        </Link>
        {loggedIn ? (
          <>
            {userType === "teacher" && (
              <Link to="/teacher-corner">
                <button type="button" className="outline-button Logo__button">
                  Teacher Corner
                </button>
              </Link>
            )}
            <button type="button" className="button logout Logo__logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button type="button" className="button login-button Logo__login-button">
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