import { useEffect, useState } from "react";
import { Text, Button, Grid, Kbd,  Center, createStyles, Title, Divider} from "@mantine/core";
import { BadgeCard } from "@/src/components/productsComponents/mainProd";
import Link from "next/link";
import Image from "next/image";
import { FaqWithBg } from "@/src/components/productsComponents/fqa";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Head from "next/head";
import AgrandirImg from "@/src/components/ProdImgAgr";

const useStyles = createStyles((theme) => ({
    kbd: {
      fontSize: "23px",
      color: "black",
      fontWeight: "bold",
      letterSpacing: "1px"
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
    if (quantity >0){
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
}
  };

  const { classes } = useStyles();
  const {image}=data
  return (
    <>
      <Head>
        <title>Produit: {data.title}</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <div>
      <Grid gutter={{ base: 2 }}>

            <Grid.Col sm={12} md={4} offset={1} span={"auto"} >
              <AgrandirImg image={image}/>
            </Grid.Col>

            <Grid.Col md={6}>
                <Title>{data.title}</Title>
                <div style={styles.wrapper}>
                  <div className={classes.kbd} >{data.price} DA</div>
                  <fieldset style={{display:"inline"}}>
                    <legend>
                 <Title order={5} style={{display: "inline", padding: "10px 5px"}}>Quantité:</Title> 
                    </legend>
                        <Button className={classes.button} style={styles.buttonWrapper}>
                          <button style={styles.button} onClick={() => handleQuantity("+")}>+</button>
                        </Button>
                            <Kbd className={classes.kbd}>{quantity}</Kbd>
                        <Button className={classes.button} style={styles.buttonWrapper}>
                          <button style={styles.button} onClick={() => handleQuantity("-")}>-</button>
                        </Button>
                  </fieldset>
                  <Modal opened={opened} onClose={close} withCloseButton={false}>
                  Article ajouté au panier
                  </Modal>
                  <Button className={classes.button} onClick={open} style={styles.buttonWrapper}>
                    <button style={styles.button} onClick={handle_add_to_cart}>Ajouter au panier</button>{" "}
                  </Button>

                  <Divider></Divider>
                     <Text>Habituellement expédiée sous 24h</Text>
                    <Text>Livraison standard offerte</Text>
                      <Text>Retour facile </Text>

                  <br />
                  {/*<Title order={5} style={{display: "inline"}}>PRIX TOTAL: </Title><Kbd className={classes.kbd} >{Math.round(data.price * quantity)} DA</Kbd> */}
                  {/*// TODO notification that it is added to cart*/}

                  {/*<Button className={classes.button}>
                        <Link href={"/cart"}>
                    <button style={styles.button} onClick={handle_add_to_cart}>Commandez maintenant</button>{" "}
                        </Link>
                  </Button> */}

                </div>
            </Grid.Col>

      </Grid>

      <Grid >
            <Grid.Col sm={12} md={5} offset={1} >
              <FaqWithBg data={data}/>
            </Grid.Col>
            <Grid.Col md={5}>
            <h1>Besoins alimentaires</h1>
            <p>Vegan</p>
            <p>Végétarien</p>
            <p>Sans gluten</p>
<h2>Besoin d’aide ?</h2>
<Text>
Solgar met à votre disposition une équipe de conseillers
qui répond à toutes vos questions.
Informations
</Text>
<Link href={"/contact"}>Contactez-nous</Link>
            </Grid.Col>
      </Grid>

      <section>
        <h3>Experiences et avis</h3>
        aucun avis sur ce produit
        <button> ECRIRE UN AVIS</button>
      </section>

        {/*

        <Divider size="sm" />
              
              <div style={{margin: "30px"}}>
              <h2>Produits similaires</h2>
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
        */}

    </div>
    </>
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
  console.log(category)
  const similarProds = products.filter((product)=>product.id != id && product.category.every((cat)=> category.includes(cat)))

  return {
    props: {
      data,
      id,
      similarProds,
    },
  };
}