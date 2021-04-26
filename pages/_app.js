import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import GlobalStyle from '../theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
