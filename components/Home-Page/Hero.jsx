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
      <h1>
        <span className={styles.hey}>היי,</span> <br />
        <span className={styles.subHeroTitle}>אני אלמיהו מקונן</span>
        <br />
        <div className={styles.subContentWrapper}>
          <span className={styles.heroTitle}>מפתח פולסטאק</span>
        </div>
      </h1>
      <p>
        ברוכים הבאים! יצרתי את הבלוג הזה במיוחד כדי להכיר לכם את עולם פיתוח
        האתרים בצורה הכי ברורה ונעימה שיש. לא צריך שום ידע קודם או ניסיון בתכנות
        – אני כאן כדי להסביר לכם הכל מההתחלה, צעד אחרי צעד. התכנים זמינים
        ונגישים לכולם, כדי שתוכלו ללמוד בקצב שלכם, להבין את הבסיס ולהתחיל ליצור
        בעצמכם.
      </p>
    </section>
  );
}
