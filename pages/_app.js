import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import RootLayout from "@/src/layouts/routLayout";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "@/styles/globals.css";
import { Demo } from "@/src/components/affix";

export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Y9DHMXBZ6N"
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config',  'G-Y9DHMXBZ6N');
    };


    // Remove the script tag after it has been executed to avoid re-initialization
    return () => {
      document.head.removeChild(script);
    };
  }, []);


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
          <Navbar />
          <div style={{ marginTop: "80px" }}></div>
          <Component {...pageProps} />
          <Footer />
        </RootLayout>
        <Demo />
      </MantineProvider>
    </>
  );
}
