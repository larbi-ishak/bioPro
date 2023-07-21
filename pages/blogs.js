import { ArticlesCardsGrid } from "@/src/components/blogComp";

const Blogs = ({ blogs }) => {
        return (
          <div>
      <ArticlesCardsGrid mockdata={blogs}/>
            <div>
              {/*pass blogs here */}
              {/*this will be removed*/}
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <div key={blog.title}>
                      <p>{JSON.stringify(blog)}</p>
                    </div>
                  );
                })}
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
      