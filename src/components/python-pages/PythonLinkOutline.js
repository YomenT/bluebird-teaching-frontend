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
    const [showModal, setShowModal] = useState(false);  // New State for modal

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
                setShowModal(true); // Show the modal when there's no logged-in user
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

    return (
        <div>
            <ol className="list-medium lessons-container">
                {lessons.map((lesson, index) => {
                    const isLessonCompleted = userCompletedLessons.includes(lesson.id);
                    const titleText = isLessonCompleted ? "Mark as unvisited" : "Mark as visited";

                    if (lesson.completed) {
                        return (
                            <li key={index} className="lesson-item">
                                <Link className="lesson-link" to={`/${lesson.subset_name}/${index + 1}/`} style={{ color: '#365789'}} onMouseOver={changeLinkColorEnter} onMouseOut={changeLinkColorLeave}>
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
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setShowModal(false)}>×</span>
                        <p>Login or sign up to track your progress!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PythonLinkOutline;
