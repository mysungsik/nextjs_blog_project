import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./post-item.module.css";

function PostItem(props) {
  const { image, title, postid, description, date } = props.posts;

  const reformDate = new Date(date).toLocaleString("ko-KR");

  return (
    <Link href={"/posts/" + postid}>
      <div>
        <div className={styles.image}>
          <Image
            className={styles.imageSizing}
            src={`/src/posts/${postid}/${image}`}
            alt={"image"}
            width={400}
            height={300}
            priority
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3> {title} </h3>
          <time> {reformDate}</time>
          <p> {description} </p>
        </div>
      </div>
    </Link>
  );
}
export default PostItem;
