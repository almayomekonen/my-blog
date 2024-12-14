import React, { Fragment } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
