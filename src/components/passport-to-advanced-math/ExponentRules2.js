import React from 'react'
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class ExponentRules2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Exponent Rules - Part 2</h2>
                </div>
                <div className='aboutBodyDiv'>
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Part 1 of exponent rules was to get you familiar with the 5 exponent rules.  In part 2, we're going to look at how the SAT uses a 
                        combination of exponent rules in a single problem.  A single simplication problem is going to involve many steps; each step involving 
                        an exponent rule.  
                    </p>
                    <p className='p-body-small'>
                        Once you get better with these problems, you'll start doing several of the steps all in your head. For now though, let's do these 
                        problems one step at a time.  When going through these problems you just need to remember, you know all the different exponent rules now; 
                        you just need to utilize them in the right way.
                    </p>
                    <p className='p-body-small'>
                        <strong>Note: </strong> In my opinion, this is one of the harder areas in the SAT math section.  This is definitely a good time to 
                        reach out for help if you ever need any.  
                    </p>
                    <p className='p-body'>
                        Watch the following video on exponent rules.  This video covers the basic exponent rules we discussed in part 1, but he teaches it 
                        in a slightly different way; however, results should be the same.  It's a very good idea to pause the video and try the problem yourself; 
                        resume the video once you've gotten an answer or are stuck.    
                    </p>

                    {/* 
                    We really need to replace this with a 
                    more accurate video for what we're trying 
                    to cover in this lesson.
                    
                    The video should contain problems where 
                    we involve multiple exponent rules in a 
                    single simplification problem.
                    */}
                    <div className="video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=MHeirBPOI6w"
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ExponentRules2