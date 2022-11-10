import { Fragment } from "react";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/contact-context";
import styles from "./contact-form.module.css";
import Notification from "../ui/notification";

function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();

  const NotificationCtx = useContext(NotificationContext);
  const activeNotification = NotificationCtx.notificationData;

  async function submitHandler(event) {
    event.preventDefault();

    const insertData = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      content: contentRef.current.value,
    };

    NotificationCtx.showNotification({
      title: "audtlr",
      message: "pending",
      status: "pending",
    });

    const response = await fetch("/api/contact-api", {
      method: "POST",
      body: JSON.stringify(insertData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      NotificationCtx.showNotification({
        title: "audtlr",
        message: "error",
        status: "error",
      });
    } else {
      NotificationCtx.showNotification({
        title: "audtlr",
        message: "success",
        status: "success",
      });
    }
  }

  return (
    <Fragment>
      <header className={styles.header}>
        <h1> CONTACT ME !</h1>
      </header>
      <main className={styles.main}>
        <form>
          <div>
            <label htmlFor="email"> your email</label>
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              required
              placeholder="input your email"
              ref={emailRef}
            />
          </div>
          <div>
            <label htmlFor="name"> your name </label>
            <input
              type={"text"}
              id={"name"}
              name={"name"}
              required
              placeholder="input your name"
              ref={nameRef}
            />
          </div>
          <div>
            <label htmlFor="content">what can i help</label>
            <textarea
              id="content"
              required
              placeholder="hello, what can i help"
              rows={6}
              ref={contentRef}
            ></textarea>
          </div>
          <div>
            <button onClick={submitHandler}> submit </button>
            <button type="reset"></button>
          </div>
        </form>
      </main>
      {activeNotification && <Notification />}
    </Fragment>
  );
}

export default ContactForm;
