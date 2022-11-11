import styles from "./categoty-post.module.css";
import { Fragment } from "react";
import PostGrid from "../../components/posts/post-grid";

function CategoryPosts(props) {
  const { posts } = props;

  return (
    <Fragment>
      <h1 className={styles.h1}> {posts[0].type}</h1>
      <PostGrid posts={posts} />
    </Fragment>
  );
}

export default CategoryPosts;
