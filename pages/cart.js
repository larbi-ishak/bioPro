import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Badge,
  Table,
  Group,
  Text,
  createStyles,
  Button,
  Center,
  Grid,
} from "@mantine/core";
import { IconTrashXFilled } from "@tabler/icons-react";

// sytles
const useStyles = createStyles((theme) => ({
  kbd: {
    fontSize: "23px",
    colro: "black",
  },

  button: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${theme.colors.teal[4]} 100%)`,
    marginLeft: "8px",
    padding: 0,
  },
  badge: {
    color: theme.colors.teal[9],
  },
  btnClear: {
      backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[4]} 0%, ${theme.colors.teal[4]} 100%)`,
  }
}));

const Cart = () => {

  const { classes } = useStyles();
  const styles = {
    button: {
      padding: " 4px 20px",
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "white",
      border: "none",
      display: "inline",
      fontWeight: "bold",
    },
    buttonClear: {
      padding: " 4px 20px",
      textDecoration: "none",
      color: "white",
      border: "none",
      display: "inline",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
  };

  const [valid, setValid] = useState(false);
  const [cart, setCart] = useState([]);

  // valid, setValid is used for the confirm order enable and disable
  useEffect(() => {
    // initialize current cart from the local Storage
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
    // for the disable button
    setValid(data.some((item) => item.quantity > 0));
  }, []);

  const rows = cart.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <div>
            <Text fz="sm" fw={500}>
              {item.product}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Text>{item.price} DA</Text>
      </td>
      <td>
        <Center>
          <Button className={classes.button}>
            <button
              onClick={() => handleQuantity(item.id, "+")}
              style={styles.button}
            >
              +
            </button>
          </Button>
          <Text style={{ display: "inline", fontSize: "20px", margin: "3px" }}>
            {item.quantity}
          </Text>
          <Button className={classes.button}>
            <button
              onClick={() => handleQuantity(item.id, "-")}
              style={styles.button}
            >
              -
            </button>
          </Button>
        </Center>
      </td>
      <td> {Math.round(item.price * item.quantity)} DA</td>
    </tr>
  ));

  const total_price = cart.reduce((prev, curr) => {
    return parseInt(curr.price) * parseInt(curr.quantity) + parseInt(prev);
  }, 0);

  // increase decrease quantity
  const handleQuantity = (id, sign) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        sign === "-"
          ? item.quantity > 0
            ? item.quantity--
            : null
          : item.quantity++;
      }
      return item;
    });

    // set the cart with the new quantity, synchronize it with localStorage, check if its valid
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setValid(cart.some((item) => item.quantity > 0));
  };

  const handleClear = () => {
    localStorage.setItem("cart", "[]");
    setCart([]);
    setValid(false);
  };

  const handleConfirm = (e) => {
    if (!valid) e.preventDefault();
    // TODO check the cart if its empty or something else
    localStorage.setItem("cart", "[]");
    setValid(false);
  };

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ margin: "0px 30px" }}>
        <Table verticalSpacing="sm">
          <thead>
            <tr>
              <th>Produits</th>
              <th>Prix Unitaire</th>
              <th>
                {" "}
                <Center> Quantité </Center>{" "}
              </th>
              <th>Sous-Total</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Center>
          <Text style={{ fontSize: "20px" }}>
            Prix Total : {total_price} DA
          </Text>
          <br />
          <Badge className={classes.badge}>+ prix de livraison</Badge>
        </Center>
        <div style={{display: "flex", justifyContent: "flex-end", marginRight: "50px"}}>
        <Button className={classes.button}>
          <button style={styles.buttonClear} className={classes.btnClear} onClick={handleClear}>
            <IconTrashXFilled />
            vider le panier
          </button>
        </Button>
</div>

        <form
          action="https://formsubmit.co/larbishak2003@gmail.com"
          method="POST"
        >
          <Grid style={{margin: "2px auto", width: "800px"}}>
            <Grid.Col md={4}>
              <Text style={{ display: "inline" }}>
                Nom: <span style={{ color: "red" }}>*</span>
              </Text>
              <input
                type="text"
                name="name"
                required
                style={{ margin: "8px", padding: "8px", borderRadius: "5px" }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <Text style={{ display: "inline" }}>
                Telephone: <span style={{ color: "red" }}>*</span>
              </Text>
              <input
                type="text"
                name="phone"
                required
                style={{ margin: "8px", padding: "8px", borderRadius: "5px" }}
              />
              <input type="hidden" name="_next" value="https://ambinternationale.com" />
            </Grid.Col>
            <Grid.Col md={4}>
              <Text style={{ display: "inline" }}>
                Addresse: <span style={{ color: "red" }}>*</span>
              </Text>
              <input
                required
                type="address"
                name="address"
                style={{ margin: "8px", padding: "8px", borderRadius: "5px" }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <Text style={{ display: "inline" }}>Email:</Text>
              <input
                type="email"
                name="email"
                style={{ margin: "8px", padding: "8px", borderRadius: "5px" }}
              />
            </Grid.Col>
          </Grid>
          <input type="hidden" name="_subject" value="New Order!" />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="totalPrice" value={total_price} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Hey Dear Cosutomer, Thanks for choosing AMBinternationale" />
          <br />
          <Center>
            <input
              type="submit"
              value={"confirmer la commande"}
              style={{
                textDecoration: "none",
                outline: "none",
                color: "white",
                backgroundColor: "#1aa078",
                border: "none",
                fontWeight: "bold",
                margin: "8px",
                padding: "14px",
                borderRadius: "5px",
              }}
            />
          </Center>
        </form>
      </div>
    </>
  );
};

export default Cart;
