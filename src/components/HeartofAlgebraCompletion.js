import React from 'react'

class HeartofAlgebraCompletion extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                <h2 style={{ textAlign: "center", color: "#5b92e5" }}>You did it!</h2>
                <p className="p-body" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                    You just completed the Heart of Algebra portion of the math SAT!  The questions you saw are one group of questions you will see on the 
                    math portion of the SAT.  Go on to the next section below to get familiar with Problem Solving and Data Analysis!
                </p>
                <p className="p-body-small" style={{ fontSize: "15px" }}>
                    You've made it this far, and we really want to know what you think!  Was the repetitiveness of each section a good or bad thing?  Do you think we 
                    missed anything?  Do you have any questions?  If you've never reached out to us yet, we would really like to hear from you.  Please share any 
                    comments, questions, or concerns below.
                </p>
                <form action="mailto:yomen.tohmaz.edu@gmail.com" method="post" encType="multipart/form-data">
                    <textarea name="Feedback" rows="5" cols="80"></textarea>
                    <br></br>
                    <label for="Feedback">P.S. Try doing this on Google Chrome or Microsoft Edge.</label>
                    <br></br>
                    <br></br>
                    <button type="submit" value="Submit" class="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default HeartofAlgebraCompletion