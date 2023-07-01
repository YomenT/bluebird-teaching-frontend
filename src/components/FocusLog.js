import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class FocusLog extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            focusInfo: [],
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})
        fetch("https://www.bluebird-teaching.com/focus_log_api/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    focusInfo: data
                })
            })
    }

    render() {
        if (this.state.isLoading === false) {
            return (
                <div>
                    <Logo />
                    <div className="bodyDiv">
                        <h2>Focus Log</h2>
                    </div>
                    <div className="aboutBodyDiv">
                        {this.state.focusInfo.reverse().map(item => (
                            <div style={{ paddingBottom: "75px" }}>
                                <h2 className="h2-blue-headers">{item.title}</h2>
                                <hr></hr>
                                <p className="p-body"><strong>Objective: </strong>{item.objective}</p>
                                <p className="p-body"><small>Categories: {item.categories}</small></p>
                                <p className="p-body">{item.description}</p>
                                <p className="p-body"><small>{item.about_bird}</small></p>
                                <p className="p-body"><small>Origin: {item.contributing_nations}</small></p>
                                <p className="p-body">{item.completed}</p>
                                {item.completed ? (
                                    <p className="p-body"><a href={item.url} target={"_blank"} className="glow">Completed!</a></p>
                                ) : (
                                    <p className="p-body"><small>In Progress - Expected: {item.expected_completion_date}</small></p>
                                )}
                            </div>
                        ))}
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div>
                    <Logo />
                    <div className="bodyDiv">
                        <h2>Focus Log</h2>
                    </div>
                    <div className="aboutBodyDiv">
                        <h2>Loading</h2>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default FocusLog
