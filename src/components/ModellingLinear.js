import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class ModellingLinear extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Modelling Linear Equations</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        There are going to be a lot of word problems in the SAT that give you information on a scenario, and you will have to decide which equation 
                        best models the scenario.  This applies to linear, quadratic, and exponential equations, but we're going to look at modelling linear 
                        equations in this section.  <strong>Remember those bullet points from the last section?</strong>  Those are important here as well.
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body-small">
                        Remeber that last word problem we worked on where we had to identify two points to find the slope from given information?  There are going 
                        to be very similar problems here, but let's look at a word problem where the slope and y-intercept are already given; you just have to match 
                        them with the appropriate equation.
                    </p>
                    <p className="p-body">
                        1.  Amanda is driving her car at a constant speed of 45 miles per hour.  When she last checked, Amanda noticed that her car was already 
                        at 88,361 miles.  Which equation below models the total miles on her car as she continues to drive on this trip?
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) y = 45x - 88,361</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) y = 45x + 88,361</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) y = -45x + 88,361</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) y = -45x - 88,361</p>
                    <p className="p-body-small">
                        This question is cool and all, but the SAT isn't always going to just hand over the slope and y-intercept so easily.  Remember how we 
                        had to find the slope from two given points from a word problem?  We can have that same situation here.  Sure, that's something we did 
                        before, but how do we find the y-intercept?  If you already know, just go ahead and try the next problem.  If you're not so familiar, 
                        take a look at the picture below the next problem where I try to show my work (excuse my handwritting).  
                    </p>
                    <p className="p-body">
                        2.  Adam is making macaroons for his small business.  After 2 hours of work, Adam made 30 macaroons; after 5 hours of work, Adam had made 
                        a total of 72 macaroons.  Which of the following equations below best models this situation?
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) y = 14x - 2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) y = -14x - 2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) y = -14x + 2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) y = 14x + 2</p>
                    <img 
                        src={"https://i.ibb.co/TMwRCrt/Modelling-Explanation.png"}
                        alt="Modelling Explanation"
                        style={{ width: "40%" }} />
                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        <i><strong>Question:  </strong> What does the 2 represent?  How can you interpret the 2 in context with the information in the problem?</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body">
                        Create an explanation that examines the context of y-intercepts in word problems.  Just as a hint, think of how y-intercepts are used in 
                        word problems to give the "inital amount".  Feel free to reach out to use for any clarification or help, or ask your math teacher from 
                        your school for help.  Google is another option, but that is a vast ocean!    
                    </p>
                    <p className="p-body-small" style={{ marginBottom: "150px" }}>
                        You can use various ways to create your explanation.  It can be a written explanation, a video, etc.  Get creative about this!  Whatever 
                        method you choose, we would love to see it!  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ModellingLinear