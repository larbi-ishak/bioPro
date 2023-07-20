import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { HeaderResponsive } from "./header";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <HeaderResponsive links={[{label: "Home", link: "/"}, {label: "Products", link: "/products"},{label: "About Us", link: "/about"}, {label: "Contact Us", link: "/contact"},{label: "Blogs", link: "/blogs"},{label: "Cart", link: "/cart"}]} />
        </nav>
    );
};

export default Navbar;
