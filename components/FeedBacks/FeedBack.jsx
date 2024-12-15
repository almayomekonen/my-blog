import { useEffect, useState } from "react";
import LoadingSpiner from "../ui/LoadingSpiner";
import styles from "./FeedBack.module.css";

export default function FeedBack() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api/feedback");
      const data = await response.json();

      if (response.ok) {
        setMessages(data.messages);
      } else {
        console.error("Failed to fetch messages:", data.message);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingSpinner}>
        <LoadingSpiner loading={loading} />
      </div>
    );
  }

  return (
    <div className={styles.feedback}>
      <h1>
        חוות דעת של תלמידים וסטודנטים מתעניינים <strong>🗣️💬</strong>
      </h1>
      <ul className={styles.list}>
        {messages.map((message) => (
          <li key={message._id} className={styles.message}>
            <h3>שם: {message.name}</h3>
            <p className="favorite-topic">
              נושא מועדף:
              <span style={{ color: "#191970" }}> {message.favoriteTopic}</span>
            </p>
            <p className="message">
              הודעה:
              <span style={{ color: "#191970" }}> {message.message}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
