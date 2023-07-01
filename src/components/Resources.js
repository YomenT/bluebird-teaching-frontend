import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class Resources extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            focusInfo: [],
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})
        fetch("https://localhost:8000/focus_log_api/")
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
                    {console.log(this.state.focusInfo)}
                    <div className="bodyDiv">
                        <h2>Resources</h2>
                    </div>
                    <div className="aboutBodyDiv">
                        {this.state.focusInfo.reverse().map(item => (
                            <div>
                                <h2 className="h2-blue-headers">{item.title}</h2>
                                <p className="p-body">{item.objective}</p>
                                <p className="p-body">{item.categories}</p>
                                <p className="p-body">{item.expected_completion_date}</p>
                                <p className="p-body">{item.description}</p>
                                <p className="p-body">{item.about_bird}</p>
                                <p className="p-body">{item.contributing_nations}</p>
                                <p className="p-body">{item.completed}</p>
                                {item.completed ? (
                                    <p className="p-body"><a href={item.url} target={"_blank"}>Completed</a></p>
                                ) : (
                                    <p className="p-body">In Progress</p>
                                )}
                                <hr></hr>
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
                        <h2>Resources</h2>
                    </div>
                    <div className="aboutBodyDiv">
                        <h2>Hello</h2>
                    </div>
                    <Footer />
                </div> 
            )
        }
    }
}

export default Resources
