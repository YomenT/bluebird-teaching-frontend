import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import Subsets from "../Subsets.js";
import "../css/PythonLinkOutline"

function JavascriptLinkOutline() {

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
                if (!user) return
                let updatedCompletedLessons

                if (checked) {
                        updatedCompletedLessons = [...userCompletedLessons, lessonId];
                        await updateDoc(doc(db, "users", user.uid), {
                                completed: arrayUnion(lessonId)
                        })
                } else {
                        updatedCompletedLessons = userCompletedLessons.filter(id => id !== lessonId);
                        await updateDoc(doc(db, "users", user.uid), {
                            completed: arrayRemove(lessonId)
                        });
                }
                
                setUserCompletedLessons(updatedCompletedLessons);
        }

}

export default JavascriptLinkOutline