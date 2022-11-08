import Image from "next/image";
import Link from "next/link";
import styles from "./post-item.module.css";

function PostItem(props) {
  const { image, title, id, description, date } = props.posts;

  const reformDate = new Date(date).toLocaleString("ko-KR");

  return (
    <Link href={"/posts/" + id}>
      <div>
        <div className={styles.image}>
          <Image
            src={image} alt={"image"} width={300} height={200} layout="responsive"/>
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