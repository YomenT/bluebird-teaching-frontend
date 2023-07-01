import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunctionPart1 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to The Quadratic Function</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        The SAT covers quite a bit of ground when it comes to quadratics.  You'll have questions related to graphing quadratics, factoring 
                        quadratics (trinomials, binomials, etc), solving quadratics, etc.  
                    </p>

                    <p className="p-body">
                        The graph of a quadratic function looks like a "bell curve".  Below are just a few examples.
                    </p>

                    <img 
                        src={"https://i.ibb.co/dLCzYHH/Screenshot-3.png"}
                        alt="Sample Quadratic Equation Graph"
                        width={350}
                        height={350} />

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Quadratic functions also have a standar form of: <strong>ax<sup>2</sup> + bx + c = 0</strong>
                    </p>

                    <p className="p-body-small">
                        A, b, and c are all constants.  Below are example quadratic equations in standard form.
                    </p>

                    <ul className="p-body">
                        <li>x<sup>2</sup> - x + 1 = 0</li> 
                        <li>x<sup>2</sup> + 1 = 0</li>
                        <li>4x<sup>2</sup> + 4x + 10 = 0</li>
                        <li>43x<sup>2</sup> + 6x - 22 = 0</li>
                    </ul>

                    <p className="p-body-small">
                        Below are examples of quadratic equations that are <strong>not</strong> in standard form.
                    </p>

                    <ul className="p-body">
                        <li>x<sup>2</sup> + 4x = -1</li>
                        <li>-34x<sup>2</sup> = 67 - x</li>
                        <li>9 = x<sup>2</sup></li>
                    </ul>

                    <p className="p-body-small">
                        If an equation is not in standard form, we simply have to move things around until it is.  Take a look at the picture below that shows 
                        a demonstration of this.
                    </p>

                    <img 
                        src={"https://i.ibb.co/3RvFkDf/Standard-Form1.png"}
                        alt="Standard Form"
                        width={350}
                        height={350} />

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className='p-body'>1.  Which of the following represent a graph of a possible quadratic function (Select all that apply)?</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/wSYnzm4/Quadratics-Answer2.png"}
                        alt="Answer Choice 1"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/6JhkCBV/Quadratics-Answer3.png"}
                        alt="Answer Choice 2"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/h8NtMB7/Quadratics-Answer1.png"}
                        alt="Answer Choice 3"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/rF4Lqzb/Quadratics-Answer4.png"}
                        alt="Answer Choice 4"
                        width={200}
                        height={200} />

                    <p className="p-body" style={{ paddingTop: "25px" }}>2.  Which of the following quadratic equations are written in standard form (Select all that apply)?</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>A)  4x<sup>2</sup> - 4 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>B)  8x - 4 + 3x<sup>2</sup> = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>C)  79x<sup>2</sup> - 1 + x = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>D)  x<sup>2</sup> - x = 0</p>

                    <p className="p-body">3.  Which choice shows the following quadratic equation written in standard form: 6 - 3x = -x<sup>2</sup></p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>A)  -x<sup>2</sup> + 3x - 6 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>B)  x<sup>2</sup> + 3x - 6 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>C)  -x<sup>2</sup> - 3x + 6 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%" }}>D)  x<sup>2</sup> - 3x + 6 = 0</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        Formulate an explanation as to why answer choice A from number 1 in the Try It section is not correct.  
                    </p>

                    <p className="p-body-small" style={{ marginBottom: "150px" }}>
                        This explanation can be written, verbal, or whatever other method you'd like.  Always feel free to share it with use, too!  <i>If you're stuck, 
                        try reviewing the very first section under Heart of Algebra: Introduction to Functions.</i>
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionPart1