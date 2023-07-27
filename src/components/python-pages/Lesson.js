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
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.id == "correct") {
        option.style.cursor = "pointer";
        option.addEventListener("click", () => {
          option.classList.add("correct");
        });
      } else if (option.id == "incorrect") {
        option.style.cursor = "pointer";
        option.addEventListener("click", () => {
          option.classList.add("incorrect");
        });
      }
    };
  }

    setClassNamesToHTML = (content) => {
        const { lesson } = this.state;
        if (!lesson) return;

        const container = document.createElement("div");
        container.innerHTML = content;

        const unorderedLists = container.querySelectorAll("ul");
        unorderedLists.forEach((unorderedList) => { unorderedList.classList.add("list-small"); });

        const orderedLists = container.querySelectorAll("ol");
        orderedLists.forEach((orderedList) => { orderedList.classList.add("list-medium"); });

        const anchors = container.querySelectorAll("a");
        anchors.forEach((anchor) => { anchor.classList.add("anchor"); });

        const paragraphs = container.querySelectorAll("p");
        paragraphs.forEach((paragraph) => { paragraph.classList.add("p-body-medium"); });

        const images = container.querySelectorAll("img");
        images.forEach((image) => { 
          image.style.minWidth = "200px"; 
          image.style.height = "auto";
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
          <h4 className="h4-blue-headers" style={{ paddingTop: "50px", paddingBottom: "10px" }}>Try it!</h4>
          <div dangerouslySetInnerHTML={{ __html: lesson.try_it }}/>
          <h4 className="h4-blue-headers" style={{ paddingTop: "50px", paddingBottom: "10px" }}>Create it!</h4>
          <div style={{ marginBottom: "150px" }} dangerouslySetInnerHTML={{ __html: lesson.create_it }}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lesson;
