import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="blog.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
