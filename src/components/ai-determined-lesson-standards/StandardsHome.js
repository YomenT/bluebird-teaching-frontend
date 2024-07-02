import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase.js";
import { getDoc, doc } from "firebase/firestore";
import "../css/Standards.css";

const StandardsHome = () => {
  const [standards, setStandards] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            setStandards(docSnap.data().standards);
          }
        });
      };
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <ol className="list-medium standards-container">
        {standards.map((standard, index) => (
          <li key={index} className="standard-item">
            <div className="favorite-icon" style={{ paddingBottom: "3px", paddingLeft: "5px" }}>
              <span style={{ color: "gold", fontSize: "30px", marginRight: "15px" }}>&#9733;</span>
            </div>
            <p className="standard-text" style={{ "flex": "1" }}>{standard.resourceTitle}</p>
            <p className="standard-text" style={{ "flex": "1", color: "#3F81AC" }}>{standard.subject}</p>
            <p className="standard-text" style={{ "flex": "1", color: "#3F81AC" }}>{standard.grade}</p>
            <p className="standard-text" style={{ "flex": "1", color: "#3F81AC" }}>{new Date(standard.timestamp.seconds * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p className="standard-text standard-outline">{standard.response.substring(18, 24)}</p>
            <button
              type="submit"
              className="button"
            >
              Update Standards
            </button>
          </li>
        ))}
      </ol>
      <div className="buttons-row">
        <button className="standards-buttons">
          <span style={{ color: "gold", fontSize: "30px", marginRight: "5px", paddingBottom: "3px" }}>&#9733;</span> Favorites
        </button>
        <button className="standards-buttons" style={{ borderRadius: "50%", width: "50px", height: "50px" }}>
          <span style={{ fontSize: "30px", paddingBottom: "3px" }}>&#43;</span>
        </button>
        <button className="standards-buttons">
          <span style={{ fontSize: "30px", marginRight: "5px"}}>&#9881;</span> Defaults
        </button>
      </div>
    </div>
  );
};

export default StandardsHome;
