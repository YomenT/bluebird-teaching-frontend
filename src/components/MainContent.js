import React from 'react'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            focusInfo: [],
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})
	fetch("http://www.bluebird-teaching.com/focus_log_api/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    focusInfo: data
                })
            })
    }

    render() {
        if (this.state.isLoading === false) {
            var titleList = []
            var objectiveList = []
            var descriptionList = []
            this.state.focusInfo.map(data => (titleList.push(data.title)))
            this.state.focusInfo.map(data => (objectiveList.push(data.objective)))
            this.state.focusInfo.map(data => (descriptionList.push(data.description)))
            return (
                <div className="bodyDiv">
                    <h2 style={{ textAlign: "center", paddingTop: "100px" }}>Current Focus</h2>
                    <h3 style={{ paddingTop: "25px", textAlign: "center", color: "#5b92e5", paddingBottom: "25px" }}>{titleList.slice(-1)}</h3>
                    <p className="p-focus"><strong>Objective: </strong>{objectiveList.slice(-1)}</p>
                    <p className="p-focus" style={{ paddingBottom: "100px" }}><small>{descriptionList.slice(-1)}</small></p>
                    <hr style={{ width: '75%', textAlign: "center", marginBottom: "0px", backgroundColor: "#fffAF0" }}></hr>
                </div>
            )
        } else {
            return (
                <div className="bodyDiv">
                    <h2 style={{ textAlign: "center", paddingTop: "100px" }}>Current Focus</h2>
                    <h3 style={{ paddingTop: "25px", textAlign: "center", color: "#5b92e5", paddingBottom: "25px" }}>Loading</h3>
                    <p className="p-focus"><strong>Objective: </strong>Loading</p>
                    <p className="p-focus">Loading</p>
                    <hr style={{ width: '75%', textAlign: "center", marginBottom: "0px", backgroundColor: "#fffAF0" }}></hr>
                </div>
            )
        }
    }
}

export default MainContent
