import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class GraphingSystemsOfLinearInequalities extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Graphing Systems of Linear Inequalities</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Remember when we worked with systems of linear equations with all the substitution and elimination?  Well with systems of linear 
                        inequalities, we don't really have to utilize substitution or elimination; we really just have to worry about our graphing skills.
                    </p>
                    <p className="p-body-small">
                        Like with systems of linear equations, graph the two linear inequalities given in a systems problem like you would graph as we discussed right 
                        in the previous section; including the shading step.  The goal here is to find the common shaded area from both graphs.  If asked, any 
                        set of ordered pairs within that common shaded area would be conidered a solution to the system of linear inequalities.  Listed below are the steps 
                        I took to graph the two linear inequalties shown in the picture.  Notice that the steps are almost exactly the same; except there is one added part.
                    </p>
                    <ol className="p-body">
                        <li>Solve for y for both inequalities(if needed).</li>
                        <li>
                            Graph the inequalities as if it were a regular linear equation.  Remember which inequalities utitilize solid or dashed lines?
                        </li>
                        <li>
                            Shade the region that satisfies the y values for the given inequalities.
                        </li>
                        <li>
                            Identify the common shaded area from both inequalities.
                        </li>
                    </ol>
                    <p className="p-body-small">Excuse my horrible handwriting...</p>
                    <img 
                        src="https://i.ibb.co/MnFYfSb/Graphing-Systems-Of-Linear-Inequalities-1.png"
                        alt="Graphing Linear Inequalities"
                        width={800}
                        height={850} />
                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        There's sort of a lot going on in that picture.  Do you think you understand each step?  Remember that you are always free 
                        to reach out with any questions that you have.  We're happy to help!
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        I want you to graph 8y - 4x > 2 and 3x - 4y > 2, and find the common shaded area.  You might have noticed that these are actually two inequalities 
                        that we've already worked with before.  The only difference now is that we're putting them together in a system to find the common shaded area.  Circle 
                        the answer choice below that matches the correct graph for the system of linear inequalitites.
                    </p>
                    <p className="p-body-small">
                        These drawings aren't going to be perfect.  If you are certain that your answer is correct, but you don't see a matching graph below, email us with a 
                        picture of your graph attached.
                    </p>
                    <p className="p-body-small">
                        A)
                    </p>
                    <img 
                        src="https://i.ibb.co/Qfc9QB2/Inequalities-A.png"
                        alt="Answer Choice A"
                        width={200}
                        height={200} />
                    <p className="p-body-small">
                        B)
                    </p>
                    <img 
                        src="https://i.ibb.co/8gn0GLC/Inequalities-B.png"
                        alt="Answer Choice B"
                        width={200}
                        height={200} />
                    <p className="p-body-small">
                        C)
                    </p>
                    <img 
                        src="https://i.ibb.co/0CJ6g4j/Inequalities-C.png"
                        alt="Answer Choice C"
                        width={200}
                        height={200} />
                    <p className="p-body-small">
                        D)
                    </p>
                    <img 
                        src="https://i.ibb.co/rv6qh4B/Inequalities-D.png"
                        alt="Answer Choice D"
                        width={200}
                        height={200} />
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        You can take a break from the ordinary Create It! portions.  You've earned it!  This is actually the last section in the Heart of Algebra!  Congratulations 
                        on making this far, and go on to Problem Solving and Data Analysis whenever you're ready.  You can do this! 
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default GraphingSystemsOfLinearInequalities