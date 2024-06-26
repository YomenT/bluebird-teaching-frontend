import React from 'react'

import ContactForm from "../ContactForm"
import ReactLinkOutline from "./ReactLinkOutline"
import Logo from "../Logo"
import Footer from "../Footer"

function ReactPage() {

        return (

                <div>

                        <div className='notification'></div>

                        <Logo />

                        <div className='bodyDiv'>
                                <h2 style={{ paddingBottom: "25px" }}>Quick React Help</h2>
                        </div>

                        <div className='aboutBodyDiv'>

                                <p className='p-body'>
                                        This is meant to provide quick reference guides for 
                                        people either interested in learning React, or haven't 
                                        worked with React in a while and can use a quick refresh.
                                </p>

                                <ContactForm />

                                <hr style={{ width: '100%', textAlign: "center", marginBottom: "100px", marginTop: "100px", backgroundColor: "#121d2d" }}></hr>

                                <ReactLinkOutline />

                        </div>

                        <Footer />

                </div>

        )

}

export default ReactPage