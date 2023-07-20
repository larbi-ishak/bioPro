import styles from "@/styles/Home.module.css";
import { UserInfoIcons } from "./foot";

const Footer = () => {
  return <footer className={styles.footer} style={{display: "flex", justifyContent: "center", border: "1px solid black"}}>
   <UserInfoIcons avatar={"/logo.jpg"} name={"internationamb"} title={"beauty and health"} phone={"0777209008"} email={"ishak@gmail.com"}/> 
    </footer>;
  {
    /* TODO add contact developer */
  }
};

export default Footer;
