import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunctionGraphicalAnalysis2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Graphical Analysis of Quadratic Functions (Part 2)</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        In the last session, we mainly looked at the impacts of the "a" and "c" values have on the graph of a quadratic function.  You may not 
                        have noticed, but the "a" value was always 1 or -1.  <i>What happens when we have a non 1 "a" value?</i>  
                    </p>

                    <p className="p-body">
                        We saw how a positive or negative value effects the graph of a quadratic equation, but let's see what happens when we change to value to 
                        anything besides just positive or negative 1.  Take a loot at the three graph variations below; see if you can tell the effects the 
                        different "a" values are having on the graph.
                    </p>

                    <p className="p-body-small">
                        Again, very sorry that the pictures aren't the best, but try to focus on the x and y values.
                    </p>

                    <p className="p-body" style={{ paddingTop: "50px" }}><i>x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/G0xDZjD/Graphical-Analysis3.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600}
                        style={{ width: "60%", minWidth: "250px", height: "auto"}}
                    />

                    <p className="p-body" style={{ paddingTop: "30px" }}><i>4x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/601Ts2D/Graphical-Analysis4.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600}
                        style={{ width: "60%", minWidth: "250px", height: "auto"}}
                    />
                    <p className="p-body" style={{ paddingTop: "30px" }}><i>0.5x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/c87wmyW/Graphical-Analysis5.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600}
                        style={{ width: "60%", minWidth: "250px", height: "auto"}}
                    />

                    <p className="p-body" style={{ paddingTop: "50px" }}>
                        As you might have noticed, making the "a" greater than 1 makes the graph skinnier; while making the "a" value a fraction between 1 and 0 makes 
                        the graph wider. 
                    </p>

                    <p className="p-body-small">
                        If you like, try going on Desmos again and try to experiment some more with this.  Below are some example equations to try.
                    </p>
                    <ul className="p-body">
                        <li>2x<sup>2</sup> = y</li>
                        <li>6x<sup>2</sup> = y</li>
                        <li>0.8x<sup>2</sup> = y</li>
                        <li>0.2x<sup>2</sup> = y</li>
                    </ul>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        For these questions, don't actually graph them by hand or with a graphing calculator.  The point of these questions is to get you to try 
                        guessing the graph based off the quadratic equation given.
                    </p>

                    <p className='p-body'>1.  Which of the following could be the graph for <i>y = 4x<sup>2</sup> - 1</i>?</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/SdHdxPb/Graphical-Analysis2-Answer1.png"}
                        alt="Answer Choice 1"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/2yhgZ9b/Graphical-Analysis2-Answer2.png"}
                        alt="Answer Choice 2"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/vPWhQxx/Graphical-Analysis2-Answer3.png"}
                        alt="Answer Choice 3"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/vXbCF3F/Graphical-Analysis2-Answer4.png"}
                        alt="Answer Choice 4"
                        width={200}
                        height={200} />

                    <p className='p-body' style={{ paddingTop: "25px" }}>2.  Which of the following could be the graph for <i>y = -0.5x<sup>2</sup> - x + 1</i>?</p>
                    <p className="p-body-small">A)</p>
                    <img 
                        src={"https://i.ibb.co/rwTFydk/Graphical-Analysis2-Answer5.png"}
                        alt="Answer Choice 1"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                    <img 
                        src={"https://i.ibb.co/xgPf9Cp/Graphical-Analysis2-Answer6.png"}
                        alt="Answer Choice 2"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                    <img 
                        src={"https://i.ibb.co/kx1hxbB/Graphical-Analysis2-Answer7.png"}
                        alt="Answer Choice 3"
                        width={200}
                        height={200} />
                    <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                    <img 
                        src={"https://i.ibb.co/9tM8ywx/Graphical-Analysis2-Answer8.png"}
                        alt="Answer Choice 4"
                        width={200}
                        height={200} />

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                    <p className="p-body-small">
                        As of now, you've learned about the impacts of each term on the graph of a quadratic: a, b, and c.  Make a little cheat sheet that 
                        quickly summarizes the impacts of each of these terms.  Remember that each term might have quite a few impacts.  Feel free to go back 
                        over previous lessons to go over them again.    
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis2