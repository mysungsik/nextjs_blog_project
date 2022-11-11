import styles from "./all-posts.module.css";
import { Fragment } from "react";
import PostGrid from "../../components/posts/post-grid";

function AllPosts(props) {
  const { posts } = props;

  return (
    <Fragment>
      <h1 className={styles.h1}> All posts</h1>
      <PostGrid posts={posts} />
    </Fragment>
  );
}

export default AllPosts;
