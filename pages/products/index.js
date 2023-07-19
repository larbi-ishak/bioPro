import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({ productsList }) => {
  const [products, setProducts] = useState(productsList);
  const router = useRouter();

  async function handle_click() {
    const response = await fetch(
      "http://localhost:8002/products?category=sport",
    );
    const data = await response.json();
    setProducts(data);
    router.push("/products/?category=sport", undefined, {
      shallow: true,
    });
  }
  return (
    <div>
      {/*
                    // filter option
                        */}
      <button onClick={() => handle_click()}>Filter: sports</button>
      <h3>Products:</h3>
      {/*
                    // grid cards

                        */}
      <div>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <p>{JSON.stringify(product)}</p>
                <p>
                  <Link href={`/products/${product.id}`}>
                    <button>Details</button>{" "}
                  </Link>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;

export async function getServerSideProps() {
  const { products } = await import("../../data/products.json");

  return {
    props: {
      productsList: products,
    },
  };
}
