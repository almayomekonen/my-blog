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
        היי, <br />
        אני אלמיהו מקונן, <br />
        <span className={styles.heroTitle}>מפתח פולסטאק</span>
      </h1>
      <p>
        יצרתי את הבלוג הזה כדי לעזור לכם להכיר את עולם פיתוח האתרים בצורה פשוטה
        וברורה. לא צריך שום ידע קודם או ניסיון – הכל מוסבר מהבסיס, צעד אחר צעד,
        כך שכל אחד יכול להבין ולהתחיל ליצור. הבלוג יתעדכן באופן קבוע עם תכנים
        חדשים, וקטגוריות כדי שתוכלו להעמיק וללמוד עוד על פיתוח אתרים בצורה נוחה
        ורלוונטית. אני כאן כדי להנחות אתכם בדרך ולהפוך את הלמידה למהנה ויעילה,
        צעד אחרי צעד.
      </p>
    </section>
  );
}
