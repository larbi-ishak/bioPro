import Link from "next/link";
import { useState } from "react";

const Events = ({ productsList }) => {
  const [products, setProducts] = useState(productsList);

  async function handleChange(e) {
    const category = e.target.value;
    if (category != "All") {
      const data = productsList.filter((product)=>product.category == category)
      setProducts(data);
    } else {
      setProducts(productsList);
    }
  }
  return (
    <div>
      <p>categories</p>
      <select onChange={handleChange}>
        <option>All</option>
        <option>health</option>
        <option>youth</option>
        <option>politic</option>
        <option>war</option>
        <option>sport</option>
      </select>

      <h3>Products:</h3>
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