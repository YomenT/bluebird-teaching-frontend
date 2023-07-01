import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class About extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>A Little Bit About BlueBird <span style={{ color: "#5b92e5" }}>Teaching</span></h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className= "p-body" style={{ paddingTop: "25px" }}>While there are free and open source resources out there for teachers and students to use, 
                    there aren't enough.  Many subject areas lack any kind of free or open source resources.  </p>
                    <p className= "p-body" style={{ paddingBottom: "50px" }}>BlueBird Teaching is supposed to be a direct solution in bringing more open source resources to educators.  
                    The project will gather open source resources for teachers whether they include resources published by us or other platforms.  </p>
                    <h3 className="h3-blue-headers">What is open source?</h3>
                    <p className= "p-body">Basically, if something is open source, it can be used, altered, 
                    and redistributed wihout worry of consquences.  While resources found on this website are all free, open source doesn't actually mean free 
                    (although that's usually the case).  Again, all resources made by BlueBird Teaching are guaranteed to be free 
                    and open source. Although, that cannot be promised for resources mentioned on this site that are products of other sources.</p>
                    <p className= "p-body" style={{ paddingBottom: "75px" }}>For more information on what open source is, click <a href={"https://opensource.org/osd-annotated"} target={"_blank"} className="anchor">here</a>.</p>
                    <h2 className="h2-blue-headers">What are focuses?</h2>
                    <p className= "p-body" style={{ paddingBottom: "50px" }}>The term focus here is like a milestone.  Each focus represents a certain open source 
                    resource, and just because it's cool, each focus is named after a bird (not always a real bird).  For example, the very first focus of this project is 
                    called phoenix.  The objective of this focus was to publish a particular lesson plan that was completed prior 
                    to the creation of BlueBird Teaching.  The completion of a focus yields an additional open source resource.</p>
                    <h3 className="h3-blue-headers">Focus Log</h3>
                    <p className= "p-body" style={{ paddingBottom: "50px" }}>The Focus Log houses infomration on all completed focuses and the current focus.  
                    If you're wondering about any particular information on a current or past focus, that's a good place to look.</p>
                    <h3 className="h3-blue-headers">Resources</h3>
                    <p className= "p-body" style={{ marginBottom: "0px" }}>If you want quick access to resources published by BlueBird Teaching, the Resources tab in the top right is a 
                    good place to look.</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About