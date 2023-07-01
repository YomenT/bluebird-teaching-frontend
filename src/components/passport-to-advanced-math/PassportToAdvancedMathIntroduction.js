import React from 'react'

import Logo from '../Logo'
import Footer from '../Footer'

class PassportToAdvancedMathIntroduction extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>About Passport to Advanced Math</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingBottom: "25px", paddingTop: "25px" }}>
                        By this point, many students express concern that this portion of the SAT, and Addtional Topics in Math, are the "harder parts" of the SAT.  
                        However, I wouldn't say this is necessarily true...
                    </p>
                    <p className="p-body-small">
                        Questions within the Passport to Advanced Math portion of the SAT do indeed target more advanced mathmatical concepts, but the SAT in general 
                        never really touches anything as advanced as precalculus.  Think of it this way, they are indeed more advanced concepts, but they are at least 
                        concepts that are usually more recent to you.  Unlike Heart of Algebra, where concepts covered in that portion are learned as early as 7th or 8th grade!
                    </p>
                    <p className="p-body-small">
                        Moral of the story is: don't let the name or contents scare you.  When tutoring some students for the SAT, they really struggle the most during the 
                        Heart of Algebra because they haven't gone over that material since middle school or early high school.  Either way, we're always here to help!  
                    </p>
                    <p className="p-body">
                        Listed below are the high level objectives for this whole portion of the SAT.
                    </p>
                    <ol className="high-level-objectives">
                        <li>Simplify, solve, and rewrite expressions involving polynomials, radicals, and exponents.</li>
                        <li>Solve a formula for or in terms of a particular variable.</li>
                        <li>Solve functions graphically or algebraically.</li>
                        <li>Combine mulitple functions.</li>
                        <li>Solve quadratic equations (graphically or algebraically).</li>
                            <ul className="nested-ul">
                                <li>Substitution</li>
                                <li>Elimination</li>
                                <li>Completing the Square</li>
                            </ul>
                        <li style={{ marginBottom: "150px" }}>Understand connections between quadratics and parabolas.</li>
                    </ol>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PassportToAdvancedMathIntroduction