import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressionsInequalities extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Inequalities With Rational Expressions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        We've seen linear inequalities, quadratic inequalities, and now, we're going to see how to work with inequalities that contain rational expressions.
                    </p>

                    <p className="p-body-small">
                        Remember how in the previous lesson, when working with an equation that contained rational expressions, the outcome could be any type of 
                        equation after we've done some simplifying.  For example, we saw in the second image from the Equations With Rational Expressions lesson that the 
                        equation came out to be linear; while the equation in the first image came out to be quadratic.  This should show you that when it comes to working 
                        with inequalities that contain rational expressions, it's really going to fall under linear inequalities or quadratic inequalities.  See how a lot 
                        of things just build on each other?
                    </p>

                    <p className="p-body-medium">
                        Take a look at the image below to see what I mean.
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressionsInequalities