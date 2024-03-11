import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { CSSTransition } from 'react-transition-group';
import UploadResourceForm from "./UploadResourceForm.js";
import ContractForm from "./ContractForm.js";
import CreateRequest from "./ai-determined-lesson-standards/CreateRequest.js";
import ConfigureDefaults from "./ai-determined-lesson-standards/ConfigureDefaults.js";
import Collapsible from 'react-collapsible';
import Logo from './Logo'
import Footer from './Footer'
import "./css/TeacherCorner.css";
import { doc, getDoc } from "firebase/firestore";

function TeacherCorner() {
  const [userType, setUserType] = useState("");
  const [user, loading] = useAuthState(auth);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [showConfigureDefaults, setShowConfigureDefaults] = useState(false);
	const history = useHistory();

	const handleTestClick = () => {
        setShowNewComponent(true);
        setShowConfigureDefaults(false);
	  };

	const handleDefaultsClick = () => {
        setShowNewComponent(false);
        setShowConfigureDefaults(!showConfigureDefaults);
    };

	const resetView = () => {
        setShowConfigureDefaults(false);
        setShowNewComponent(false);
    };

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
				<Collapsible trigger="Initiate a Contract/Propose an Idea">
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
				<Collapsible trigger="AI Determined Lesson Standards">
					{!showConfigureDefaults ? (
						<>
							<CSSTransition
								in={showNewComponent}
								timeout={300}
								classNames="slide"
								unmountOnExit
								onEnter={() => setShowNewComponent(true)}
								onExited={() => setShowNewComponent(false)}>
								<CreateRequest />
							</CSSTransition>
							{!showNewComponent && (
								<>
									<p className="p-body-small" onClick={handleTestClick}>
										Test
									</p>
									<button onClick={handleDefaultsClick} style={{ display: 'block', marginTop: '10px' }}>Defaults</button>
								</>
							)}
						</>
					) : (
						<CSSTransition
							in={showConfigureDefaults}
							timeout={300}
							classNames="slide"
							unmountOnExit
							onEnter={() => setShowConfigureDefaults(true)}
							onExited={() => setShowConfigureDefaults(false)}>
							<ConfigureDefaults onBack={resetView} />
						</CSSTransition>
					)}
				</Collapsible>
				<h4 className="h4-blue-headers" style={{ paddingBottom: "25px" }}>Frequently Asked Questions</h4>
				<p className="p-body"><strong><i>What are contracts for?</i></strong></p>
				<p className="p-body-small">
					Contracts with us are essentially a way for you to sell your teacher resources to us. We are very much interested
					in buying resources that are designed to accommodate any particular need, and we would very much like to directly 
					work with teachers.
				</p>
				<p className="p-body-small">
					<strong>Why sell your resource to us instead of posting on sites like Teachers Pay Teachers? </strong> First, 
					you are more than welcome to still post your resource on Teachers Pay Teachers (or any equivalent platform), 
					but just note that we will be posting the resource you submit to us as a free resource on Teachers Pay 
					Teachers. When we 'buy' a resource from you, we aren't making any sort of copy right exchange. We are just 
					interested in buying the resource, so that we can share it as a free and open source resource for anyone.
				</p>
				<p className="p-body-small">
					<strong>To initiate a contract, </strong> you can start by making a proposal by clicking on "Initiate a Contract/
					Propose an Idea". Here, you can share the general idea of your resource (whether it is already created or not), 
					and we will get back to you as quickly as possible with any questions we might have, details for the future contract 
					(compensation, approximate time needed, etc), and any possible requested changes.
				</p>
				<p className="p-body" style={{ paddingTop: "15px" }}><strong><i>What is the contract process?</i></strong></p>
				<p className="p-body-small">
					<strong>To initiate a contract, </strong> you can start by making a proposal by clicking on "Initiate a Contract/
					Propose an Idea". Here, you can share the general idea of your resource (whether it is already created or not),
					and we will get back to you as quickly as possible with any questions we might have, details for the future contract
					(compensation, approximate time needed, etc), and any possible requested changes.
				</p>
				<p className="p-body-small">
					Once a contract is formalized, and everything is agreed upon, you will get confirmation from us to go ahead and 
					proceed with putting your resource together. Once your resource is ready, you can upload it by clicking and 
					filling out the "Upload a Resource" form.
				</p>
				<p className="p-body" style={{ paddingTop: "15px" }}><strong><i>What is a "ticket number"?</i></strong></p>
				<p className="p-body-small">
					A ticket number is essentially the unique identifier generated for your resource. Whether we actually initiate a 
					contract or not, once you propose a resource, you should get a confirmation email containing your ticket number. 
					If you didn't get one, or you lost your ticket number, feel free to reach out to us to recover it. In general, 
					do not hesitate to reach out to us with any questions you have!
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default TeacherCorner;