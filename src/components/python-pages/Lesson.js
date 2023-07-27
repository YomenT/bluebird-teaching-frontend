import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Footer from "../Footer";
import "../css/Lesson.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Lesson = (props) => {
  const { match } = props;
  const { subset, lessonId } = match.params;
  const [lesson, setLesson] = useState(null);
  const [lessonList, setLessonList] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetch(
      `https://adminbluebirdteaching.pythonanywhere.com/lessons/${subset}/${lessonId}/`
    )
      .then((response) => response.json())
      .then((data) => {
        setLesson(data);
      });

    fetch(`https://adminbluebirdteaching.pythonanywhere.com/lessons/${subset}/`)
      .then((response) => response.json())
      .then((data) => {
        setLessonList(data);
      });
  }, [subset, lessonId]);

  useEffect(() => {
    const options = document.querySelectorAll("li");
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.id === "correct") {
        option.style.cursor = "pointer";
        option.addEventListener("click", () => {
          option.classList.add("correct");
        });
      } else if (option.id === "incorrect") {
        option.style.cursor = "pointer";
        option.addEventListener("click", () => {
          option.classList.add("incorrect");
        });
      }
    }
  }, [lessonList]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const setClassNamesToHTML = (content) => {
    if (!lesson) return;

    const container = document.createElement("div");
    container.innerHTML = content;

    const unorderedLists = container.querySelectorAll("ul");
    unorderedLists.forEach((unorderedList) => {
      unorderedList.classList.add("list-small");
    });

    const orderedLists = container.querySelectorAll("ol");
    orderedLists.forEach((orderedList) => {
      orderedList.classList.add("list-medium");
    });

    const anchors = container.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.classList.add("anchor");
    });

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add("p-body-medium");
    });

    return container.innerHTML;
  };

  if (!lesson || !lessonList) {
    return <div>Loading...</div>;
  }

  lesson.introduction = setClassNamesToHTML(lesson.introduction);
  lesson.try_it = setClassNamesToHTML(lesson.try_it);
  lesson.create_it = setClassNamesToHTML(lesson.create_it);

  return (
    <div>
      <Logo />
      <div className="bodyDiv">
        <div className="lesson-navigation">
          <button className="dropbtn" onClick={toggleDropdown}>
            {subset}
            <FontAwesomeIcon icon={faAngleDown} />
            {showDropdown && (
              <div ref={dropdownRef} className="dropdown-content">
                <Link to={`/${subset}`}>All Lessons</Link>
                {lessonList.map((lessons, index) => (
                  <Link key={lessons.id} to={`/${subset}/${index + 1}`}>
                    {lessons.title}
                  </Link>
                ))}
              </div>
            )}
          </button>
          &nbsp;/&nbsp;
          <span>{lesson.title}</span>
        </div>
        <h2
          style={{ paddingBottom: "25px" }}
          dangerouslySetInnerHTML={{ __html: lesson.title }}
        />
      </div>
      <div className="aboutBodyDiv">
        <div
          style={{ paddingTop: "25px" }}
          dangerouslySetInnerHTML={{ __html: lesson.introduction }}
        />
        <h4
          className="h4-blue-headers"
          style={{ paddingTop: "50px", paddingBottom: "10px" }}
        >
          Try it!
        </h4>
        <div dangerouslySetInnerHTML={{ __html: lesson.try_it }} />
        <h4
          className="h4-blue-headers"
          style={{ paddingTop: "50px", paddingBottom: "10px" }}
        >
          Create it!
        </h4>
        <div
          style={{ marginBottom: "150px" }}
          dangerouslySetInnerHTML={{ __html: lesson.create_it }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Lesson;
