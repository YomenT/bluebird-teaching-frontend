import React from 'react';

import Logo from './Logo'
import Footer from './Footer'

class IntroToLinear extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to Linear Functions</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        While it is very likely that you've covered all about linear functions in current/previous math courses, we're going to break down linear 
                        functions piece by piece.  There are quite a few things to remember, so we're going to break this into chunks.  Below is what you'll need to 
                        be able to recall off the top of your head for now.  
                    </p>
                    <ul className="p-body-small" style={{ fontSize: "24px" }}>
                        <li>The <i>standard form</i> (or slope intercept form) of a linear function is <strong>y = mx + b</strong></li>
                            <ul className="p-body-small" style={{ fontSize: "17px" }}>
                                <li>The <strong>m</strong> represents the slope.</li>
                                <li>The <strong>b</strong> represents the y-intercept.</li>
                            </ul>
                        <li>The <i>slope</i> measures the steepness of a line.  It is also known as the rate of change.  Slope is also often defined 
                        as <sup>rise</sup>&frasl;<sub>run</sub>.</li>
                        <li> Below is the equation to find slope given two points</li>
                        <div class="frac">
                            <span className='top'>y<sub>2</sub> - y<sub>1</sub></span>
                            <span className="symbol">/</span>
                            <span className="bottom">x<sub>2</sub> - x<sub>1</sub></span>
                        </div>
                        <li>Like any other number, a slope can be positive or negative.</li>
                    </ul>
                    <img 
                        src={"https://i.ibb.co/8DRkJJn/Positive-Slope.png"}
                        alt="Positive Slope"
                        width={350}
                        height={350} />
                    <img 
                        src={"https://i.ibb.co/jMpqks0/Negative-Slope.png"}
                        alt="Negative Slope"
                        width={350}
                        height={350} />
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        1.  The slope of the line with the equation 2y - 2x = 10 is
                    </p>
                    <p className="p-body-small">Notice that you have to solve for y first to get the equation into standard form.</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) -1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 5</p>
                    <p className="p-body">
                        2.  What is the slope of a lines that goes through points (1, -2) and (-1, -4)?
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) -3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) -2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 4</p>
                    <p className="p-body-small">
                        The tricky part is that we won't always be given two points to find a slope like that.  In word problems, they're going to just give a 
                        bunch of information, and we're going to have to extract the two points from the information in the word problem.  Take a look at the 
                        example problem below and try it.
                    </p>
                    <p className="p-body">
                        3.  Will started a new job as a cashier at a nearby bakery where he gets paid at the end of everyday.  He noticed that after a 6 hour 
                        shift, he had $76.50 deposited into his bank account.  Then after a 8 hour shift, he noticed a deposite of $102.00.  What is Will's hourly 
                        wage at the bakery?  Assume that Will hasn't withdrawn any money.   
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) $10.00</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) $12.50</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) $12.75</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) $13.50</p>
                    <p className="p-body-small">
                        <i><strong>Take a second.</strong>  Do you have any questions?  Always feel free to reach out with any questions/concerns.</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        Try to think of a similar scenario to the last problem about Will.  Try to think of a situation like Will's that you could model using 
                        a linear equation.  I know we haven't talked much about the y-intercept yet, but try to identify a slope in a past experience.    
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default IntroToLinear