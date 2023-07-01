import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class CompletingTheSquare extends React.Component {

    khanAcademyUrl = "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:more-on-completing-square/a/solving-quadratic-equations-by-completing-the-square"
    brainfuseUrl = "https://www.brainfuse.com/jsp/alc/resource.jsp?s=gre&c=35261&cc=108824"

    underlineLink(e) {
        e.target.style.textDecoration = "underline"
    }

    removeUnderline(e) {
        e.target.style.textDecoration = "none"
    }
    
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Completing the Square</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        We've covered factoring and the quadratic formula, and we mentioned that they both achieve the same results 
                        (finding the x-intercepts).  Factoring goes through the process of finding the factors of that quadratic 
                        equation, but if that's not very easy because they're not clean whole numbers, we use the quadratic formula.  
                        Completing the square is yet a third way to find the x-intercepts of a quadratic equation.  While I'm going to 
                        teach you this method, it's actually rarely used for that purpose.  It's hard to explain right now.  For now, 
                        I'm just going to teach you how to use it to find the x-intercepts; just like factoring and the quadratic 
                        formula.
                    </p>

                    <p className="p-body">
                        In this lesson, we're going to look at completing the square; our last method to finding the x-intercepts (or solving) 
                        for a quadratic equation.  Watch <a href="https://www.youtube.com/watch?v=xGOQYTo9AKY" target={"_blank"} style={{ color: "#5b92e5" }} 
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this video</a> to see an example of how this is done.
                    </p>

                    <p className="p-body">
                        Prefer reading about it?  Try <a style={{ color: "#5b92e5" }} target={"_blank"} href={this.khanAcademyUrl}
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this resource</a> from Khan Academy, or 
                        try <a style={{ color: "#5b92e5" }} href={this.brainfuseUrl} target={"_blank"} 
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this resource</a> from Brainfuse.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body">
                        Remember to solve each of these quadratic equations using completing the square only.
                    </p>

                    <p className='p-body'>1.  Find the x-intercepts for x<sup>2</sup> + 15x + 56 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = 10 and x = -6</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = 4 and x = -11</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 8 and x =6</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = -7 and x = -8</p>

                    <p className='p-body'>2.  Find the x-intercepts for x<sup>2</sup> + 8x + 15 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = 3 and x = -5</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = -3 and x = -5</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 5 and x = 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 5 and x = -3</p>

                    <p className='p-body'>3.  Find the x-intercepts for x<sup>2</sup> + 8x - 9 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x = -1 and x = -9</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x = 2 and x = 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 1 and x = -9</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 1 and x = 9</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body">
                        Add what you've learned about completing the square to the diagram that you created in the previous lesson.  
                        Add things like the steps in completing the square, and also maybe add an example or two.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CompletingTheSquare