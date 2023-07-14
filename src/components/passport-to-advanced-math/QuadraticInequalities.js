import React from "react";
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticInequalities extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Quadratic Inequalities</h2>
                </div>

                <div className="aboutBodyDiv">
                    
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        We work quadratic inequalities with the same logic as we used to work linear inequalities.  
                    </p>

                    <p className="p-body-small">
                        Back with linear inequalities, for the most part, we just treated them as normal linear equations; with just a few extra notes to keep in mind.  
                        We're going to be doing the same thing here.  When we work with quadratic inequalities, we're going to treat them just like quadratic equations, 
                        but we're just going to have a few added steps.
                    </p>

                    <p className="p-body">
                        Try solving the following inequality.  For now, do the best you can and just treat it like a normal quadratic equation.  Once you've got your two 
                        solutions, you can stop there, and watch the video below to see how to handle the inequality part.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                        <strong>solve: </strong> <span style={{ color: "#5b92e5" }}><i>2x<sup>2</sup> - 6x + 2 &gt; -2</i></span>
                    </p>

                    <p className="p-body-small">
                        Just watch the work he shows for problem 1 for now.  Once he gets to the second problem that he works on, you can stop there.
                    </p>
                    
                    <div className="video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=XRlTsrDsHg8&t=207s"
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        All this stuff about utilizing the number line shown in the video, and finding x values that fulfill the inequality might sound new.  If all this 
                        is confusing, <i>please don't hesitate to reach out to us with any questions</i>.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        I don't know if you noticed, but the video above is divided into 10 parts.  We've only went over the "Problem #1" part.  For practice, try 
                        going through the rest of the 10 problems.  In all cases, you're still going to be solving quadratic inequalities.  I highly recommend attempting 
                        each problem first before watching the solution part.  When the initial problem is displayed at the beginning of each part, please pause the 
                        video and attempt the problem given.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        Create a simple diagram that shows the differences between solving a quadratic equation and solving a quadratic inequality.  Try doing a step by 
                        step demonstration for each kind.  You can even use the same quadratic; where one version is an equation, and the other version is an inequality.  
                    </p>

                    <p className="p-body-small">
                        As a bonus, try also showing the differences/similarities when factoring a quadratic equation versus an inequality (if there are any differences).
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default QuadraticInequalities