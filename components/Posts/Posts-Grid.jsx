import PostItem from "./Post-Item";
import styles from "./Posts-Grid.module.css";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
