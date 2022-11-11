import Link from "next/link";
import Image from "next/image";
import styles from "./category-component.module.css";

function CategoryComponent() {
  return (
    <div className={styles.category}>
      <h1>Category</h1>
      <div>
        <Link href={"/posts"}>
          <Image
            src={
              "/src/posts/for-category/florian-klauer-mk7D-4UCfmg-unsplash.jpg"
            }
            alt={"all"}
            width={500}
            height={500}
          ></Image>
          <h2>All Post</h2>
        </Link>
      </div>
      <div>
        <Link href={"/category/react"}>
          <Image
            src={"/src/posts/for-category/react.png"}
            alt={"all"}
            width={1000}
            height={500}
          ></Image>
          <h2>React/Next.js</h2>
        </Link>
      </div>
      <div>
        <Link href={"/category/javascript"}>
          <Image
            src={"/src/posts/for-category/2149683A58CA6BF313.png"}
            alt={"all"}
            width={500}
            height={500}
          ></Image>
          <h2>Javascript</h2>
        </Link>
      </div>
    </div>
  );
}

export default CategoryComponent;
