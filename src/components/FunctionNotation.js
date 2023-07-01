import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class FunctionNotation extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Function Notation</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        You've probably seen functions written like <span style={{ color: "#5b92e5" }}>y = 2x - 1</span>, but I can write the same function as <span style={{ color: "#5b92e5" }}>f(x) = 2x - 1</span>.  At face value, these two formats don't have any differences.  You can literally 
                        imagine the <span style={{ color: "#5b92e5" }}>f(x)</span> to be a <span style={{ color: "#5b92e5" }}>y</span>.  However, the SAT likes to 
                        use the <span style={{ color: "#5b92e5" }}>f(x)</span> format when trying to give a value for <span style={{ color: "#5b92e5" }}>x</span>.
                    </p>
                    <p className="p-body-small">
                        SAT problems will usually give <span style={{ color: "#5b92e5" }}>x</span> values by writing 
                        something like <span style={{ color: "#5b92e5" }}>f(5) = 2x - 1</span>.  The <span style={{ color: "#5b92e5" }}>5</span> in the parenthesis 
                        is telling you to plug in <span style={{ color: "#5b92e5" }}>5</span> anywhere you see <span style={{ color: "#5b92e5" }}>x</span> in the 
                        function.  Take a look at the picture below to see how I plug in the value and solve.  I tried to write as neatly as possible.
                    </p>
                    <img 
                        src={"https://i.ibb.co/zP2Ytm0/Function-Notation.png"}
                        alt="Function Notation"
                        width={350}
                        height={350} />
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        1.  If f(x) = 2x<sup>2</sup> + 5, evaluate f(-3).
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) 11</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) -13</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 23</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 18</p>
                    <p className="p-body">
                        Try this one.  It's a little bit harder, but I think you're up for the challenge!  Just use the same approach in these sandwich type 
                        problems.  <span style={{ fontSize: "15px" }}>Plug 9 into the g(x) function first; then plug the answer you got from that into the f(x) function.</span>
                    </p>
                    <p className="p-body">
                        2.  If f(x) = x<sup>2</sup> + 3 and g(x) = x - 5, evaluate f(g(7)).
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) 9</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) 7</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 10</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 11</p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        Try to create a similar problem to that last example.  Try to create a problem you think you'd encounter on the SAT.  Try writing function 
                        evaluation problems that utilize a bit more than what we've worked with like fractions.  Once you've created your sample problem, feel free 
                        to take a picture of it and share it with us, or try asking your math teacher to look it over.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FunctionNotation