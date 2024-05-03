import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { MantineProvider } from "@mantine/core";
import RootLayout from "@/src/layouts/routLayout";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "@/styles/globals.css";
import { Demo } from "@/src/components/affix";

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
          colorScheme: "light",
        }}
      >
        <RootLayout>
          <SpeedInsights />
          <Navbar />
          <div style={{ marginTop: "60px" }}></div>
          <Component {...pageProps} />
          <Footer />
          <p style={{ textAlign: "center" }}>&copy; Copyright 2023 ambinternational. Tous Les Droits Sont reserves.</p>
        </RootLayout>
        <Demo />
      </MantineProvider>
    </>
  );
}
