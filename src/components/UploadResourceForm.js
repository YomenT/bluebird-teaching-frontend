import React, { useRef, useState, useEffect } from "react";
import "./css/ContactForm.css";
import { showNotification, auth, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const UploadResourceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const formRef = useRef();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
          setName(docSnap.data().name);
          }
        });
      };
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://adminbluebirdteaching.pythonanywhere.com/upload-resource/",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        showNotification(responseData.message);
        formRef.current.reset();
      } else {
        showNotification(responseData.error);
      }
    } catch (error) {
      showNotification("Please try again later");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="form-container p-body-xsmall"
      style={{ "margin": "0 auto", "width": "100%" }}
    >
      <div className="form-row">
        <div className="form-item">
          <label className="form-label" htmlFor="name">
            Name (First and Last):
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            required
          />
        </div>

        <div className="form-item">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            defaultValue={email}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <label className="form-label" htmlFor="resource-title">
            Resource Title:
          </label>
          <input
            className="form-input"
            type="text"
            id="resource-title"
            name="resource-title"
            required
          />
        </div>

        <div className="form-item">
          <label className="form-label" htmlFor="ticket">
            Ticket Number:
          </label>
          <input
            className="form-input"
            type="text"
            id="ticket"
            name="ticket"
            required
          />
        </div>
      </div>

      <div className="form-item">
        <label className="form-label" htmlFor="attachments">
          Attachments:
        </label>
        <input
          className="form-input"
          type="file"
          id="attachments"
          name="attachments"
          accept=".mp3, .mp4, .pdf, .doc, .docx, .ppt, .pptx"
          multiple
        />
      </div>

      <div className="form-item">
        <label className="form-label" htmlFor="notes">
          Additional Notes:
        </label>
        <textarea
          className="form-input"
          id="notes"
          name="notes"
          rows="4"
          required
        />
      </div>

      <button
        type="submit"
        className="email-button button"
        style={{ width: "100%" }}
      >
        Send
      </button>
    </form>
  );
};

export default UploadResourceForm;