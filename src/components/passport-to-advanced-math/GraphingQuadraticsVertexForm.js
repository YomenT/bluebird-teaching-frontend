import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class GraphingQuadraticsVertexForm extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Graphing Quadratics Using Vertex Form</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-small">
                        Regardless of what form your quadratic equation is, what if we want to graph that quadratic?  Well, just like 
                        with linear equations, we need to get the equation into a specific form to graph them.  For linear equations, it was 
                        slope-intercept form; for quadratic equations, it is going to be vertex form.  This is why we practiced converted to 
                        vertex form in the previous lesson.
                    </p>

                    <p className="p-body">Take a look at the video below.</p>

                    {/* In house video needed here. */}

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-medium">
                        This Try It section is going to be a tad bit different.  Instead of the usual multiple choice, you're going to graph 
                        the quadratics as neatly as possible, take a picture, and send them to us.  You can found our email by clicking the 
                        "Contact Us" button at the bottom right of this page.  Be sure to attach the images of your graph to your email.
                    </p>

                    <p className="p-body">1.  Graph <i>y = 3(x + 1)<sup>2</sup> - 2</i></p>

                    <p className="p-body">2.  Graph <i>y = -(x + 6)<sup>2</sup> + 2</i></p>

                    <p className="p-body">3.  Graph <i>y = -(x - 1)<sup>2</sup> + 4</i></p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        Create a diagram that compares graphing linear equations and quadratic equations.  Be sure to specify certain requirements 
                        for each: form, steps, etc.
                    </p>

                    <p className="p-body-small">
                        If you like, you can also share this in your email containing the answers to the Try It section.
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default GraphingQuadraticsVertexForm