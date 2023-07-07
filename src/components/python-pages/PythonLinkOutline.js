import React from "react";
import { Link } from "react-router-dom"

class PythonLinkOutline extends React.Component {

    changeLinkColorEnter(e) {
        e.target.style.color = "#5b92e5";
    }

    changeLinkColorLeave(e) {
        e.target.style.color = "#365789";
    }

    constructor() {
        super();
        this.state = {
            lessons: [],
        };
    }

  componentDidMount() {
    fetch("https://adminbluebirdteaching.pythonanywhere.com/lessons/PCEP Course")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lessons: data });
      });
  }

    render() {
        const { lessons } = this.state;

        return (
            <div>
                <ol className="list-medium">
                    <li><Link to="/python/introduction" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>How To Code In Python</Link></li>
                    {lessons.map(lesson => (
                        <li key={lesson.id}>
                            <Link to={`/python/${lesson.title.toLowerCase()}/`} style={{ color: '#365789' }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>
                            {lesson.title}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default PythonLinkOutline