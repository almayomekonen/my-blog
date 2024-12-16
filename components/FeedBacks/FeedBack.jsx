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
      <ul className={styles.list}>
        {messages.map((message) => (
          <li key={message._id} className={styles.message}>
            <span className={styles.userLetter}>
              {message.name.charAt(0).toUpperCase()}
            </span>
            <p className={styles.text}>
              <span className={styles.quote}>“</span>
              {message.message}
            </p>
            <p className={styles.author}>
              {`${message.name} — `}
              <span className={styles.topic}>({message.favoriteTopic})</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
