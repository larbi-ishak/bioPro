import { ArticlesCardsGrid } from "@/src/components/blogComp";

const Blogs = ({ blogs }) => {
        return (
          <div>
      <ArticlesCardsGrid mockdata={blogs}/>
            <div>
            </div>
          </div>
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
      