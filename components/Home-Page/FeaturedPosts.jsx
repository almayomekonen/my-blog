import React from "react";
import styles from "./FeaturedPosts.module.css";
import PostsGrid from "../Posts/Posts-Grid";

export default function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>למדו את יסודות פיתוח האתרים.</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
