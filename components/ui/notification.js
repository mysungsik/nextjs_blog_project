import styles from "./notification.module.css";
import { useContext } from "react";
import NotificationContext from "../../store/contact-context";

function Notification() {
  const NotificationCtx = useContext(NotificationContext);
  const activeNotification = NotificationCtx.notificationData;
  let status = activeNotification.status;
  let statusStyle = "";

  function hideNoti() {
    NotificationCtx.hideNotification();
  }

  if (status === "pending") {
    statusStyle = styles.pending;
  }
  if (status === "success") {
    statusStyle = styles.success;
  }
  if (status === "error") {
    statusStyle = styles.error;
  }

  return (
    <div className={styles.notification} onClick={hideNoti}>
      <ul className={statusStyle}>
        <li>{activeNotification.title}</li>
        <li>{activeNotification.message}</li>
        <li>{activeNotification.status}</li>
      </ul>
    </div>
  );
}

export default Notification;
