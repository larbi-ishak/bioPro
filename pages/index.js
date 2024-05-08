import { HeroImageBackground } from "@/src/components/indexComponents/indProd";
import MainImg from "@/src/components/MainImg"
import Intro from "@/src/components/intro"
import Banner from "@/src/components/banner"
import Head from "next/head.js";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="AMB intenational"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <MainImg />
                <Intro />
                <HeroImageBackground />
                <Banner />
                <div style={{ margin: "25px 0" }}></div>
            </main>

        </>
    );
}
