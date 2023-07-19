import { useEffect, useState } from "react";
import Link from "next/link";

const Product = ({ data }) => {
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
  const data = await fetch(`http://localhost:8002/products/${id}`).then((res) =>
    res.json(),
  );

  return {
    props: {
      data,
    },
  };
}
