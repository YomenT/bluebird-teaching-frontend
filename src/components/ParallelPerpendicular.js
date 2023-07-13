import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class ParallelPerpendicular extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Parallel and Perpendicular Lines</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Let's expand what we know about linear equations to address another group of questions involving them.  The Heart of Algebra will have 
                        some questions that target specific knowledge about linear equations: relationships between parallel and perpendicular lines.  Think to 
                        yourself about this for a second: if I have 2 linear equations, in terms of slope and y-intercept, what would make them parallel to each 
                        other if I were to graph them?  Any assumptions you can make about two perpendicular lines?
                    </p>
                    <p className="p-body-small">
                        <strong>To break this down, let's first look at two parallel lines</strong>.  Two parallel lines means that the <strong>slopes</strong> of 
                        the two linear equations <strong>are the same</strong>, and the <strong>y-intercepts</strong> are <strong>different</strong>.
                    </p>
                    <p className="p-body-small">
                        <strong>Now let's consider perpendicular lines</strong>.  Two lines that are perpendicular don't have any correlation when it comes to 
                        y-intercepts, but their <strong>slopes</strong> are going to be <strong>opposite and reciple</strong>.  <i>What does this mean?</i>  This means that if one 
                        line has a slope of 3/4, the other line has to have a slope of -3/4 to be perpendicular.  
                    </p>
                    <p className="p-body-small">
                        Remeber, you're always welcome to ask any questions.  This is some important stuff, so it's good to clear up any questions/concerns!  
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        1.  Consider the equation y = 5x - 3.  Write one possible parallel equation and one possible perpendicular equation.  
                    </p>
                    <p className="p-body-small">
                        Do not overthink this!  Think of what we talked about earlier and try it.  Start with parallel if you're stuck.  There are many possible 
                        parallel equations, but just try to come up with one.  Take a look below once you've found an answer or you're stuck.
                    </p>
                    <p className="p-body-small">
                        Possible parallel equations:
                    </p>
                    <ul className="p-body">
                        <li>y = 5x - 1</li>
                        <li>y = 5x + 3</li>
                        <li>y = 5x - 5</li>
                        <li>y = 5x + 1000</li>
                    </ul>
                    <p className="p-body-small">
                        Just any equation with the same slope works.  Just as long as the slope is the same, and the y-intercept is different, then the lines are 
                        parallel.
                    </p>
                    <p className="p-body-small">
                        <i><strong>Question:  </strong> What if both the slope and y-intercept are the same?</i>
                    </p>
                    <p className="p-body-small">
                        Possible perpendicular equations:
                    </p>
                    <ul className="p-body">
                        <li>y = -x/5 - 3</li>
                        <li>y = -x/5 + 3</li>
                        <li>y = -x/5 + 1</li>
                        <li>y = -x/5</li>
                    </ul>
                    <p className="p-body-small">
                        Any equation with the opposite and reciprical slope works.  The y-intercept can be the same or different.
                    </p>
                    <p className="p-body">
                        2.  Consider the system of linear equations below.  
                    </p>
                    <img 
                        src={"https://i.ibb.co/y4f12X8/Perpendicular-Problem-Crop.png"}
                        alt="Perpendicular System of Linear Equations"
                        style={{ width: "30%" }} />
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        What value of a in the second equation would make these two lines perpendicular to each other?
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) -5/2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) -2/5</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 5/2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 2/5</p>
                    <p className="p-body-small">
                        <i><strong>Question:  </strong> What value of a would make the two lines parallel?</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body">
                        Create a system of linear equations where the two equations are exactly the same; same slope and same y-intercept.  What does this mean?  
                        If you don't already, do some research.  Do a quick Google search or ask your math teacher about this.  You can always ask us too!     
                    </p>
                    <p className="p-body-small" style={{ marginBottom: "150px" }}>
                        Once you've reached an understanding, write out a short explanation and email it to us!  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ParallelPerpendicular