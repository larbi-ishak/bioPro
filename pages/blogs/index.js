import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({ blogsList }) => {
  const [blogs, setBlogs] = useState(blogsList);
  const router = useRouter();

  async function handle_click() {
    const response = await fetch("http://localhost:8002/blogs?category=beauty");
    const data = await response.json();
    setBlogs(data);
    router.push("/blogs/?category=beauty", undefined, {
      shallow: true,
    });
  }
  return (
    <div>
      <button onClick={() => handle_click()}>Filter: beauty</button>
      <h3>Blogs:</h3>
      {/*
      // cards with enough space to contain the content
      */}
      <div>
        {blogs &&
          blogs.map((product) => {
            return (
              <div key={product.id}>
                <p>{JSON.stringify(product)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;

export async function getServerSideProps() {
  const { blogs } = await import("../../data/products.json");

  return {
    props: {
      blogsList: blogs,
    },
  };
}
