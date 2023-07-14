import React from 'react'

import Logo from '../Logo'
import Footer from '../Footer'

class FactoringPart2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Factoring Part 2: Difference of Perfect Squares</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className='p-body-small' style={{ paddingTop: "25px" }}>
                        Previously, we looked at how to find solutions (x-intercepts) for a quadratic equation.  It just so happened that all the equations involved in the previous section 
                        were trinomials.  This won't always be the case...
                    </p>

                    <p className='p-body'>
                        In addition to seeing quadratics in the form of trinomials, you'll also see them as binomials (in future math classes and the SAT).
                    </p>

                    <p className='p-body'>
                        If I just asked you to solve for x in the equation: x<sup>2</sup> - 16 = 0, you might think to just solve for x like you'd solve any other one variable equation, and that's absolutely 
                        right.  
                    </p>

                    <img 
                        src={"https://i.ibb.co/nDm1QWB/Factoring2.jpg"}
                        alt="Function Notation"
                        width={350}
                        height={350} 
                        style={{ width: "30%", minWidth: "250px", height: "auto"}}
                    />

                    <p className='p-body-small'>
                        <i>Remember that taking the square root of a positive numbers yields two answers: one positive and one negative.</i>
                    </p>

                    <p className='p-body'>
                        If I asked you to factor the binomial, it would still be very easy.  The factors would simply be (x + 4) and (x - 4).  You can get that by reverse 
                        engineering from the solutions that we got.  
                    </p>

                    <p className="p-body-small">
                        Below are the <strong>requirements</strong> to factoring a binomial using difference of perfect squares.
                    </p>
                    <ol className="p-body">
                        <li>All terms in the binomial must be perfect squares.  This means the square root is a whole number; not some long decimal.</li>
                        <li>
                            The two terms in the binomial must be subtracted from each other.  This method doesn't apply if the two terms in 
                            the binomial are being added.  Below are some examples.
                        </li>
                        <ul>
                            <li>x<sup>2</sup> - 64 = 0</li>
                            <li>x<sup>2</sup> - 9 = 0</li>
                            <li>x<sup>2</sup> - 25 = 0</li>
                        </ul>
                    </ol>
                        
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className='p-body-small'>
                        Always remember that you can reach out anytime you get stuck!
                    </p>

                    <p className='p-body'>1.  Factor the following binomial: x<sup>2</sup> - 36 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  (x - 6)(x + 6)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  (x - 6)(x - 6)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 6 and x = -6</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = -6 and x = -6</p>

                    <p className='p-body'>2.  Factor the following binomial: x<sup>2</sup> - 1 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  (x + 1)(x + 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  (x - 1)(x + 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 1 and x = -1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 1 and x = 1</p>

                    <p className='p-body'>3.  Solve the following binomial: 9x<sup>2</sup> - 1 = 0</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  (3x + 1)(3x - 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  (3x + 1)(3x + 1)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x = 1/3 and x = -1/3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x = 1/3 and x = 1/3</p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className='p-body'>
                        How come this method of factoring (difference of perfect squares) only works when we have a binomial where the two terms are being subtracted?  Why 
                        can't we factor the same way when the two terms are being added?  Basically, why can't we use the same approach to factoring with something like 
                        x + 16 = 0?  
                    </p>

                    <p className='p-body-small'>
                        Try this out and come write a brief explanation as to why difference of perfect squares doesn't work on the above example equation.  Once you're done, 
                        share it with us!  
                    </p>

                    <p className='p-body-small' style={{ marginBottom: "150px" }}>
                        If you're not sure how to start, try <strong>solving</strong> that equation above (x + 16 = 0); using the method that we talked about at the very beginning.  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FactoringPart2