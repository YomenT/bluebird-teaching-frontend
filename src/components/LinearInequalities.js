import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class LinearInequalities extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Linear Inequalities</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Did you realize that we never talked about inequalities yet?  The Heart of Algebra does indeed cover linear inequalities, but a lot of the 
                        stuff that we covered on regular linear equations crosses over to linear inequalities.  As we'll see in a second, we still solve linear 
                        inequalities in the very same way that we solve linear equations.  If I were to try to solve for y, there would literally be just one 
                        added step or criteria to check for if I am solving a linear inequality.  We'll see this in a second.  
                    </p>
                    <p className="p-body-small">
                        Take a look at the picture below.  If you can't really recognize the steps taken, you might want to take a further look into this from 
                        other online resources.  Feel free to reach out to us, and we'll be glad to share some with you!
                    </p>
                    <img 
                        src={"https://i.ibb.co/PCqzx1T/Solving-Linear-Inequality.png"}
                        alt="Linear Inequalities"
                        width={350}
                        height={350} />
                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        <i><strong>Challenge:  </strong> Solve this equation for y in terms of x as if this was 3x -4y = 2.  Identify the exact added step 
                        for solving linear inequalities.</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        1.  What values of x satisfy the inequality 2x + 1 > 5?  (Sample Question from Khan Academy)
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) -2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) -1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 1</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) 2</p>
                    <p className="p-body-small"></p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body">
                        Create a reminder using an app on your phone or something like Google Calendar that reiterates the added step of flipping the 
                        inequality sign everytime you mulitply or divide by a negative number across the inequality.  
                    </p>
                    <p className="p-body-small" style={{ marginBottom: "150px" }}>
                        This might sound like such an easy rule to remember.  However, I have seen students make this mistake countless times.  If you face this 
                        problem in the mulitple choice section, there is very likely to be a trap answer choice waiting for you to choose it.  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default LinearInequalities