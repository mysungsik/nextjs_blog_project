import Image from "next/image";
import Link from "next/link";
import styles from "./contact-site-form.module.css";

function ContactSiteForm() {
  return (
    <div className={styles.background}>
      <ul>
        <li>
          <Link href={"https://github.com/mysungsik"}>
            <Image
              src={"/src/contact/GitHub-Logo.png"}
              alt="github"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href={"https://dive-into-frontend.tistory.com/"}>
            <Image
              src={"/src/contact/icons8-blog-64.png"}
              alt="blog"
              width={100}
              height={100}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactSiteForm;
