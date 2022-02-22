// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page Title</title>

        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.jsonc" />

        <meta name="theme-color" content="#000" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
