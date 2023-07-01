import React from 'react'

import HeaderButtons from './Buttons/HeaderButtons'

class Header extends React.Component {
    render() {
        return (
            <div className="myDiv">
                <h1 style={{ paddingTop: "200px", marginTop: "0px", paddingBottom: "25px" }}>BlueBird <span style={{ color: "#5b92e5" }}>Teaching</span></h1>
                <p style={{ fontSize: "32.5px", paddingBottom: "50px" }}>An open source approach to 
                special needs education.</p>
                <HeaderButtons />
                <hr style={{ width: '75%', textAlign: "center", marginBottom: "0px", backgroundColor: "#fffAF0" }}></hr>
            </div>
        )
    }
}

export default Header