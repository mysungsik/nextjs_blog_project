import styles from "./post-grid.module.css";
import PostItem from "../posts/post-item";

function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <li key={post.postid}>
          <PostItem posts={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostGrid;
