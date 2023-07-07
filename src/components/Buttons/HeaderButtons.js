import React from "react";
import { Link } from "react-router-dom";

class HeaderButtons extends React.Component {
  render() {
    return (
      <div
        class="header-buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/about">
          <button class="button">How This Works</button>
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/about_resources">
          <button class="button button-alt">
            Other Online Education Resources
          </button>
        </Link>
      </div>
    );
  }
}

export default HeaderButtons;