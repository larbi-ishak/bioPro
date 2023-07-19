import { useEffect, useState } from "react";
const Cart = () => {
  const [valid, setValid] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // initialize current cart from the local Storage
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const total_price = cart.reduce((prev, curr) => {
    return parseInt(curr.price) * parseInt(curr.quantity) + parseInt(prev);
  }, 0);

  // console.log("cart", cart);

  const handleClear = () => {
    localStorage.setItem("cart", "[]");
    setCart([]);
    setValid(false);
  };

  // increase decrease quantity
  const handleQuantity = (id, sign) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        sign === "-" ? item.quantity-- : item.quantity++;
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setValid(cart.some((item) => item.quantity > 0));
  };

  const handleConfirm = () => {
    // TODO check the cart if its empty or something else
    localStorage.setItem("cart", "[]");
    setCart([]);
    setValid(cart.some((item) => item.quantity > 0));
  };

  return (
    <div>
      {cart &&
        cart.map((item) => {
          return (
            <div key={item.id}>
              title: {item.product} quantity: {item.quantity} price:{" "}
              {item.price * item.quantity}
              {/* increase decrease*/}
              {"              "}
              <button onClick={() => handleQuantity(item.id, "+")}>+</button>
              {"              "}{" "}
              <button onClick={() => handleQuantity(item.id, "-")}>-</button>
            </div>
          );
        })}
      <p>total Price : {total_price}</p>
      <button onClick={handleClear}>clear cart</button>
      <form>
        information:
        <br />
        <label>Name</label>
        <input type="text" required />
        <br />
        <label>Phone</label>
        <input type="phone" required />
        <br />
        <label>age</label>
        <input type="number" required />
        <br />
        <label>address</label>
        <input type="text" required />
        <br />
        <label>email</label>
        <input type="email" />
        <br />
        <label>comment</label>
        <input type="text" />
        <br />
        cash on delivery
        {valid ? (
          <button type="submit" onClick={handleConfirm}>
            {" "}
            confirm order{" "}
          </button>
        ) : (
          <button type="submit" onClick={handleConfirm} disabled>
            confirm order
          </button>
        )}
        {/* TODO after confirm send email to the person if provided*/}
        {/* TODO after show page of order and thanks page  all this in Modal*/}
      </form>
    </div>
  );
};

export default Cart;
