import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Subsets from "../Subsets";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function PythonLinkOutline() {
    const [lessons, setLessons] = useState([]);
    const [userCompletedLessons, setUserCompletedLessons] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                setUserCompletedLessons(docSnap.data().completed);
            }
          });
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
            <ol className="list-medium">
                {/* <li><Link to="/python/introduction" style={{ color: "#365789" }} onMouseOver={changeLinkColorEnter} onMouseOut={changeLinkColorLeave}>How To Code In Python</Link></li> */}
                {lessons.map((lesson, index) => {
                    if (lesson.completed) {
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={userCompletedLessons.includes(lesson.id)}
                                    style={{"margin": "auto 10px"}}
                                    onChange={() =>
                                        handleLessonCompletion(lesson.id, !userCompletedLessons.includes(lesson.id))
                                    }
                                />
                                <Link to={`/${lesson.subset_name}/${index + 1}/`} style={{ color: '#365789' }} onMouseOver={changeLinkColorEnter} onMouseOut={changeLinkColorLeave}>
                                    {lesson.title}
                                </Link>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index} style={{ color: "#728fab" }}>
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