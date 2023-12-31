import { FeaturesAsymmetrical} from "@/src/components/aboutComp";
import Head from "next/head";

const About = () => {
  return (

    <>
      <Head>
        <title>A PROPOS</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
        <FeaturesAsymmetrical />
    </div>
    </>
  );
};

export default About;
