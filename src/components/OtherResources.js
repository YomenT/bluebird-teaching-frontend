import React from 'react'

import Logo from './Logo'
import Footer from './Footer'
import Image from '../Images/Screenshot from 2020-08-03 23-02-02.png'

function AboutResources() {
    return (
        <div>
            <Logo />
            <div className="bodyDiv">
                <h2 style={{ paddingBottom: "25px" }}>Other Online Education Resources</h2>
            </div>
            <div className="aboutBodyDiv">
            <p className="p-body" style={{ paddingTop: "25px", paddingBottom: "50px" }}>You probably already know, but there are countless open source teaching resources online.  
                Some of which are very famous and known to both students and teachers.</p>
                <h3 className="h3-blue-headers"><a href={"https://www.khanacademy.org/"} target={"_blank"} className="anchor">Khan Academy</a></h3>
                <p className="p-body">Whether you're a student or a teacher, Khan Academy really should be your best friend.  
                This might just be because I'm currently a student, but along with having a lot of material for students to use, Khan Academy actually has a lot of recources for 
                teachers.  It's definitely worth while to check them out!</p>
                <p className="p-body"><strong >FUN FACT:  </strong>Khan Academy actually has multiple week long plans that utilize free College Board SAT preparation lesson plans.  
                If you're interested in better preparing your students for the SAT, you should definitely <a href={"https://www.khanacademy.org/test-prep/sat/new-sat-tips-planning/sat-coach-tools-tutorials/a/lesson-plan-introduction"} target={"_blank"} className="anchor">check them out</a>!  
                Definitely worth your time!!  Click <a href="https://collegereadiness.collegeboard.org/sat/k12-educators/advising-instruction/official-sat-practice-lesson-plans" className="anchor">here</a> to check out those free lesson plans by College Board.</p>
                <p className="p-body"><small>Click the image below to check out their teacher resources.</small></p>
                <a href={"https://www.khanacademy.org/khan-for-educators/resources/teacher-essentials"} target={"_blank"}>
                <img 
                    src={Image}
                    alt="Khan Academy Image"
                    width={600}
                    height={775} 
                    style={{ paddingBottom: "25px" }} />
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default AboutResources