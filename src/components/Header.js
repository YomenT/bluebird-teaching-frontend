import React from "react";

import HeaderButtons from "./Buttons/HeaderButtons";

class Header extends React.Component {
  render() {
    return (
      <div className="myDiv">
        <h1>
          BlueBird <span style={{ color: "#5b92e5" }}>Teaching</span>
        </h1>
        <p>An open source approach to special needs education.</p>
        <HeaderButtons />
      </div>
    );
  }
}

export default Header;