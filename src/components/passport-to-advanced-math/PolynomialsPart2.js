import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class PolynomialsPart2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Polynomials Part 2: Adding/Subtracting Monomials, Binomials, and Polynomials</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        We're going to be doing what we did in the last section; with just one added step, so this section shouldn't be too hard.    
                    </p>

                    <p className="p-body-small">
                        If you're still having any trouble at all with combining like terms (the previous section), I would try to focus on that for a bit 
                        more for now.  Combining like terms is an essential foundational skill.  A lot of future lessons will use combining like terms in 
                        some way.  Gotta make sure your foundation is strong before building on it.  Always reach out if you need any help!
                    </p>

                    <p className="p-body">
                        The one added step I mentioned is going to be at the beginning of the problem.  The important thing here is to just not 
                        overthink this.  We're going to see what happens when we add/subtract a set of two terms (a binomial) with another set of two terms, add/subtract 
                        just one term (a monomial) with a set of three terms (a trinomial/polynomial), etc.
                    </p>

                    <p className="p-body">
                        Let's take a look at the image below.
                    </p>
                    
                    <p className="p-body-small">
                        The original question is in yellow, and the final answer is in blue.
                    </p>
                    <ol className="p-body">
                        <li>
                            Since the two sets of terms in parenthesis are being added, we can actually just drop the parenthesis around all of the sets of terms; 
                            we keep all of the signs the same.
                        </li>
                        <li>That was the added step at the beginning that we mentioned.  From here, we combine like terms like we're used to.</li>
                        <li>The only like terms are the 3x and -2x.</li>
                        <li>
                            Combining them (subtracting them because of the negative in front of the 2x) gives us our final answer of just x + y.  There's nothing 
                            more that we can combine.
                        </li>
                    </ol>

                    <img 
                        src={"https://i.ibb.co/q9M24cN/Adding-Polynomials2.png"}
                        alt="Function Notation"
                        width={350}
                        height={350} />


                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Now let's look at another question.  Instead of adding sets of terms, we're gonna try subtracting.
                    </p>

                    <p className="p-body-small">
                        Again, original question is in yellow, and the final answer is in blue.
                    </p>
                    <ol className="p-body">
                        <li>
                            <strong>This time, we can't just drop the paranthesis</strong>.  Think of it as almost having another added step.
                        </li>
                        <li>
                            You have to actually distribute the minus sign to each value inside the following paranthesis.  Think of it as multiplying everything within the 
                            following paranthesis by -1.
                        </li>
                        <li>Once the negative sign in front of the parenthesis has been distributed, combine like terms as you normally would.</li>
                    </ol>

                    <img 
                        src={"https://i.ibb.co/YNYnSWh/Adding-Polynomials3.png"}
                        alt="Function Notation"
                        width={425}
                        height={350} />

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        Always remember you can reach out for any help through the email in "Contact Us" at the bottom right of this page :)
                    </p>

                    <p className='p-body'>1.  (7y - y) + (3x - 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  8y + 3x + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  6y + 3x + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  8y + 3x - 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  6y + 3x - 1</p>

                    <p className='p-body'>2.  4x - (3y + 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  4x - 3y + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  4x + 3y + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  4x + 3y - 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  4x - 3y - 1</p>

                    <p className="p-body">3.  (12y - x) - (2x + 3y)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  9y - 3x</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  9y + x</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  15y - 3x</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  15y + x</p>

                    <p className="p-body">4.  (x - y) - (4x - y + 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  -5x + 2y -1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  -3x - 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  5x - 2y + 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  -3x + y - 1</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    
                    <p className="p-body">
                        We just learned about adding and subtracting polynomials.  Up next is multiplying polynomials.  
                    </p>

                    <p className="p-body-small" style={{ marginBottom: "150px" }}>
                        Since we're learning about polynomials in parts like this, I think it might be a nice idea to create a sort of summary of what we've learned in 
                        this section; we'll continue to add to it in the next section on multiplying polynomials.  You can get creative in creating this summary: it can 
                        be an infographic, a paragraph on a paper, a verbal summary, etc.  Just try to at least mention the steps to adding and subtracting polynomials 
                        somewhere in your summary.  Once you've done it, please feel free to share it with us!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PolynomialsPart2