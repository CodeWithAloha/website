
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>

    
      <Component {...pageProps} />
    </>
  );
  
  
}
