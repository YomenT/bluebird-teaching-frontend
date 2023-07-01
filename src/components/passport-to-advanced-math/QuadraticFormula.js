import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFormula extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Graphical Analysis of Quadratic Functions (Part 2)</h2>
                </div>
                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Remember how we talked about factoring being one way to finding the solutions or x-intercepts to a quadratic equation?  There 
                        is another method to get the same results; it's called the quadratic formula.  
                    </p>

                    <p className="p-body-small">
                        Why have two methods to produce the same result?  This is because a quadratic equation can't always be factored so easily.  For 
                        example, try factoring x<sup>2</sup> + 5x + 2 = 0.  
                    </p>

                    <p className="p-body-small">
                        You'll notice that there's no two whole numbers that you can think of that multiplies to get positive 2, and that also add to get 
                        positive 5.  This is the perfect example of when we might use the quadratic formula over factoring; even though they serve the same 
                        purpose.
                    </p>

                    <p className="p-body">
                        Below is the quadratic formula.  I know it looks a bit wacky, but we'll go through on how to actually use it.
                    </p>

                    <img 
                        src={"https://i.ibb.co/dM4xwyD/Quadratic-Formula1.png"}
                        alt="The Quadratic Formula"
                        width={325}
                        height={175} />

                    <p className="p-body" style={{ paddingTop: "30px" }}>
                        If you haven't caught it, all those variables (a, b, and c) all come straight from the quadratic equation that you're working with.  Remember 
                        that example equation I gave you earlier?  In x<sup>2</sup> + 5x + 2 = 0, the a value is 1, the b value is 5, and the c value is 2.  You just 
                        plug those values into the quadratic formula and solve for x.  
                    </p>

                    <p className="p-body">
                        That funny symbol right in front of the "-b" is actually representing a "+" sign and a "-" sign.  You'll see it in my work below, but remember how 
                        quadratic equations possibly have two solutions?  This is how we get our two solutions with the quadratic equation.  
                    </p>

                    <img 
                        src={"https://wikimedia.org/api/rest_v1/media/math/render/svg/6a1536aafb8b9a1e6eb3afb5a0982a65b7f63ca4"}
                        alt="The Two Solutions"
                        width={411}
                        height={61} />

                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                        <i>
                            If you aren't sure how I got those values for a, b, and c, please feel free to reach out and ask about it, or just reach out with 
                            any other qustions you might have.
                        </i>
                    </p>

                    <p className="p-body">
                        Below is my work shown to use the quadratic formula to solve x<sup>2</sup> + 5x + 2 = 0.
                    </p>

                    <img 
                        src={"https://i.ibb.co/M5yMXGb/Quadratic-Formula3.png"}
                        alt="Showing work"
                        width={550}
                        height={650} />

                    <p className="p-body" style={{ paddingTop: "30px" }}>
                        Obviously, it's not going to take that many steps every time; I just did every single thing one step at a time.  If you have a calculator handy, 
                        you can definitely do a lot of the steps together.  Just always be careful not to do any careless mistakes. 
                    </p>

                    <p className="p-body-small">
                        <i>
                            Again, if you aren't certain about any of the steps, calculations, and/or work we've done so far, always feel free to reach out with questions.
                        </i>
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body">
                        Some of these equations can be factored, but it would still be better for you to just use the quadratic formula for all of these.  Just to get more 
                        practice in.
                    </p>

                    <p className='p-body'>1.  -2x<sup>2</sup> + 10x - 1 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = -0.102 and x = 4.898</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = 0.102 and x = 4.898</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = -0.102 and x = -4.898</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 0.102 and x = -4.898</p>

                    <p className='p-body'>1.  x<sup>2</sup> - 17x - 60 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = 7 and x = 10</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = 8 and x = 19</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = -3 and x = 20</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = -9 and x = 5</p>

                    <p className='p-body'>1.  3x<sup>2</sup> + 10x + 2 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = -0.214 and x = -3.12</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = -2.2 and x = 0.21</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = -0.24 and x = 1.2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = -3.4 and x = 2.2</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        So far we've learned about factoring; now we've just learned about the quadratic formula.  Both are ways to do the same thing.  We're actually 
                        going to learn about a third method called "completing the square"; again this method still gets us the same results as the previous two methods.  
                    </p>

                    <p className="p-body">Why do we have 3 different ways of producing the same results?  We'll continue to learn more about the why.</p>

                    <p className="p-body-small">
                        If you haven't already, create a some sort of diagram (can be a PowerPoint, on regular paper, etc) explaining the steps to each approach; so far 
                        we have factoring and the quadratic formula.  We're going to add more to this diagram once we go over completing the square.  At the end of this 
                        diagram, have an explanation as to why using the quadratic formula might be necessary over using factoring to fin the x-intercepts in a quadratic 
                        equation.  
                    </p>

                    <p className="p-body-small"><i>As always, please let us know if you have any questions over the instructions, material, etc.</i></p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFormula