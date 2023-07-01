import React from 'react'
import { Link } from 'react-router-dom'

class HeaderButtons extends React.Component {
    render() {
        return (
            <div style={{ paddingBottom: "100px" }}>
                <Link to="/about">
                    <button class="button">How This Works</button>
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Link to="/about_resources">
                    <button class="button button-alt">Other Online Education Resources</button>
                </Link>
            </div>
        )
    }
}

export default HeaderButtons