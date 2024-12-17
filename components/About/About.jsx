import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        איך בונים אתר? הכלים והטכנולוגיות שמאחורי זה
      </h2>
      <p className={styles.description}>הכישורים שדרושים לפיתוח אתרים:</p>
      <p className={styles.description}>
        Frontend | Backend | JavaScript | מסדי נתונים |
      </p>

      <div className={styles.iconWrapper}>
        <Image width={80} height={60} src="/icons/html.webp" alt="html-icon" />
        <Image width={80} height={60} src="/icons/css.webp" alt="css-icon" />
        <Image width={80} height={60} src="/icons/js.webp" alt="js-icon" />
        <Image width={80} height={60} src="/icons/ts.webp" alt="ts-icon" />
        <Image
          width={80}
          height={60}
          src="/icons/react.webp"
          alt="react-icon"
        />
        <Image
          width={80}
          height={60}
          src="/icons/nodejs.webp"
          alt="nodejs-icon"
        />
      </div>
    </div>
  );
}
