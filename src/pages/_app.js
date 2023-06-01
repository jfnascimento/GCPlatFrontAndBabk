import '@/styles/globals.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from '@/styles/page.module.scss';
import { Provider } from 'react-redux';
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from "next-auth/react"

import Head from 'next/head';

let persistor = persistStore(store);

const metadata = {
  title: 'Next.js + Redux + Redux Persist + NextAuth + Axios + Sass + Inter',
  description: 'Next.js + Redux + Redux Persist + NextAuth + Axios + Sass + Inter',
}

export default function App({ Component, pageProps, session}) {

  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className={styles.contaier}>
              <Component {...pageProps} />
            </div>
            </PersistGate>
          </Provider>
      </SessionProvider>
    </>
  
  )
}
