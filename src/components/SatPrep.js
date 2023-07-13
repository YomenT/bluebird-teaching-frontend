import React from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

import SatPrepLinkOutline from "./SatPrepLinkOutline";

import Logo from './Logo'
import Footer from './Footer'

class SatPrep extends React.Component {

    render() {
        return (
            <div>
                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>SAT Prep</h2>
                </div>
                <div className="aboutBodyDiv" style={{ paddingBottom: "150px" }}>
                    <p className="p-body">
                        We are very excited to start our own SAT preparation workshop!  There are four domains or groups of problems you will see on the math 
                        section of the SAT listed below.  
                    </p>
                    <ul className="p-body">
                        <li>Heart of Algebra</li>
                        <li>Problem Solving and Data Analysis</li>
                        <li>Passport to Advanced Math</li>
                        <li>Addtional Topics in Math</li>
                    </ul>
                    <p className="p-body" style={{ fontSize: "17px" }}>
                        <strong>Note: </strong> This page is a work in progress.  Since there are four groups of questions to the math portion of the SAT, 
                        this page will have four major updates; each update brings the next group of questions.  We will start with the Heart of Algebra.  
                        Unfortunately, my expertise lies in the math section of the SAT.  Until I am able to find additional help with the reading portion of 
                        the SAT, this page will only cover SAT math material.
                    </p>
                    <div style={{ aspectRatio: "16/9", width: "70%" }}>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=5qap5aO4i9A"
                        />
                    </div>
                    <h3 className="h3-blue-headers" style={{ paddingTop: "75px", paddingBottom: "10px" }}>How This Works</h3>
                    <p className="p-body">
                        After scrolling down some, you'll see 4 different headers; all with lots of links beneath them.  Each link contains content to help 
                        prepare you better for the math portion of the SAT.  Read the "Pace Yourself" bit below to see how to better proceed through this 
                        material.
                    </p>
                    <h3 className="h3-blue-headers" style={{ paddingTop: "50px", paddingBottom: "15px" }}>Pace Yourself</h3>
                    <p className="p-body-small">
                        You know your schedule best!  Try to gauge how much you need to work on everyday to prepare yourself according 
                        to when you plan on taking the SAT.  It is nice to keep this chill.  Try to block out just 30 minutes a day to work on this, so you 
                        can have time to do other things you need/want!
                    </p>
                    <p className="p-body-small" style={{ paddingBottom: "150px" }}>
                        It is better to keep your study time on the shorter end, but try to make that time very engaging.  While spending time studying, try to 
                        ask yourself questions about the material.  If there are questions that you can't find answers to, <Link to="/contact" style={{ color: "#5b92e5" }}>let us know</Link>!  
                        The important thing is to try to stay engaged.  When you're not directly studying, try to mentally chew over the last material you 
                        went over.  I'll try to make sure each page of content doesn't take you more than 30 minutes to go through it.
                    </p>
                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#121d2d" }}></hr>
                    <p className="p-body" style={{ paddingBottom: "25px" }}>
                        Try to go through the following links in order.  Try to keep track of which links you've visited; The color change for visited links isn't working as expected.  Sorry 
                        for my poor coding skills, and thank you for your patience :)
                    </p>
                    <SatPrepLinkOutline />
                </div>
                <Footer />
            </div>
        )
    }
}

export default SatPrep