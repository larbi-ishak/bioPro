import { HeaderResponsive } from "./header";

const Navbar = () => {
    return (
        <nav style={{position: "fixed",width: "100%", opacity: .9,zIndex: 99, top: "0", left: "0"}}>
            <HeaderResponsive links={[{label: "ACCUEIL", link: "/"}, {label: "PRODUITS" ,link:"/products"},{label: "A PROPOS", link: "/about"}, {label: "CONTACTE", link: "/contact"},{label: "ARTICLES", link: "/blogs"},{label: "cart", link: "/cart"}]} />
        </nav>
    );
};

export default Navbar;
