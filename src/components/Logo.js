import React from 'react'
import { Link } from 'react-router-dom'

class Logo extends React.Component {
    render() {
        return (
            <div className="blue">
                <div>
                    <Link to="/">
                    <img
                        style={{ marginBottom: "0px" }}
                        src={'https://i.ibb.co/1GqfVv1/Blue-Bird-Logo-Color-Light-Text.png'}
                        alt="Open"
                        width={130}
                        height={100} />
                    </Link>
                </div>
                <div style={{ textAlign: "right" }}>
                    <Link to="/satprep">
                        <button type="button" class="outline-button">SAT Prep</button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="/python">
                        <button type="button" class="outline-button">Python For Non-Engineers</button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="/focus_log">
                        <button type="button" class="outline-button">Focus Log</button>
                    </Link>
                    {/* &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to="/resources">
                        <button type="button" class="btn btn-outline-secondary">Resources</button>
                    </Link> */}
                </div>
            </div>
        )
    }
}

export default Logo