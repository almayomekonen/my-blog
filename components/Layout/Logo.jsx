import styles from "./Logo.module.css";
import { RiAB } from "react-icons/ri";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <RiAB className={styles.baLogo} size={65} />
      הבלוג של <br />
      אלמיהו
    </div>
  );
}
