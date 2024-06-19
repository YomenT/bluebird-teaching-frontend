import React from "react";

import ContactForm from "../ContactForm"
import JavascriptLinkOutline from "./JavascriptLinkOutline"

import Logo from "../Logo"
import Footer from "../Footer"

class Javascript extends React.Component {

        render() {
                return(

                        <div>

                                <div className="notification"></div>

                                <Logo />

                                <div className="bodyDiv">
                                        <h2 style={{ paddingBottom: "25px" }}>Quick JavaScript Help</h2>
                                </div>

                                <div className="aboutBodyDiv">

                                        <p className="p-body">
                                                Here, you'll find concise explanations for common syntax, 
                                                functions, and properties that are handy to remember but easy to forget. 
                                                Perfect for a quick reference everytime you forget!
                                        </p>

                                        <ContactForm />

                                        <hr style={{ width: '100%', textAlign: "center", marginBottom: "100px", marginTop: "100px", backgroundColor: "#121d2d" }}></hr>

                                        <JavascriptLinkOutline />
                                
                                </div>

                                <Footer />

                        </div>

                )
        }

}

export default Javascript