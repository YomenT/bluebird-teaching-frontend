import React from "react";

import Logo from './Logo'
import Footer from './Footer'

import PythonLinkOutline from './python-pages/PythonLinkOutline'

class Python extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>PCEP Course at IAR</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body">
                        Welcome to our Python program aimed at getting people without engineering backgrounds on their feet and on the path to career 
                        readiness.
                    </p>

                    <h3 className="h3-blue-headers" style={{ paddingTop: "75px", paddingBottom: "10px" }}>How This Works</h3>

                    <p className="p-body">
                        The content below is made in coordination with an in person course at the Islamic Association of Raleigh.  However, it's certainly 
                        not a bad place to go to; even if you're not attending the in person portion.  
                    </p>

                    <p className="p-body" style={{ fontSize: "17px" }}>
                        <strong>Note: </strong> This page is a work in progress.  I plan to have this page finished by the beginning of the summer of 2023.
                    </p>

                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", marginTop: "150px", backgroundColor: "#121d2d" }}></hr>

                    <PythonLinkOutline />

                </div>
                <Footer />
            </div>
        )
    }
}

export default Python