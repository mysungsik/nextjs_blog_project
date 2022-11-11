import { Fragment, useState } from "react";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/contact-context";
import styles from "./contact-form.module.css";
import Notification from "../ui/notification";

function ContactForm() {
  const [emailState, setEmailState] = useState();
  const [nameState, setNameState] = useState();
  const [contentState, setContentState] = useState();

  const NotificationCtx = useContext(NotificationContext);
  const activeNotification = NotificationCtx.notificationData;

  async function submitHandler(event) {
    event.preventDefault();

    const insertData = {
      email: emailState,
      name: nameState,
      content: contentState,
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
      setEmailState("");
      setNameState("");
      setContentState("");
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
              value={emailState}
              onChange={(e) => setEmailState(e.target.value)}
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
              value={nameState}
              onChange={(e) => setNameState(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">what can i help</label>
            <textarea
              id="content"
              required
              placeholder="hello, what can i help"
              rows={6}
              value={contentState}
              onChange={(e) => setContentState(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <button onClick={submitHandler}> submit </button>
            <button type="reset"> reset</button>
          </div>
        </form>
      </main>
      {activeNotification && <Notification />}
    </Fragment>
  );
}

export default ContactForm;
