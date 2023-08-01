import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

const TeacherCorner = () => {

    return (
        <div>

        <Logo />
        <div className="bodyDiv">
            <h2 style={{ paddingBottom: "25px" }}>Teacher Corner</h2>
        </div>

        <div className="aboutBodyDiv">

            <p className="p-body">
                We're so excited to have you onboard with us! 
            </p>

            <p className="p-body">
                This page should contain all the tools you need to get involved with us.
            </p>

        </div>

    <Footer />
    </div>
    )
}

export default TeacherCorner