import { useEffect, useState } from "react";
import { Button, Grid, Center} from "@mantine/core";
import { BadgeCard } from "@/src/components/productsComponents/mainProd";
import Link from "next/link";
import { TableScrollArea } from "@/src/components/productsComponents/inPordTable";
import { TableScrollAr } from "@/src/components/productsComponents/inTable";
import Image from "next/image";

const Product = ({ id, data, similarProds }) => {
  const styles={
    button: {
padding: "8px",backgroundColor: "transparent", textDecoration: "none",color: "white", border: "none"
    },
    buttonWrapper: {
      margin: "5px"
    }
  }
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

  const {composantes, indications,image}=data
  return (
    <div>
      <Grid>
            <Grid.Col sm={12} md={4} >
              <Center>
              <Image src={image} height={250} width={250} alt="just iamge1l" />
</Center>
            </Grid.Col>
            <Grid.Col sm={6} md={4} >
              <TableScrollArea data={composantes} />
              mode demploi
              utilisation
            </Grid.Col>
            <Grid.Col sm={6} md={3} >
              <TableScrollAr data={indications} />
            </Grid.Col>
      </Grid>
      <div>
        quantity: {quantity}
        <br />
        price: {data.price * quantity}
        <br />
        <Button style={styles.buttonWrapper}>
          <button style={styles.button} onClick={() => handleQuantity("+")}>+</button>
        </Button>

        <Button style={styles.buttonWrapper}>
          <button style={styles.button} onClick={() => handleQuantity("-")}>-</button>
        </Button>
        <br />
        {/*// TODO notification that it is added to cart*/}
        <Button style={styles.buttonWrapper}>
          <button style={styles.button} onClick={handle_add_to_cart}>Add to Cart</button>{" "}
        </Button>
        <Button>
              <Link href={"/cart"}>
          <button style={styles.button} onClick={handle_add_to_cart}>Order Now</button>{" "}
              </Link>
        </Button>
      </div>
      <h3>similar products</h3>
      <div>
      <Grid >
        {similarProds &&
          similarProds.map((product) => {
            return (
            <Grid.Col span={4} key={product.id}>
              <BadgeCard {...product} />
            </Grid.Col>
            );
          })}
    </Grid>
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
