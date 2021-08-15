import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>1upload - interplanetary file hosting</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
