import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../ui/Notification.jsx";
import { useRouter } from "next/navigation";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactDetails),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  const data = await response.json();
  console.log(data);
}

export default function ContactForm() {
  const router = useRouter();
  const [requestError, setRequestError] = useState();
  const [requestStatus, setRequestStatus] = useState(); // 'pending','error','success'
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    favoriteTopic: "",
  });

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        ...formData,
      });
      setRequestStatus("success");

      setTimeout(() => {
        router.push("/feedbacks");
      }, 2000);
      setFormData({
        email: "",
        name: "",
        message: "",
        favoriteTopic: "",
      });
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "שליחת הודעה...",
      message: "ההודעה שלך בדרך!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "תודה על השיתוף!",
      message: "ההודעה נשלחה בהצלחה",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "שגיאה!",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>
        מה למדת היום?
        <br /> שתף את המחשבות שלך!
      </h1>

      <form onSubmit={sendMessageHandler} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email"> אימייל:</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          <div className={styles.control}>
            <label htmlFor="name">שם מלא:</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>

          <div className={styles.control}>
            <label htmlFor="favoriteTopic">נושא מועדף:</label>
            <input
              name="favoriteTopic"
              type="text"
              id="favoriteTopic"
              onChange={handleInputChange}
              value={formData.favoriteTopic}
            />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">ההודעה שלך:</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            onChange={handleInputChange}
            value={formData.message}
          />
        </div>

        <div className={styles.actions}>
          <button type="submit">שלח הודעה</button>
        </div>
      </form>

      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </section>
  );
}
