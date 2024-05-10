import { HeaderResponsive } from "./header";

const Navbar = () => {
    return (
        <nav style={{ position: "fixed", width: "100%", opacity: .9, zIndex: 99, top: "0", left: "0" }}>
            <HeaderResponsive links={[{ label: "Accueil", link: "/" }, { label: "Nos Produits", link: "/discover" }, { label: "Nos résponsabilités", link: "/contact" }, { label: "Carriérs", link: "/contact" }, { label: "Contact", link: "/contact" }, { label: "cart", link: "/cart" }]} />
        </nav>
    );
};

export default Navbar;
