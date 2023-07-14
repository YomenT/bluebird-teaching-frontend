import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunctionGraphicalAnalysis extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Graphical Analysis of Quadratic Functions (Part 1)</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        We're going to look more into what quadratic equations look like when they are graphed.
                    </p>

                    <p className="p-body-small">
                        Specifically, we're going to look at how different operations on a quadratic function change how the graph would look.  We've looked at graphing 
                        quadratics using vertex form, but this time we're just going to do a graphical analysis; for example, what graphical 
                        difference would there be between x<sup>2</sup> + 1 = y and -x<sup>2</sup> + 1 = y?  Basially we're going to learn what assumptions we can make 
                        on how a graph of a quadratic equation might look based on certain features in its standard form.
                    </p>

                    <p className="p-body-small"><strong><i>Why are the equations set to y and not 0?</i></strong>  Simply put, when we are factoring/solving, we get all the x's on one side, 
                    and we set the equation equal to 0.  When we are graphing, we still move all the x's to one side, but we set the equation equal to y.</p>

                    <p className="p-body">
                        Take a look at the graphs below; let's analyze the difference(s).
                    </p>

                    <p className="p-body">
                        x<sup>2</sup> + 1 = y
                    </p>

                    <img 
                        src={"https://i.ibb.co/jzrjpK7/Graphical-Analysis1.png"}
                        alt="Graphical Analysis 1"                
                        style={{ width: "30%", minWidth: "250px", height: "auto"}}
                    />

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        -x<sup>2</sup> + 1 = y
                    </p>

                    <img 
                        src={"https://i.ibb.co/Fzz76Xh/Graphical-Analysis2.png"}
                        alt="Graphical Analysis 1"
                        width={350}
                        height={350}
                        style={{ width: "30%", minWidth: "250px", height: "auto"}}
                    />

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        There is only one difference.  The one that had a positive x<sup>2</sup> opened upward, and the one with a negative x<sup>2</sup> opened downward.  Let's 
                        break this down.
                    </p>

                    <p className="p-body-small">
                        Remember the standard form we learned about in the last lesson (ax<sup>2</sup> + bx + c = 0)?  In the equations we used, there is no "bx", but that's not 
                        needed; we'll get into its importance later.  Whether "bx" is there or not, if the "a" value is positive, the graph opens upward; if the "a" value is 
                        negative, the graph opens downward.
                    </p>

                    <p className="p-body">
                        What about the "c" value?
                    </p>

                    <p className="p-body-small">
                        The "c" value dictates the y intercept of the graph (vertex).  In the example equation, the "c" value is 1, so the y intercept is 
                        right at y = 1 or (0, 1).  If we had the same exact equation, but the "c" value was -4, the y intercept would be at y = -4 or (0, -4).  It just 
                        so happened that the vertex and y intercept are at the same place.  That's not always the case.
                    </p>

                    <p className="p-body-small">
                        <i>What about horizontal positioning of the vertex?  Will the x value of the vertex always be 0?</i>  No, the x value is not always 0 for the vertex.  
                        It's just that in this example equation above, the x value of the vertex is 0.  If we had a "bx" term, then the vertex would not be on the y axis anymore.  
                        Don't worry about that for now though; we'll get to that later.  All you have to know for now is that a "bx" term will shift the center of the graph of 
                        the y axis (moving it right or left).
                    </p>

                    <p className="p-body-small">
                        The important takeaways from this lesson are the effects of positive/negative "a" values, and the effects of positive/negative "c" values.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className='p-body'>1.  Which of the following represents the graph for -x<sup>2</sup> - 5 = y?</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/6nK08zq/Graphical-Analysis-Answer1.png"}
                        alt="Answer Choice 1"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/YBpbqsF/Graphical-Analysis-Answer2.png"}
                        alt="Answer Choice 2"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/WtYJJyq/Graphical-Analysis-Answer3.png"}
                        alt="Answer Choice 3"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/NYW3h8z/Graphical-Analysis-Answer4.png"}
                        alt="Answer Choice 4"
                        width={250}
                        height={250} />

                    <p className='p-body' style={{ paddingTop: "25px" }}>2.  Which of the following could possibly represent the graph for x<sup>2</sup> - x + 2 = y?  There are two possible answers.</p>
                    <p className="p-body-small">
                        <i>I know we haven't really talked about the bx value yet, but just use waht you know to try to guess the matching graph.</i>  I know that there is really only one 
                        matching graph for the above equation, but if you're to only use what you know about the impacts of the "a" and "c" values, which two graphs below could match the above 
                        equation?
                    </p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/26FswcD/Graphical-Analysis-Answer5.png"}
                        alt="Answer Choice 1"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/9ysFSHH/Graphical-Analysis-Answer6.png"}
                        alt="Answer Choice 2"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/MR452mj/Graphical-Analysis-Answer7.png"}
                        alt="Answer Choice 3"
                        width={250}
                        height={250} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/5jWzJMY/Graphical-Analysis-Answer8.png"}
                        alt="Answer Choice 4"
                        width={250}
                        height={250} />

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        The correct answer to number 2 in the Try It section is answer choice C.  Try to develop some sort of explanation or pattern for this.  
                    </p>

                    <p className="p-body-small">
                        You're probably going to need more "test data" before you start seeing a trend; to better create some sort of explanation/pattern.  Below are some instructions for you.  Just 
                        keep in mind that as you type them, try to analyze any pattern you see to try to explain how the bx term effects the graph.
                    </p>

                    <ol className="p-body">
                        <li>Click <a href="https://www.desmos.com/calculator" style={{ color: "#5b92e5" }}>here</a> to go to an online graphing calculator.</li>
                        <li>
                            Type the quadratic equations below to the left of the page.  Every time you type in a quadratic equation, you'll see the graph come up on the right.  I recommend you type the equations in one at a 
                            time.  It might get a little messy if you type in the equations all together.  Also, feel free to just copy and paste.
                        </li>
                        <ul>
                            <li>x<sup>2</sup> - 3x - 1 = y</li>
                            <li>x<sup>2</sup> + 3x - 1 = y</li>
                            <li>x<sup>2</sup> - x + 5 = y</li>
                            <li>x<sup>2</sup> + x + 5 = y</li>
                        </ul>
                    </ol>

                    <p className="p-body">
                        After you've done your visual analysis of the graphs, try to formulate some explanation as to how the bx term impacts the graph.  Does it cause the graph to shift up, down, left, right, etc?  Does it cause the 
                        bell curve to widen or get more narrow?  How does it possibly do those things?  Once you've come up with your explanation, feel free to share it with us!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis