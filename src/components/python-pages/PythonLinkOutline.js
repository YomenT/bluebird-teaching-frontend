import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import Subsets from "../Subsets";
import "../css/PythonLinkOutline.css"

function PythonLinkOutline() {
    const [lessons, setLessons] = useState([]);
    const [userCompletedLessons, setUserCompletedLessons] = useState([]);
    const [user] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                getDoc(docRef).then(docSnap => {
                    if (docSnap.exists()) {
                        setUserCompletedLessons(docSnap.data().completed || []);
                    }
                });
            } else {
                if (!localStorage.getItem('modalShown')) {
                    setShowModal(true);
                }
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleLessonCompletion = async (lessonId, checked) => {
        if (!user) return;
        let updatedCompletedLessons;

        if (checked) {
            updatedCompletedLessons = [...userCompletedLessons, lessonId];
            await updateDoc(doc(db, "users", user.uid), {
                completed: arrayUnion(lessonId)
            });
        } else {
            updatedCompletedLessons = userCompletedLessons.filter(id => id !== lessonId);
            await updateDoc(doc(db, "users", user.uid), {
                completed: arrayRemove(lessonId)
            });
        }

        setUserCompletedLessons(updatedCompletedLessons);
    }

    useEffect(() => {
        fetch("https://adminbluebirdteaching.pythonanywhere.com/lessons/" + Subsets.PCEPCourseAtIar)
            .then((response) => response.json())
            .then((data) => {
                setLessons(data);
            });
    }, []);

    const changeLinkColorEnter = (e) => {
        e.target.style.color = "#5b92e5";
    };

    const changeLinkColorLeave = (e) => {
        e.target.style.color = "#365789";
    };

    const closeModal = () => {
        setShowModal(false);
        localStorage.setItem('modalShown', 'true');
    }

    return (
        <div>
            {showModal && !user && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setShowModal(false)}>x</span>
                        <p className="p-body-medium" style={{ marginTop: "40px" }}>It looks like you're not logged in.</p>
                        <p className="p-body-xsmall">
                            Click <Link to="/login">here </Link> to sign in or create an account.
                        </p>
                        <p className="p-body-xsmall">
                            You can still view content without an account, but creating an account allows you to track your progress throughout the lessons.
                        </p>
                    </div>
                </div>
            )}

            <ol className="list-medium lessons-container">
                {lessons.map((lesson, index) => {
                    const isLessonCompleted = userCompletedLessons.includes(lesson.id);
                    const titleText = isLessonCompleted ? "Mark as unvisited" : "Mark as visited"

                    if (lesson.completed) {
                        return (
                            <li key={index} className="lesson-item">
                                <Link className="lesson-link" to={`/${lesson.subset_name}/${index + 1}/`} style={{ color: '#365789' }} onMouseOver={changeLinkColorEnter} onMouseOut={changeLinkColorLeave}>
                                    {lesson.title}
                                </Link>
                                {user && (
                                    <div className="lesson-status">
                                        {isLessonCompleted && <span className="visited-text">Visited</span>}
                                        <input
                                            className="lesson-checkbox"
                                            type="checkbox"
                                            checked={isLessonCompleted}
                                            onChange={() => handleLessonCompletion(lesson.id, !isLessonCompleted)}
                                            title={titleText}
                                        />
                                    </div>
                                )}
                            </li>
                        );
                    } else {
                        return (
                            <li className="lesson-link lesson-item" key={index} style={{ color: "#728fab" }}>
                                {lesson.title + " - In Progress"}
                            </li>
                        );
                    }
                })}
            </ol>
        </div>
    );
}

export default PythonLinkOutline;