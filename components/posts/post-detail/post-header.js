import Image from "next/image";
import styles from "./post-header.module.css";

function PostHeader(props) {
  const { title, image, postid } = props.posts;
  return (
    <header className={styles.header}>
      <h1> {title} </h1>
      <Image
        src={`/src/posts/${postid}/${image}`}
        alt="post"
        width={300}
        height={300}
      />
    </header>
  );
}

export default PostHeader;
