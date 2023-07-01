import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class IntroductionToHeartOfAlgebra extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>About Heart of Algebra</h2>
                </div>
                <div className='aboutBodyDiv' id='full-height'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Most would call this portion of the SAT the "easiest", but the Heart of Algebra covers a lot of content from late middle school 
                        and early high school; students often complain that they forgot some of the content.  Therefore, don't be discouraged if you 
                        find this portion to already be a bit challenging.  We are here to help!
                    </p>
                    <p className="p-body-small">
                        At the bottom of evey page on this website, there is a contact us button.  Feel free to reach out to the email listed in the contact us 
                        page with any questions throughout your SAT preparation journey.  There will also be several points throughout this course where you will 
                        be encouraged to reach out with any questions or to submit any work.  Please feel free to reach out to us at any point; even if it is just 
                        to say hi!
                    </p>
                    <p className="p-body">
                        The Heart of Algebra is all about linear stuff.  Take a look at the list below for an overview of objectives.  These are things you're going 
                        to learn more about and practice throughout this portion. 
                    </p>
                    <ol className="high-level-objectives">
                        <li>Immplement vertical line test.</li>
                        <li>Understand, implement, and model standard form of linear equations.</li>
                        <li>Model systems of linear equations.</li>
                        <li>Solve systems of linear equations graphically or algebraically.</li>
                            <ul className="nested-ul">
                                <li>Substitution</li>
                                <li>Elimination</li>
                            </ul>
                        <li>Understand, implement, and model linear inequalities.</li>
                        <li>Model systems of linear inequalities.</li>
                        <li>Solve systems of linear inequalities graphically.</li>
                    </ol>
                </div>
                <Footer />
            </div>
        )
    }
}

export default IntroductionToHeartOfAlgebra