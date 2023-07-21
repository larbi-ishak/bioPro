import { useEffect, useState } from "react";
import Link from "next/link";

const Product = ({ id, data, similarProds }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleQuantity = (sign) => {
    if (sign === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    // assigning prev cart to the current cart
    const prevCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(prevCart);
  }, []);

  const handle_add_to_cart = () => {
    let newType = true;
    const newOrder = {
      id: data.id,
      product: data.title,
      quantity: quantity,
      price: data.price,
    };
    setQuantity(0);
    cart.forEach((item) => {
      if (item.id == newOrder.id) {
        item.quantity = item.quantity + newOrder.quantity;
        newType = false;
      }
    });
    if (newType == false) {
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const newCart = [...cart, newOrder];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div>
      Product: {JSON.stringify(data)}
      <br />
      quantity: {quantity}
      <br />
      price: {data.price * quantity}
      <br />
      <Link href={"/cart"}>
        <button onClick={handle_add_to_cart}>Order Now</button>
      </Link>
      <br />
      {"   "}
      <button onClick={() => handleQuantity("+")}>+</button>
      {"   "}
      <button onClick={() => handleQuantity("-")}>-</button>
      <br />
      {/*// TODO notification that it is added to cart*/}
      <button onClick={handle_add_to_cart}>Add to Cart</button>{" "}

      <h4>similar products</h4>
      {/*limiting similar Prods to 3 products*/}
      <div>
        {similarProds &&
          similarProds.map((product) => {
            // condition not to render the product in itself as a similar product
            if (product.id != id) {
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
            }
          })}
      </div>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  const { products } = await import("../../data/products.json");

  const all_paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths: all_paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { products } = await import("../../data/products.json");
  const data = products.find((product)=> product.id == id)

  const category = data.category;
  const similarProds = products.filter((product)=>product.category == category)

  return {
    props: {
      data,
      id,
      similarProds,
    },
  };
}
