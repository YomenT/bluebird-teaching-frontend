import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  showNotification,
} from "../firebase.js";
import "./css/Auth.css";

// const institutions = [
//   { value: 'school1', label: 'School 1' },
//   { value: 'school2', label: 'School 2' },
//   { value: 'school3', label: 'School 3' },
// ];

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("student");
  // const [institution, setInstitution] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const register = () => {
    if (!name) {
      showNotification("Please enter name");
    } else {
      registerWithEmailAndPassword(name, email, password, userType);
    }
  };

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <select
          className="auth-textbox"
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        {/* {userType === "teacher" && (
        <Select
          onChange={(e) => setInstitution(e.value)}
          options={institutions}
          placeholder="Search for a school"
        />
        )} */}
        <button className="button" onClick={register}>
          Register
        </button>
        {/* <button className="button auth-google" onClick={signInWithGoogle}>
            <img className="google-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"/>
          Register with Google
        </button> */}

        <div style={{paddingTop: "30px"}}>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;