import React from "react";
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class PolynomialsPart1 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Polynomials Part 1: Combining Like Terms</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Let's start this "hard" portion of the SAT nice and easy; we'll spend these next few sections learning about polynomials.  In this particular 
                        section, we're going to talk about combining like terms within a polynomial.  We're going to have a bunch of expressions containing at least 3 terms 
                        (since that's what a polynomial is), and we're just going to see if any of the terms will combine to simplify the expression as much as possible.
                    </p>
                    <p className="p-body-small">
                        In an expression, terms can combine if they have the same variable (or no variable), <strong>and</strong> they have the same exponent.  
                        Click <a href={"https://www.mathsisfun.com/definitions/like-terms.html"} target={"_blank"} className="anchor">here</a> for a website that gives a nice 
                        summary.  Also, take a look at the following video.  The speaker goes through a nice challenging problem for you.  
                    </p>
                    <div className="video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                url="https://youtu.be/FNnmseBlvaY"
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Keep in mind that in the SAT, you're probably not going to get a lot of questions where you just have to combine like terms.  Combining 
                        like terms is a skill we need to develop to work with harder problems; it's something you're usually going to want to do whenever 
                        working with expressions in the SAT.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className='p-body'>
                        Simplify the following expressions as much as possible by combining like terms.
                    </p>
                    <p className="p-body-small">
                        Remember you can reach out anytime you have any questions!  Just head over to "contact us" at the bottom right of this page.
                    </p>

                    <p className='p-body'>1.  91y + 4y - 54y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  42y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  41y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  40y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  39y</p>

                    <p className="p-body">2.  8x - 4x - 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  5x - 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  4x - 3</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  5x</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  4x</p>

                    <p className="p-body">3.  4x + 3y + 2x - y<sup>2</sup></p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  6x + 3y - y<sup>2</sup></p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  6x - 2y</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  6x - 2y<sup>2</sup></p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  6x + 4y - y<sup>2</sup></p>

                    <p className="p-body">
                        4.  Even if you've already watched the full video, go back to original problem from the video above and try it on your own.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                    <p className="p-body">
                        Let's make a very simple game with what we've learned.
                    </p>
                    <ol className="p-body">
                        <li>Gather about 10 to 15 flash cards.</li>
                        <li>Write a random term (-10, 4x, -7y, 958xyz, etc) on one side of each flash card; leave the other side blank.</li>
                        <li>Shuffle the flash cards.</li>
                        <li>Set all the flash cards face down on a surface, so that all you see is the blank side.</li>
                        <li>
                            For as many times as you like, randomly select any number of flash cards, and turn them over to see the terms.  
                            Move the flash cards around to make an expression with the terms, and see if you can combine any like terms.
                        </li>
                    </ol>
                    <p className="p-body" style={{ marginBottom: "150px" }}>
                        If you like, you can try practice this with someone else.  Feel free to reach out if you have any questions; also feel free to share any pictures 
                        of the game with us!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PolynomialsPart1