import React from "react";
import "../css/QuadraticFunction.css"

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunction extends React.Component {

    maximumHeightUrl = "https://www.youtube.com/watch?v=s3L__Mi79Ho"

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Closer Look at Quadratic Functions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Let's take a deeper look into quadratic functions.  Some of this stuff is going to be new; some of this is going to be review.  
                        Let's start with what we've learned so far about quadratic functions.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Standard Form: </strong> <span style={{ color: "#5b92e5" }}><i>y = ax<sup>2</sup> + bx + c</i></span>
                    </p>
                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Vertex Form: </strong> <span style={{ color: "#5b92e5" }}><i>y = (x - h)<sup>2</sup> + k</i></span>
                    </p>

                    <p className="p-body-small">
                        <b>Here is what we already know.</b>
                    </p>

                    <ul className="p-body">
                        <li>The "c" term represents the y-intercept.</li>
                        <li>If "a" is positive, the graph opens upward; if b is negative, the graph opens downward.</li>
                        <li>The "a" value also controls wide or narrow the parabola is going to be.</li>
                            <ul>
                                <li>If the "a" value is smaller than 1 but bigger than 0, then the parabola opens wider than normal.</li>
                                <li>If the "a" value is bigger than 1, then the parabola opens narrower than normal.</li>
                            </ul>
                    </ul>

                    <img 
                        src={"https://i.ibb.co/xX1sTRh/Quadratic-Function1.jpg"}
                        alt="a Value Impact"
                        className="center-image"
                        style={{ paddingTop: "50px", paddingBottom: "50px", width: "60%", minWidth: "250px", height: "auto"}}
                        width={400}
                        height={300} />

                    <p className="p-body-small">
                        <b>Here is what might come as new.</b>
                    </p>

                    <p className="p-body-small">
                        From the equation being in standard form, we can use a little formula to quickly find the axis of symmetry.  For 
                        a parabola, the axis of symmetry is a vertical line right at the vertex.  Below is the formula we use to find the 
                        axis of symmetry (given the quadratic equation is in standard form), and a picture showing what the axis of symmetry 
                        looks like.  <i>Please forgive my awful drawing skills.</i>
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Axis of Symmetry: </strong> <span style={{ color: "#5b92e5" }}><i>x = <sup>-b</sup>&frasl;<sub>2a</sub></i></span>
                    </p>

                    <img 
                        src={"https://i.ibb.co/4Mfddbz/Quadratic-Function2.jpg"}
                        alt="Axis of Symmetry"
                        className="center-image"
                        style={{ paddingTop: "50px", paddingBottom: "50px", width: "60%", minWidth: "250px", height: "auto"}}
                        width={300}
                        height={450} />

                    <p className="p-body-small">
                        The dashed line cutting the parabola in the middle is the axis of symmetry.  It makes both sides of the graph symmetrical.  
                        Not sure if you can read my handwriting, but if the vertex is at (3, -2), then the axis of symmetry can be represented by 
                        the line x = 3.
                    </p>

                    <p className="p-body-small">
                        There are a couple of other things worth taking note of.
                    </p>

                    <ul className="p-body">
                        <li>The sum of the roots can be found by computing <sup>-b</sup>&frasl;<sub>a</sub>.</li>
                        <li>The product of the roots can be found by computing <sup>c</sup>&frasl;<sub>a</sub>.</li>
                    </ul>

                    <p className="p-body-small">
                        I know these might seem like very odd facts to know about quadratics, but the reason I'm sharing them with you is because there 
                        might be questions that require you know know these couple of odd facts.  I know it seems stupid memorizing these odd facts, but 
                        it's really worth your time.  
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        These questions seem different; maybe even harder?  That's because some of the following questions are very good examples of 
                        real SAT questions you might face.  We'd be very interested in hearing how these questions go for you.  Were they very hard, got 
                        completely stuck, or they were actually easy?
                    </p>

                    <p className='p-body'>1.  Which of the following could be the graph for <i>y = x<sup>2</sup> + 3x + k</i> where <i>k</i> is an integer?</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/BykXMjt/Quadratic-Function3.png"}
                        alt="Answer Choice 1"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/SsLp19q/Quadratic-Function4.png"}
                        alt="Answer Choice 2"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/bKdRdNV/Quadratic-Function5.png"}
                        alt="Answer Choice 3"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/Nm0Cf8b/Quadratic-Function6.png"}
                        alt="Answer Choice 4"
                        width={200}
                        height={200} />

                    <p className='p-body' style={{ paddingTop: "25px" }}>2.  Which function below would have a double root?</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  y = x<sup>2</sup> - 4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  y = x<sup>2</sup> + x + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  y = x<sup>2</sup> + 6x + 9</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  y = x<sup>2</sup> + 4x - 4</p>

                    <p className='p-body'>3.  Which of the following could be the graph for <i>ax<sup>2</sup> + bx + c</i>; if <i>a</i>, <i>b</i>, and <i>c</i> are all negative and <i>a</i> is not 0.</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/6gyWX1w/Quadratic-Function9.png"}
                        alt="Answer Choice 1"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/KLshGJL/Quadratic-Function7.png"}
                        alt="Answer Choice 2"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/2jptpkN/Quadratic-Function8.png"}
                        alt="Answer Choice 3"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/ykcRgK2/Quadratic-Function10.png"}
                        alt="Answer Choice 4"
                        width={200}
                        height={200} />

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body-small">
                        Like a lot of other concepts, the SAT math portion isn't going to have questions that outright ask you to solve for the axis of symmetry, convert 
                        from standard form to vertex form, etc.  They're going to try to think of clever little ways to assess these skills.  
                    </p>

                    <p className="p-body">
                        Try to think of a clever way yourself they might ask you questions in the math portion.  Try coming up with a sample question you might see.
                    </p>

                    <p className="p-body-small">
                        If you are stuck, try watching <a href={this.maximumHeightUrl} target={"_blank"} style={{ color: "#5b92e5" }} 
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this video</a>.  This is a perfect example of a question you might see.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunction