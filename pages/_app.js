import "../styles/globals.css";
import Layout from "../components/ui/layout";
import { NotificationContextProvider } from "../store/contact-context";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
