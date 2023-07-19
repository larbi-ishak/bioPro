import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about us</Link>
                </li>
                <li>
                    <Link href="/products">products</Link>
                </li>
                <li>
                    <Link href="/blogs">blogs</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
                <li>
                    <Link href="/cart">cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
