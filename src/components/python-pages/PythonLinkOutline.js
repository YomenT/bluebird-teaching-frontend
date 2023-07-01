import React from "react";
import { Link } from "react-router-dom"

class PythonLinkOutline extends React.Component {

    changeLinkColorEnter(e) {
        e.target.style.color = "#5b92e5";
    }

    changeLinkColorLeave(e) {
        e.target.style.color = "#365789";
    }

    render() {
        return (
            <div>
                <ol className="list-medium">
                    <li><Link to="/python/introduction" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>How To Code In Python</Link></li>
                </ol>
            </div>
        )
    }
}

export default PythonLinkOutline