import { useState } from "react";
import { Grid, Center} from "@mantine/core";
import { BadgeCard } from "@/src/components/productsComponents/mainProd";

const Events = ({ productsList }) => {
  const [products, setProducts] = useState(productsList);

  const styles= {
    select: {
      backgroundColor: "transparet",
      padding: "10px",
      marginBottom: "10px",
      display: "inline",
      marginLeft: "10px",
      fontWeight: "600",
    },
    option: {
      fontWeight: "600",
    },
    title: {
      display: "inline",
      marginLeft: "30px",
      fontWeight: "bold",
      fontSize: "18px"
    },
    wrapper: {
      margin: "0 15px"
    }
  }

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
      <Center maw={400} h={100} mx="auto">
      <h2 style={{marginTop: "-30px"}}>Products:</h2>
    </Center>
    <div style={styles.wrapper}>
      <p style={styles.title}>Categories:</p>
      <select style={styles.select} onChange={handleChange}>
        <option style={styles.option}>All</option>
        <option style={styles.option}>Health</option>
        <option style={styles.option}>Youth</option>
        <option style={styles.option}>Politic</option>
        <option style={styles.option}>War</option>
        <option style={styles.option}>Sport</option>
      </select>
    </div>
      <Grid style={{padding: "30px" }}>
        {products &&
          products.map((product) => {
            return (
            <Grid.Col span={4} key={product.id}>
              <BadgeCard {...product} />
            </Grid.Col>
            );
          })}
    </Grid>
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