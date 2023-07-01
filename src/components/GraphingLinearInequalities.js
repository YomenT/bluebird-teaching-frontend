import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class GraphingLinearInequalities extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Graphing Linear Inequalities</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Just like with solving linear inequalities, graphing linear inequalities is very similar to graphing regular linear 
                        equations.  You still utilize slope and y-intercept just as you would when graphing linear equations.  Like solving however, 
                        there is one added step to the graphing process.
                    </p>
                    <p className="p-body-small">
                        You graph your linear inequality in the exact same way you would graph a linear equation.  The only added step is to shade in the 
                        region on the graph of all possible solutions for y.  Take a look at the picture below to see this added step in action.  The picture 
                        will also follow the steps below.  These are the steps you should follow when trying to graph linear inequalities. 
                    </p>
                    <ol className="p-body">
                        <li>Solve for y (if needed).</li>
                        <li>Graph the inequality as if it were a regular linear equation.  If the equation utilizes a &#62; or &#60;, the linear graph 
                            should be drawn using a dashed line; like shown below.  
                        </li>
                        <li>Shade the region that satisfies the y values for the given inequality.  Since y is greater than in this case, we shade 
                            the region above the line of the inequality.  
                        </li>
                    </ol>
                    <img 
                        src="https://i.ibb.co/KDwb99m/Graphing-Linear-Inequalities-1.png"
                        alt="Graphing Linear Inequalities"
                        width={800}
                        height={800} />
                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        <i><strong>Question:  </strong> What would happen if the equation had a &#8805; sign instead of a >?  What would this change?</i>
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                    <p className="p-body">
                        Click <a href={"https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:inequalities-systems-graphs/x2f8bb11595b61c86:graphing-two-variable-inequalities/e/graphing_inequalities_2"} target={"_blank"} className="anchor">here</a> to 
                        do four practice problems on this topic.  Khan Academy is a great resource in general for a wide variety of topics, and it will even 
                        tell you if you're getting the answers correct.
                    </p>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        Come up with some inequalities on your own!  Think of sample inequalities you would see.  Try to mix in more fractions than we've seen.  
                        The SAT certainly won't shy away from utilizing fractions on the calculator inactive portion!  Feel free to share pictures of problems 
                        and any associated work.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default GraphingLinearInequalities