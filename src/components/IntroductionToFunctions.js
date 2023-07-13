import React from "react";

import Logo from './Logo'
import Footer from './Footer'

class IntroductionToLinearFunctions extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to Functions</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingBottom: "25px", paddingTop: "25px" }}>
                        <strong>Definition: </strong> A function is just a relation where one x value corresponds to exactly one y value.
                    </p>
                    <p className="p-body-small">
                        The best way to demonstrate this is by using the vertical line test.  Much like a lot of content covered in the Heart of Algebra, it's 
                        that thing that you learned way back but haven't used in a while.  Basically, if you can draw vertical lines all across a coordinate plane, 
                        and each line only crosses the graph once, then the graph does indeed represent a function.
                    </p>
                    <p className="p-body-small">
                        I'm not the best artist, but I drew an example of this below.  Notice how in the first picture, each dotted line only crosses the 
                        graph once.
                    </p>
                    <img 
                        src={"https://i.ibb.co/rmjtXtc/pdfresizer-com-pdf-crop-1.png"}
                        alt="Vertical Line Test"
                        style={{ width: "30%" }} />
                    <p className="p-body-small" style={{ paddingTop: "10px" }}>
                        However, if we look at the drawing below, most of the dotted lines cross the graph twice.  It really only takes one vertical line to 
                        cross twice for the test to fail.  Therefore, this graph does not represent a function.
                    </p>
                    <img 
                        src={"https://i.ibb.co/Jrhw0Lm/Vertical.png"}
                        alt="Vertical Line Test Fail"
                        style={{ width: "30%" }} />
                    <p className="p-body-small" style={{ paddingTop: "50px" }}>
                        <i><strong>Question: </strong> Is a circle a function?</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        Circle the answer choice below that does not represent a function.
                    </p>
                    <p className="p-body-small">
                        A)
                    </p>
                    <img 
                        src={"https://i.ibb.co/0svShwz/Quadratic.png"}
                        alt="Quadratic"
                        style={{ width: "12%" }} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                        B)
                    </p>
                    <img 
                        src={"https://i.ibb.co/hB3wLmJ/Not-Function.png"}
                        alt="Not a Function"
                        style={{ width: "12%" }} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                        C)
                    </p>
                    <img 
                        src={"https://i.ibb.co/T2TGxr1/Linear.png"}
                        alt="Linear"
                        style={{ width: "12%" }} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                        D)
                    </p>
                    <img 
                        src={"https://i.ibb.co/RDBBgKm/Step.png"}
                        alt="Step"
                        style={{ width: "12%" }} />
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body">
                        Now that you've seen a sample problem involving functions and the vertical line test, try to create your own example problem.  This 
                        example problem can be multiple choice just like the one you did, it can be a "select all that apply" type of question, etc.  Get 
                        creative with this step!  
                    </p>
                    <p className="p-body-small">
                        <i>Maybe try formulating an example problem that addresses that earlier question about circles?</i>
                    </p>
                    <p className="p-body-small" style={{ paddingTop: "25px", marginBottom: "150px" }}>
                        Feel free in getting creative with testing it too.  Try sharing this problem with a family member, a friend, or even your math teacher.  
                        You're always free to share the problem with us, too!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default IntroductionToLinearFunctions