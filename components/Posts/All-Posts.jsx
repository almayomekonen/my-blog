import styles from "./All-Posts.module.css";
import PostsGrid from "./Posts-Grid";

export default function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>המאמרים שיפתחו לך את עולם התכנות! ✨</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
