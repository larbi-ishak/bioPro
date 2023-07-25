import { useEffect, useState } from "react";
import { Button, Grid, Kbd,  Center, createStyles, Title, Divider} from "@mantine/core";
import { BadgeCard } from "@/src/components/productsComponents/mainProd";
import Link from "next/link";
import Image from "next/image";
import { FaqWithBg } from "@/src/components/productsComponents/fqa";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    kbd: {
      fontSize: "23px",
      color: "black"
    },

    button: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
    marginLeft: "8px"
    }

}))
const Product = ({ id, data, similarProds }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const styles={
    button: {
        padding: "18px",backgroundColor: "transparent", textDecoration: "none",color: "white", border: "none",
        fontWeight: "bold"
    },
    buttonWrapper: {
      margin: "5px",
      padding: 0
    },
    wrapper: {
      margin: "20px auto",
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

  const { classes } = useStyles();
  const {image}=data
  return (
    <div>
      <Grid>
            <Grid.Col sm={12} md={4} offset={1} span={"auto"} >
              <Center  style={{padding: "10px", display: "block", paddingBottom: "0"}}>
                <Image src={image} height={300} width={300} alt="just iamge" />
                <br></br>
                <div style={styles.wrapper}>
                  <Title order={5} style={{display: "inline"}}>Unit price:</Title> <Kbd className={classes.kbd} >{data.price} DA</Kbd>
                 {"  "} <Title order={5} style={{display: "inline"}}>Quantity:</Title> <Kbd className={classes.kbd}>{quantity}</Kbd>
                  <br />
                  <Title order={5} style={{display: "inline"}}>total price: </Title><Kbd className={classes.kbd} >{data.price * quantity} DA</Kbd>
                  <Button className={classes.button} style={styles.buttonWrapper}>
                    <button style={styles.button} onClick={() => handleQuantity("+")}>+</button>
                  </Button>

                  <Button className={classes.button} style={styles.buttonWrapper}>
                    <button style={styles.button} onClick={() => handleQuantity("-")}>-</button>
                  </Button>
                  <br />
                  {/*// TODO notification that it is added to cart*/}
                  <Modal opened={opened} onClose={close} withCloseButton={false}>
                    Item added to Cart
                  </Modal>
                  <Button className={classes.button} onClick={open} style={styles.buttonWrapper}>
                    <button style={styles.button} onClick={handle_add_to_cart}>Add to Cart</button>{" "}
                  </Button>

                  <Button className={classes.button}>
                        <Link href={"/cart"}>
                    <button style={styles.button} onClick={handle_add_to_cart}>Order Now</button>{" "}
                        </Link>
                  </Button>
                </div>
              </Center>
            </Grid.Col>
            
            <Grid.Col md={6}>
            <FaqWithBg data={data}/>
            </Grid.Col>

      </Grid>

<Divider size="sm" />
      
      <div style={{margin: "30px"}}>
      <h2>similar products</h2>
      <Grid >
        {similarProds &&
          similarProds.map((product) => {
            return (
            <Grid.Col md={4} key={product.id}>
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

function Demo() {

  return (
    <>
      
    </>
  );
}