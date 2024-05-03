import { HeroText } from "@/src/components/indexComponents/indAbout";
import { HeroImageBackground } from "@/src/components/indexComponents/indProd";
import { StatsGridIcons } from "@/src/components/indexComponents/indStats";
import MainImg from "@/src/components/MainImg"
import Intro from "@/src/components/intro"
import Head from "next/head.js";
import { Button, Group, createStyles } from '@mantine/core';
import Link from "next/link";

export default function Home() {
    const useStyles = createStyles((theme) => ({
        Button: {
            backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${theme.colors.teal[4]
                } 100%)`,
        },
    }))

    const { classes } = useStyles();
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
                {/* <HeroText /> */}
                <HeroImageBackground />
                <div style={{ margin: "25px 0" }}></div>
                {/* <StatsGridIcons data={[{ title: "PRODUITS VENDUES", value: "77", diff: 6 }, { title: "NOUVEAUX  CLIENTS", value: "77", diff: 6 }, { title: "NOUVEAUX PRODUITS", value: "77", diff: 6 }]} /> */}
                {/* <Link href={"/contact"} style={{ textDecoration: "none" }}> */}
                {/*     <Group position="center" mt="xl"> */}
                {/*         <Button type="submit" size="md" className={classes.Button}> */}
                {/*             CONTACTEZ NOUS */}
                {/*         </Button> */}
                {/*     </Group> */}
                {/* </Link> */}
            </main>
        </>
    );
}
