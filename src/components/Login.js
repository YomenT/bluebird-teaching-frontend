import React, { useEffect, useState } from "react";
import { Link, useHistory  } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./css/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <input
          type="password"
          className="auth-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="button"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        {/* <button className="button auth-google" onClick={signInWithGoogle}>
            <img className="google-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"/>
          Login with Google
        </button> */}
        <div style={{paddingTop: "30px"}}>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
