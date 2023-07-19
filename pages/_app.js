import RootLayout from "@/src/layouts/routLayout";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <RootLayout>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </RootLayout>
        </>
    );
}
