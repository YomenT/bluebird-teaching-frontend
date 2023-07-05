import React from 'react'

class LatestFocus extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            focusInfo: [],
        }
    }

    componentDidMount() {
        this.setState({isLoading: false})
        fetch("https://adminbluebirdteaching.pythonanywhere.com/focus_log_api/")
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
            var urlList = []
            this.state.focusInfo.map(data => (titleList.push(data.title)))
            this.state.focusInfo.map(data => (objectiveList.push(data.objective)))
            this.state.focusInfo.map(data => (descriptionList.push(data.description)))
            this.state.focusInfo.map(data => (urlList.push(data.url)))
            return (
                <div className="bodyDiv">
                    <h2 style={{ textAlign: "center", color: "#5b92e5", paddingTop: "100px" }}>Just Completed!</h2>
                    <h3 style={{ paddingTop: "25px", textAlign: "center", paddingBottom: "25px" }}><a href={urlList[urlList.length - 2]} target={"_blank"} className="glow" style={{ fontSize: "50px", color: "#fff" }}>{titleList[titleList.length - 2]}</a></h3>
                    <p className="p-focus" style={{ textAlign: "center" }}>Click on the focus name above to access the latest resource!</p>
                </div>
            )
        } else {
            return (
                <div className="bodyDiv">
                    <h2 style={{ textAlign: "center", paddingTop: "100px" }}>Just Completed!</h2>
                    <h3 style={{ paddingTop: "25px", textAlign: "center", color: "#5b92e5", paddingBottom: "25px" }}>Loading</h3>
                </div>
            )
        }
    }
}

export default LatestFocus
