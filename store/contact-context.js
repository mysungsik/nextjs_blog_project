import { createContext, useState } from "react";

const NotificationContext = createContext({
  notificationData: {}, //title,message,status
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [notificationData, setNotificationData] = useState();

  function showNotificationHandler(notificationData) {
    setNotificationData(notificationData);
  }

  function hideNotificationHandler() {
    setNotificationData(null);
  }

  const context = {
    notificationData: notificationData,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
