import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import UploadResourceForm from "./UploadResourceForm.js";
import ContractForm from "./ContractForm.js";
import Collapsible from 'react-collapsible';
import Logo from './Logo'
import Footer from './Footer'
import "./css/TeacherCorner.css";
import { doc, getDoc } from "firebase/firestore";

function TeacherCorner() {
  const [userType, setUserType] = useState("");
  const [user, loading] = useAuthState(auth);
	const history = useHistory();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
		  if (user) {
			const docRef = doc(db, "users", user.uid);
			getDoc(docRef).then(docSnap => {
			  if (docSnap.exists()) {
				setUserType(docSnap.data().userType);
			  }
			});
		  };
		});
	
		return () => {
		  unsubscribe();
		};
	  }, []);

	useEffect(() => {
		if (loading) {
			return;
		}

		if (!user || userType == 'student') {
			history.push("/");
		}
	}, [user, loading, userType]);

	return (
		<div>
			<Logo />
			<div className="notification"></div>
			<div className="bodyDiv">
				<h2 style={{ paddingBottom: "25px" }}>Teacher Corner</h2>
			</div>
			<div className="aboutBodyDiv">
				<p class="p-body">We're so excited to have you onboard with us!</p>
				<p class="p-body">This page should contain all the tools you need to get involved with us.</p>
				<Collapsible trigger="Initiate a Contract">
					<p class="p-body-small">Use the form below to initiate a contract</p>
					<ContractForm/>					
				</Collapsible>
				<Collapsible trigger="Upload a Resource">
					<p class="p-body-small">Use the form below to upload a resource</p>
					<UploadResourceForm/>
				</Collapsible>
			</div>
			<Footer />
		</div>
	);
};

export default TeacherCorner;
