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
					<p class="p-body-small">
						Have an idea for a resource that you think will be helpful, or an existing 
						resource that you'd like to share with us?  Use this form to propose your idea/resource 
						for a contract.  Contracts are a way for us to onboard resources from teachers, and 
						a way for teachers to get paid for their resources!
					</p>
					<p className="p-body-small">
						Fill out the form below with appropriate details that fit your resource, and we will review the 
						details and get back to you as soon as possible.
					</p>
					<ContractForm/>					
				</Collapsible>
				<Collapsible trigger="Upload a Resource">
					<p class="p-body-small">
						Once you've gotten confirmation for contract approval, and your resource is complete, 
						please use the form below to upload it.
					</p>
					<UploadResourceForm/>
				</Collapsible>
			</div>
			<Footer />
		</div>
	);
};

export default TeacherCorner;
