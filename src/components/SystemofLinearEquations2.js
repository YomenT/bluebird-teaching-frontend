import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class SystemofLinearEquations2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>System of Linear Equations Part 2</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Just like when we were first working with slope and y-intercept, the SAT will have word problems that utilize a system of linear 
                        equations.  Questions won't always just give you two linear equations to solve; instead, word problems will provide enough information 
                        for you to create two linear equations.  From there, you can complete what the questions asks.
                    </p>
                    <p className="p-body-small">
                        For these types of questions, you will need to derive two linear equations yourself.  We'll look specifically at this in a couple of example 
                        problems.  After we find those two equations, we can use substitution or elimination depending on what the question wants us to do.  It's 
                        important to double check with these questions exactly what it's asking.
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body-small">
                        Let's practice formulating two linear equations from infromation in a word problem.  
                    </p>
                    <p className="p-body">
                        1.  Your dream school has separate fees for resident and nonresident students.  Resident students, <i>r</i>, have to pay $3500 a semester for tuition, 
                        and nonresident students , <i>n</i>, have to pay $10,000 a semester for tuition.  The freshmen class has a total of 2,100 students, and they collectively 
                        paid a total of $8,491,003 in tutition last semester.  Which of the following systems of lienar equations best models this situation?
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A) r + n = 13,500; 3,500r + 10,000n = 8,491,003</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B) r + n = 8,491,003; 3,500r + 10,000n = 8,491,003</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C) 3,500r + 10,000n = 13,500; r + n = 8,491,003</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D) r + n = 2,100; 3,500r + 10,000n = 8,491,003</p>
                    <p className="p-body">
                        2.  Using the two equations you derived from the previous question, calculate how many nonresident students there were in the freshmen 
                        class of last semester.  Round your answer to the nearest whole number.
                    </p>
                    <p className="p-body-small">
                        Obviously, you will need to have chosen the correct answer for number one to get number two correct.  However, you might be able to see that 
                        something is off if you chose the wrong answer choice in number one.  If you are stuck, not sure about your answer, or just want to check 
                        on your work, feel free to reach out to us!
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        This might be a little bit hard to do, but try to create an example problem that involves a system of linear equations that you might 
                        see on the SAT.  Try to create answer choices for it that you think might actually trip you up.  Once you've created it, try sharing it with 
                        another student to see if they can do it!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SystemofLinearEquations2