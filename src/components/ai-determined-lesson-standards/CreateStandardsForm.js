import React, { useRef, useState, useEffect } from "react";
import "../css/ContactForm.css";
import { showNotification, auth, db } from "../../firebase.js";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";

const CreateStandardsForm = () => {
  const formRef = useRef();

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const resourceTitle = formData.get("resource-title");
    const grade = formData.get("grade");
    const subject = formData.get("subject");
    const content = formData.get("content");
    const notes = formData.get("notes");

    try {
      const user = auth.currentUser;

      if (user) {
        await updateDoc(doc(db, "users", user.uid), {
          standards: arrayUnion({
            resourceTitle: resourceTitle,
            grade: grade,
            subject: subject,
            content: content,
            notes: notes,
            response: "CCSS.ELA-LITERACY.RI.1.2 - Identify the main topic and retell key details of a text.",
            timestamp: Timestamp.now()
          }),
        });
        formRef.current.reset()
      }
    } catch (error) {
      showNotification("An error occured. Please try again later.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="form-container p-body-xsmall"
      style={{ "margin": "0 auto", "width": "100%" }}
    >    <p class="p-body-small">
        Upload a lesson to receive auto assigned common core standards.
      </p>
      <div className="form-row">
        <div className="form-item" style={{ "flex": "1" }}>
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
        <div className="form-row" style={{ "flex": "1" }}>
          <div className="form-item" >
            <label className="form-label" htmlFor="grade">
              Grade Level:
            </label>
            <select className="form-input" id="grade" name="grade" required>
              <option value="">Select Grade</option>
              <option value="First Grade">First</option>
              <option value="Second Grade">Second</option>
              <option value="Third Grade">Third</option>
            </select>
          </div>
          <div className="form-item">
            <label className="form-label" htmlFor="subject">
              Subject:
            </label>
            <select className="form-input" id="subject" name="subject" required>
              <option value="">Select Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* <div className="form-item">
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
      </div> */}

      <div className="form-item">
        <label className="form-label" htmlFor="content">
          Copy/paste lesson content:
        </label>
        <textarea
          className="form-input"
          id="content"
          name="content"
          rows="4"
          required
        />
      </div>

      <div className="form-item">
        <label className="form-label" htmlFor="notes">
          Additional notes to provide to the AI:
        </label>
        <div
          style={{
            "position": "relative"
          }}>
          <textarea
            className="form-input"
            id="notes"
            name="notes"
            rows="4"
            required
          />
          <img src="https://miro.medium.com/v2/resize:fit:800/0*mE6ibxWepOrPQ2yT.png" class="openai-logo"
            style={{
              "position": "absolute",
              "bottom": "-10px",
              "right": "20px",
              "width": "100px",
              "height": "auto",
              "opacity": "50%"
            }} />
        </div>
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

export default CreateStandardsForm;