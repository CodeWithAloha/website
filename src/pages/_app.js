
import '@/styles/globals.css'
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="dviewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>Code with Aloha</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
  
  
}
