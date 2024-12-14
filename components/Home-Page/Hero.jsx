import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/almayo.jpg"
          alt="תמונה של אלמאיו"
          width={200}
          height={200}
          priority
        />
      </div>
      <h1>היי, אני אלמיהו מקונן</h1>
      <p>
        יצרתי את הבלוג הזה כדי לעזור לכם להכיר את עולם פיתוח האתרים בצורה פשוטה
        וברורה, גם אם אין לכם רקע קודם. יחד נלמד טכנולוגיות כמו HTML, CSS,
        JavaScript וכלים מתקדמים כמו Next.js ו-React.
      </p>
    </section>
  );
}
