import styles from "./Social.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Social() {
  return (
    <section className={styles.socialFollow}>
      <h3>
        <span className={styles.followMe}>מוזמנים לעקוב אחריי</span> ברשתות
        החברתיות
      </h3>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=100002097524154"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f">
            <FaFacebookSquare size={55} />
          </i>
        </a>
        <a
          href="https://www.instagram.com/almayomekonen/"
          target="_blank"
          aria-label="Instegram"
        >
          <i className="fab fa-instegram">
            <FaSquareInstagram size={55} />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/almayo-mekonen-0835942b4/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in">
            <FaLinkedin size={55} />
          </i>
        </a>
        <a
          href="https://github.com/almayomekonen"
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fab fa-github">
            <FaGithubSquare size={55} />
          </i>
        </a>
      </div>
    </section>
  );
}
