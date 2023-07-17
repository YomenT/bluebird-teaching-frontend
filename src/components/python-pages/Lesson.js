import React from "react";

import Logo from "../Logo";
import Footer from "../Footer";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      lesson: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { subset, lessonId } = match.params;

    fetch(
      `https://adminbluebirdteaching.pythonanywhere.com/lessons/${subset}/${lessonId}/`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lesson: data }, () => {
          this.attachEventListeners();
        });
      });
  }

  attachEventListeners() {
    const options = document.querySelectorAll("li");
    for (let i = 3; i < options.length; i++) {
      let option = options[i];
      if (option.parentElement.style.listStyleType == "upper-alpha") {
        if (option.id == "correct") {
          option.addEventListener("click", () => {
            option.classList.add("correct");
          });
        } else {
          option.addEventListener("click", () => {
            option.classList.add("incorrect");
          });
        }
      }
    };
  }

    setClassNamesToHTML = (content) => {
        const { lesson } = this.state;
        if (!lesson) return;

        const container = document.createElement("div");
        container.innerHTML = content;

        const paragraphs = container.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
            paragraph.classList.add("p-body");
    });

  return container.innerHTML;
};

  render() {
    const { lesson } = this.state;

    if (!lesson) {
      return <div>Loading...</div>;
    }

    lesson.introduction = this.setClassNamesToHTML(lesson.introduction);
    lesson.try_it = this.setClassNamesToHTML(lesson.try_it);
    lesson.create_it = this.setClassNamesToHTML(lesson.create_it);


    return (
      <div>
        <Logo />
        <div className="bodyDiv">
          <h2
            style={{ paddingBottom: "25px" }}
            dangerouslySetInnerHTML={{ __html: lesson.title }}
          />
        </div>
        <div className="aboutBodyDiv">
          <div style={{ paddingTop: "25px" }} dangerouslySetInnerHTML={{ __html: lesson.introduction }}/>
          <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
          <div dangerouslySetInnerHTML={{ __html: lesson.try_it }}/>
          <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
          <div style={{ marginBottom: "150px" }} dangerouslySetInnerHTML={{ __html: lesson.create_it }}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lesson;
