import React, { useRef } from "react";
import "./css/ContactForm.css";
import { showNotification } from "../firebase.js";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://adminbluebirdteaching.pythonanywhere.com/send-email/",
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
    <div className="contact-section">
      <div className="contact-logo-container">
        <img
          style={{ marginBottom: "0px" }}
          src={"BlueBird-Logo-Color-Light-Text.png"}
          alt="Open"
          className="contact-logo"
        />
      </div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="form-container p-body-xsmall"
        style={{"borderTopLeftRadius": 0, "borderBottomLeftRadius": 0}}
      >
        <div className="form-row">
          <div className="form-item">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-item">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
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
            multiple
          />
        </div>

        <div className="form-item">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-input"
            id="message"
            name="message"
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
    </div>
  );
};

export default ContactForm;
