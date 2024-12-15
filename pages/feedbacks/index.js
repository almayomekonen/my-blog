import FeedBack from "../../components/FeedBacks/FeedBack";
import Head from "next/head";
import { Fragment } from "react";
export default function feedback() {
  return (
    <Fragment>
      <Head>
        <title>כל הפידבקים ☺️</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <FeedBack />
    </Fragment>
  );
}
