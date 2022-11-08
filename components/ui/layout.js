import styles from "./layout.module.css";
import Link from "next/link";

function Layout(props) {
  return (
    <div>
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          Logo
        </Link>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link href={"/"}>HomePage</Link>
            </li>
            <li>
              <Link href={"/posts"}>Allpost</Link>
            </li>
            <li>
              <Link href={"/contact"}>ContactUs</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
