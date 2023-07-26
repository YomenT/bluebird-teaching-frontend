import React from 'react'
import ContactForm from './ContactForm';

import Logo from './Logo'
import Footer from './Footer'

class Contact extends React.Component {
    render() {        
        return (
            <div>
                <Logo />
                <div className="notification"></div>
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>Get in Touch!</h2>
                </div>
                <div className="aboutBodyDiv">
                <p className="p-body">We are always eager to hear suggestions on how we can improve!  If you have comments on 
                any of our open source resources, please reach out to us!  If you are giving feedback, always remember to be as specific as possible.  Please be sure to 
                specify the following points below when giving feedback.</p>
                <ul className="p-body" style={{ paddingBottom: "25px" }}>
                    <li>Name of the open source resource that you are commenting on.</li>
                    <ul>
                        <li>Be clear on what part of the resource you are commenting on.</li>
                    </ul>
                    <li>If you are giving feedback for an area you think could be improved, try to hammer out the point as much as possible.  You don't have to have a 
                        solution yourself, but just try to make your point as clear as possible.
                    </li>
                </ul>
                <p className="p-body">Of course, we are looking for people who are eager to help out!  If you are looking 
                to join the crew, feel free to contact the email below.  Listed below are current skills that we are looking for, but even if you don't have the skills 
                below, shoot an email anyway!</p>
                <ul className="p-body">
                    <li>Familiarity with Python, HTML, CSS, and/or JavaScript.</li>
                    <li>Familiarity with Django, React, and/or other frameworks.</li>
                    <li>Lesson planning in various subject areas and grades.</li>
                    <ul>
                        <li>English Language Arts</li>
                        <li>Common Core Math</li>
                        <li>Pre-algebra, Algebra, Geometry, Pre-calculus, and/or Calculus</li>
                        <li style={{ color: '#5b92e5' }}><strong>Special Needs Edcuation</strong></li>
                    </ul>
                    <li>Just any education experience.</li>
                </ul>
                <p className="p-body"><small>We can't emphasize enough how much we need experienced lesson planners.  We hope to help out teachers by producing lesson plans 
                a wide variety of topics.  To do this, we need experienced lesson planners.  <b>If you have expertise in lesson planning, your help is certainly needed!</b></small></p>
                <ContactForm />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact