import { GetInTouchSimple } from "@/src/components/contactCom";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>ContactPage</title>
      </Head>
      <div style={{padding: "20px"}}>
      <GetInTouchSimple />
</div>
    </>
  );
};

export default Contact;
