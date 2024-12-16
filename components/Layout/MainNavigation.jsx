import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" legacyBehavior>
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles.hamburger} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`${isNavVisible ? styles.show : ""}`}>
          <li>
            <Link href="/posts">כל המאמרים</Link>
          </li>
          <li>
            <Link href="/contact">השאירו פידבק</Link>
          </li>
          <li>
            <Link href="/feedbacks">כל הפידבקים</Link>
          </li>
        </ul>
      </header>
      <div
        className={`${styles.overlay} ${isNavVisible ? styles.show : ""}`}
        onClick={toggleNav}
      />
      <nav
        className={
          `${styles.sideDrawer} ${isNavVisible ? styles.show : ""}` || (
            <Link href="/" legacyBehavior>
              <a>
                <Logo />
              </a>
            </Link>
          )
        }
      >
        <>
          <Link href="/" legacyBehavior>
            <a>
              <Logo />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/posts" onClick={toggleNav}>
                פוסטים
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleNav}>
                השאירו פידבק
              </Link>
            </li>
            <li>
              <Link href="/feedbacks" onClick={toggleNav}>
                כל הפידבקים
              </Link>
            </li>
          </ul>
        </>
      </nav>
    </>
  );
}
