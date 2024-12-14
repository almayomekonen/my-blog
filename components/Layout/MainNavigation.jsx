import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">פוסטים</Link>
          </li>
          <li>
            <Link href="/contact">השאירו פידבק</Link>
          </li>
          <li>
            <Link href="/feedbacks">כל הפידבקים</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
