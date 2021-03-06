import "../styles/globals.css";
import "reactjs-popup/dist/index.css";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
