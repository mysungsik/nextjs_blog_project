import "../styles/globals.css";
import Layout from "../components/ui/layout";
import { NotificationContextProvider } from "../store/contact-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
