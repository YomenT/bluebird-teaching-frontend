import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./css/DropdownMenu.css"
import "./css/Logo.css"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button type="button" className="outline-button Logo__button" onClick={toggleDropdown}>
        Courses
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/PCEP Course" onClick={toggleDropdown}>
            PCEP Course at IAR
          </Link>
          <Link to="/javascript" onClick={toggleDropdown}>
            JavaScript Quick Guides
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
