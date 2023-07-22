import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase.js";
import "./css/Auth.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
        return;
      }
    if (user) {
        history.push("/");
    }
  }, [user, loading]);

  return (
    <div className="auth">
    <div className="notification"></div>
    <h1 className="auth-title">
      BlueBird <span className="title-span">Teaching</span>
    </h1>
      <div className="auth-container">
        <input
          type="text"
          className="auth-textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="button" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>

        <div style={{paddingTop: "30px"}}>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;