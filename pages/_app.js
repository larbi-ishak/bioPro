
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import RootLayout from "@/src/layouts/routLayout";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "@/styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
            <RootLayout>
                <Navbar />
                <div style={{marginTop: "80px"}}></div>
                <Component {...pageProps} />
                <Footer />
            </RootLayout>
      </MantineProvider>
    </>
  );
}