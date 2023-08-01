import React from "react";
import ContactForm from './ContactForm';
import Logo from './Logo'
import Footer from './Footer'

import PythonLinkOutline from './python-pages/PythonLinkOutline'

class Python extends React.Component {

    render() {
        return (
            <div>
                <div className="notification"></div>
                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>PCEP Course at IAR</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body">
                        Welcome to our Python program aimed at getting individuals ready for the Entry-Level Python Programmer certiciation.
                    </p>

                    <h3 className="h4-blue-headers" style={{ paddingTop: "75px", paddingBottom: "10px" }}>How This Works</h3>

                    <p className="p-body">
                        The content below is made in coordination with an in person course at the Islamic Association of Raleigh.  However, it's certainly 
                        not a bad place to go to; even if you're not attending the in person portion.  
                    </p>
                    <p className="p-body-small" style={{ paddingTop: "50px" }}>
                          Use the form below to ask any questions related to the PCEP Course. The attachments field is there for you to use if you need 
                          to upload any screenshots of code you're working with, error messages you're getting, etc.
                    </p>
                    <ContactForm/>

                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "100px", marginTop: "100px", backgroundColor: "#121d2d" }}></hr>

                    <PythonLinkOutline />

                </div>
                <Footer />
            </div>
        )
    }
}

export default Python