import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressions extends React.Component {

    videoUrl = "https://www.youtube.com/watch?v=N_N7HygyULk"

    underlineLink(e) {
        e.target.style.textDecoration = "underline"
    }

    removeUnderline(e) {
        e.target.style.textDecoration = "none"
    }

    render() {
        return (
            <div className="container-fluid">

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to Rational Expressions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <div className="row">
                        <p className="p-body-small" style={{ paddingTop: "25px" }}>
                            <strong>What are rational expressions?</strong>  To be honest, the best way I can define them for you is they are fractions that can 
                            have variables in the numerators and/or denominators.  This is relavent to the SAT because they will have questions involving operations 
                            (adding, subtracting, multiplying, dividing) with rational expressions, and these questions also frequently involve simplifying them.  
                        </p>

                        <p className="p-body">
                            In this lesson, we're going to look at adding, subtracting, multiplying, and dividing rational expressions.  We'll leave the simplifying 
                            part for part 2.
                        </p>

                        <p className="p-body-small">
                            Since rational expressions are fractions, you're going to need to remember your fraction rules when it comes to adding, subtracting, multiplying, 
                            and dividing.  If you forgot, don't worry at all.  I strongly recommend you take some time to brush up on that; it shouldn't take long at all.
                        </p>

                        <p className="p-body-small">
                            <strong>Adding rational expressions</strong>, like adding normal fractions requires having a common denominator.  We achieve this in the same way 
                            we do with normal fractions.  Take a look at the two examples below to see how I get common denominators.
                        </p>
                    </div>

                    <div className="image-text-container">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img 
                                src={"https://i.ibb.co/zXXNZTy/Rational-Expressions1.jpg"}
                                alt="Adding rational expressions example."
                                className="mx-auto d-block"
                                width={400}
                                height={350}
                                style={{ width: "110%", minWidth: "250px", maxWidth: "300px", height: "auto"}}
                            />
                        </div>

                        <div style={{display: "flex", alignItems: "center", padding: "20px"}}>
                            <p className="p-body-xsmall">
                                In the first line, we have the original problem; we're trying to add those to fractions (also known as rational expressions).  In the 
                                second line, to the left of the arrow, I am multiplying the top and bottom of <sup>7</sup>&frasl;<sub>x</sub> by 5.  As the right of 
                                the arrow shows, I now have common denominators.  On the third and last line, following the normal steps of adding fractions, I add 
                                the numerators to get the final answer 
                            </p>
                        </div>
                    </div>

                    <div className="image-text-container">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img 
                                src={"https://i.ibb.co/BcG12Tm/Rational-Expressions2.jpg"}
                                alt="Adding rational expressions example."
                                className="mx-auto d-block"
                                width={400}
                                height={350}
                                style={{ width: "100%", minWidth: "250px", maxWidth: "300px", height: "auto"}}
                            />
                        </div>

                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
                            <p className="p-body-xsmall">
                                Again, we'll go line by line.  The first line just contains the original problem; we're trying to add those two rational expressions.  
                                The second line is where I'm trying to get common denominators.  I multiply the top and bottom of the left fraction by (x - 2), and I 
                                multiply the top and bottom of the right fraction with (x + 2).  The third line shows what everything looks like at this point; you'll 
                                see that both fractions now have common denominators.  In the fourth line; to the left of the equal sign, I have FOILed the numerators 
                                of both fractions, and now I can go about normally adding fractions.
                            </p>

                            <p className="p-body-xsmall">
                                Now this is an example where there would be a bit more to do if we were also simplifying, but we're just worrying about adding right now.  
                                We'll learn about simplifying rational expressions in a later lesson.
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: "50px"}}>
                        <p className="p-body-small">
                            <i>This lesson involves a lot of foundational skills with fractions.  If you are confused on anything, reach out to us!</i>
                        </p>

                        <p className="p-body">
                            Now let's look at subtracting rational expressions.
                        </p>
                    </div>

                    <div className="image-text-container">
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
                            <p className="p-body-xsmall">
                                The first line contains the original problem; we're trying to subtract those two rational expressions.  In the second line, I'm getting my 
                                common denominators: I multiply the top and bottom of the left fraction with x<sup>2</sup>, and I multiply the top and bottom of the right 
                                fraction with (4x - 1).  In the third line, to the left of the equal sign, I've already FOILed my numerators; I didn't bother FOILing the 
                                denominator (we'll worry about that when we work on simplifying rational expressions).  Then to the right of the equal sign, I have my final 
                                answer.
                            </p>

                            <p className="p-body-xsmall">
                                Take particular notice to how I distributed the minus sign.  Notice that I flipped the signs of the terms in the second fraction's numerator.  
                                When distributing a negative sign to a fraction, watch <a href={this.videoUrl} target={"_blank"} style={{ color: "#5b92e5" }} 
                                onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this video</a>.  Following what she explains in the video, I chose to 
                                distribute the negative to the numerator, and I followed the normal rules for distributing a negative sign to a polynomial from there.
                            </p>
                        </div>

                        <div style={{display: "flex", alignItems: "center"}}>
                            <img 
                                src={"https://i.ibb.co/v4TXbMT/Rational-Expressions3.jpg"}
                                alt="Subtracting rational expressions example."
                                className="mx-auto d-block"
                                width={400}
                                height={350}
                                style={{ width: "100%", minWidth: "250px", maxWidth: "300px", height: "auto"}}
                            />
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: "50px"}}>
                        <p className="p-body">
                            <strong>Now let's look at multiplying rational expressions.</strong>  This is going to involve a lot of what we've learned regarding FOILing 
                            and distributing.
                        </p>
                    </div>

                    <div className="image-text-container">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img 
                                src={"https://i.ibb.co/z4ypQYw/Rational-Expressions4.jpg"}
                                alt="Multiplying rational expressions example."
                                className="mx-auto d-block"
                                width={400}
                                height={350}
                                style={{ width: "100%", minWidth: "250px", maxWidth: "300px", height: "auto"}}
                            />
                        </div>

                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
                            <p className="p-body-xsmall">
                                We follow the same steps we do when we're multiplying fractions: multiply straight across all the numerators involved, and multiply all 
                                the denominators involved.  Basically just multiplying straight across.  This is where we need to remember FOILing and distribution.  We 
                                need to foil the two binomials in the numerators, and we need to distribute the two denominators.  Going line by line, in the first line, I 
                                have the original multiplication problem.  In the second line, I'm FOILing the numerators, and in the third line, I'm distributing the 
                                denominators.  Now that's all done, I just put the product of the numerators on the numerator of the new fraction, and I put the product of 
                                the denominators on the denominator of the new fraction.  This is shown as the final product in the fourth line (boxed).   
                            </p>

                            <p className="p-body-xsmall">
                                I know that previously, I didn't worry about simplifying the denominator, but this time, I did.  Let me know if this is too confusing, and 
                                I might try to re-orient this lesson.  In the mean time, we'll see in the lesson where we discuss simplifying rational expressions why we 
                                sometimes simplify the numerators/denominators, and why we sometimes leave then as the products.  <i>As always, reach out with any questions.</i>
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{ paddingTop: "50px" }}>
                        <p className="p-body">
                            <strong>Lastly, let's look at dividing rational expressions.</strong>  Again, follow the same rules as usual for dividing fractions, and that'll 
                            put you in a good spot to start.
                        </p>
                    </div>

                    <div className="image-text-container">
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
                            <p className="p-body-xsmall">
                                In the first line, I have the original division problem written out.  In the second line, to the left of the equal sign, I flipped the second 
                                fraction, and I changed the operation to multiplication (following the steps to dividing fractions).  From there, I went ahead and distributed 
                                the 5 across the first numerator.  This time I did not distribute the denominators; I just left them as factors.  Again, it'll become more 
                                clear when we should or shouldn't distribute factors.  If you want, go ahead and try to distribute to see what you get.
                            </p>
                        </div>

                        <div style={{display: "flex", alignItems: "center"}}>
                            <img 
                                src={"https://i.ibb.co/jk9tgW9/Rational-Expressions6.jpg"}
                                alt="Dividing rational expressions example."
                                className="mx-auto d-block"
                                width={400}
                                height={300}
                                style={{ width: "100%", minWidth: "250px", height: "auto"}}
                            />
                        </div>
                    </div>


                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body">
                        Some of these questions will be review, and some of them will the new stuff we just learned on operations with rational expressions.
                    </p>

                    <p className="p-body-small">
                        <i>
                            With that in mind, please reach out with any questions!  Even if it's on things we've learned previously.  It's hard to build on a 
                            weak foundation.
                        </i>
                    </p>

                    <p className="p-body">1.  Distribute the following binomials: x<sup>3</sup> + y and y - 4.</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x<sup>3</sup>y - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x<sup>3</sup>y + 4x<sup>3</sup> + y<sup>2</sup> - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x<sup>3</sup>y - 4x<sup>3</sup> + y<sup>2</sup> - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x<sup>3</sup>y - 4x<sup>3</sup> - 4y</p>

                    <p className="p-body">2.  Simplify 2x<sup>2</sup> - 1 - (-5y + x - 3)</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  2x<sup>2</sup> - x + 5y + 2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  2x<sup>2</sup> + x + 5y + 2</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  2x<sup>2</sup> - x + 5y + 4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  2x<sup>2</sup> + x + 5y + 4</p>

                    <p className="p-body">3.  Solve the problem depicted in the image below.</p>
                    <img 
                        src={"https://i.ibb.co/HNLmsc0/Rational-Expressions7.png"}
                        alt="Adding rational expressions problem."
                        width={200}
                        height={150} />
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }}>A)  x<sup>3</sup>y - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  x<sup>3</sup>y + 4x<sup>3</sup> + y<sup>2</sup> - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  x<sup>3</sup>y - 4x<sup>3</sup> + y<sup>2</sup> - 4y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  x<sup>3</sup>y - 4x<sup>3</sup> - 4y</p>

                    <p className="p-body">4.  Solve the problem depicted in the image below.</p>
                    <img 
                        src={"https://i.ibb.co/qsm0KfL/Rational-Expressions8.png"}
                        alt="Multiplying rational expressions problem."
                        width={200}
                        height={150} />
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>4x<sup>2</sup> + 12x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5xy + 20</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>4x<sup>2</sup> - 12x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5xy + 20</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>4x<sup>2</sup> - 3x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5xy - 9</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>4x<sup>2</sup> - 3x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5xy + 9</span>
                        </div>
                    </p>

                    <p className="p-body">5.  Solve the problem depicted in the image below.</p>
                    <img 
                        src={"https://i.ibb.co/rxSwqWg/Rational-Expressions9.png"}
                        alt="Dividing rational expressions problem."
                        width={200}
                        height={150} />
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>12x<sup>2</sup> - 8x - 2</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5y</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>12x<sup>2</sup> - 5x - 1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5y</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>12x<sup>2</sup> - 5x + 1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5y</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>12x<sup>2</sup> - 5x - 2</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5y</span>
                        </div>
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create It!</h4>

                    <p className="p-body-medium">
                        A lot of what we went over this lesson builds on existing fraction rules.  Now I know that we tend to forgot those fraction rules 
                        (myself included), so for this lesson, create a diagram that shows two examples for each scenario: addition, subtraction, multiplication, 
                        and division.  For each scenario, give two exampels: the first example should show solving a simple fraction problem (highlighting the 
                        steps required), and the second example should show the same scenario with a rational expression (showing the added steps in addition to 
                        the original required fraction rules).
                    </p>

                    <p className="p-body-small">
                        Take a look at the picture below as an example.  I did just one of the scenarios (addition).  You would need to come up with examples for the 
                        rest of the three scenarios.
                    </p>

                    <img 
                        src={"https://i.ibb.co/FmYz71X/Rational-Expressions10.png"}
                        alt="Create It example."
                        className="mx-auto d-block"
                        width={500}
                        height={600}
                        style={{ width: "40%", minWidth: "250px", height: "auto"}}
                    />
                    
                </div>

                <Footer />
            </div>
        )
    }
}

export default RationalExpressions