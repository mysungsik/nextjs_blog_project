import styles from "./welcome.module.css";
import Image from "next/image";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.image}>
        <Image
          src={"/src/pageImages/IMG_5584.JPG"}
          alt="myImage"
          width={300}
          height={300}
        />
      </div>
      <h1> hi, my name is MS!</h1>
      <p> this blog is for my Next.js Practice and Project</p>
    </section>
  );
}
export default Welcome;
