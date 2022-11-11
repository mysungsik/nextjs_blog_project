import ContactForm from "../components/contactpage-components/contact-form";
import ContactSiteForm from "../components/contactpage-components/contact-site-form";
import Head from "next/head";

function ContactPage() {
  return (
    <div>
      <Head>
        <title> Contact Me</title>
        <meta name="description" content="just contact me if your need help" />
      </Head>
      <ContactForm />
      <ContactSiteForm />
    </div>
  );
}

export default ContactPage;
