import { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";
import ReactMarkdown from "react-markdown";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Chatbot() {
  const [responses, setResponses] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResponse = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const res = await axios.post("/api/chatbot", { prompt });
      setResponses((prevResponses) => [
        ...prevResponses,
        { role: "user", content: prompt },
        { role: "bot", content: res.data.message },
      ]);
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbot}>
      <h1>שלום!😁 אני כאן כדי לעזור לך עם שאלות לגבי פיתוח fullstack 💻</h1>
      <div className={styles.chatWindow}>
        <div className={styles.messages}>
          {responses.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user" ? styles.userMessage : styles.botResponse
              }
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}
        </div>

        <div className={styles.userMessage}>
          <input
            type="text"
            placeholder="קדימה תשאל, אני כאן בשבילך!"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && fetchResponse()}
          />
          <button
            className={styles.sendButton}
            onClick={fetchResponse}
            disabled={loading}
          >
            {loading ? (
              <div className={styles.spinner}></div>
            ) : (
              <FaCircleArrowUp size={30} className={styles.arrowIcon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
