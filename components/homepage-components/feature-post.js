import styles from "./feature-post.module.css";
import PostGrid from "../posts/post-grid";
import { Fragment } from "react";

function FeacturePosts(props) {
  const { posts } = props;
  return (
    <Fragment>
      <PostGrid posts={posts} />
    </Fragment>
  );
}
export default FeacturePosts;
