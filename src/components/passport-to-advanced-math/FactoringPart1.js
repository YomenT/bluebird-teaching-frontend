import React from "react";
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class FactoringPart1 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Factoring Part 1: Factoring Trinomials</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        You've probably heard of factoring before, but I think that a lot of people learn to use factoring, but they don't really know the 
                        why behind it.  What's the purpose of factoring?  What are values, zeros, and solutions?  Do they mean the same thing?
                    </p>

                    <p className="p-body-small">
                        First off, we use factoring to solve a quadratic equation; usually the equation is also a polynomial (not always).  Why do we 
                        want to solve a quadratic equation?  When we solve a quadratic equation, we are finding the x-intercepts; the two parts of the 
                        quadratic graph that cross the x axis. 
                    </p>

                    <img 
                        src={"https://i.ibb.co/zPgXYBz/Factoring1.png"}
                        alt="Function Notation"
                        width={600}
                        height={550} />

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        To find the x-intercept in a linear equation, we set y equal to zero.  We're doing the exact same thing when we factor.  We 
                        solve the equation for y, set the whole equation equal to zero, and we factor.  That's why "solutions" to a quadratic equation 
                        means the same thing as the x-intercepts.  When you use factoring to solve a quadratic equation, you are also finding the 
                        x-intercepts.
                    </p>

                    <p className="p-body-small">
                        Keep in mind that factoring is actually just one way of solving quadratic equations.  There are two other ways: the quadratic formula, and 
                        another method called "completing the square".  We'll learn more about those two later.  There are three methods in total; again, all for 
                        the same purpose of solving a quadratic equation.
                    </p>

                    <p className="p-body">Enough with the theory, let's see how factoring is actually done.</p>

                    <p className="p-body-small">
                        Let's start by watching the video below.  For those of you that are already pretty comfortable with facotring, feel free to go on to 
                        the Try It problems right after.  For those of you that want a little bit more of a breakdown/explanation, feel free to look at the material 
                        after the video below and before the Try It section.
                    </p>

                    <div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=-4jANGlJRSY&t=1s"
                        />
                    </div>

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        In the video, the speaker goes through many examples you might encounter when factoring a trinomial.  However, try to make a summary of this video.  Try 
                        to think of a set of steps you'd use to summarize factoring a trinomial.  You'll actually be doing this in the Create It section too.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        Some of the questions are going to ask you to factor, and some of them are going to ask you to solve.  When in doubt, use the answer choices to guide 
                        you, but factoring means just finding the factors, and solving means finding the x-intercepts.  Answer choices that involve solving would look like 
                        "x = some number".
                    </p>

                    <p className='p-body'>1.  Factor the trinomial: x<sup>2</sup> - 14x + 49</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  (x + 7)(x + 7)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  (x - 7)(x - 7)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  (x + 7)(x - 7)</p>

                    <p className='p-body'>2.  Solve the following quadratic equation for the x-intercepts: 2x<sup>2</sup> - 14x + 24</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = -3 and x = 4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = 3 and x = -4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = -3 and x = -4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 3 and x = 4</p>

                    <p className='p-body'>2.  Factor the trinomial: 6x<sup>2</sup> + 11x - 10</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  (-3x - 2)(2x + 5)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  (3x + 2)(2x - 5)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  (3x - 2)(2x + 5)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  (3x - 2)(-2x + 5)</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        If you didn't already, go back and try to create your own set of steps to factoring.
                    </p>

                    <p className="p-body-small">
                        Try to take different cases into consideration.  What if the first value in the front is greater than one?  Does it change anything if the 
                        value in the front is negative?  As a bonus, consider if the quadratic equation looked a little different that what we've seen in the sample 
                        problems.  What if the quadratic equation in the question looked like x<sup>2</sup> + 49 = 14?
                    </p>

                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        Once you've got your set of steps, feel free to share them with us for feedback!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FactoringPart1;