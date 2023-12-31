import { ArticlesCardsGrid } from "@/src/components/blogComp";
import Head from "next/head";

const Blogs = ({ blogs }) => {

        return (
    <>
      <Head>
        <title>ARTICLES</title>
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
      <ArticlesCardsGrid mockdata={blogs}/>
            <div>
            </div>
          </div>
          </>
        );
      };
      
      export default Blogs;
      
      export async function getServerSideProps() {
        const { blogs } = await import("../data/products.json");
      
        return {
          props: {
            blogs,
          },
        };
      }
      