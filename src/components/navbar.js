import { HeaderResponsive } from "./header";

const Navbar = () => {
    return (
        <nav style={{position: "fixed",width: "100%", opacity: .9,zIndex: 99, top: "0", left: "0"}}>
            <HeaderResponsive links={[{label: "Home", link: "/"}, {label: "Products", link: "/products"},{label: "About Us", link: "/about"}, {label: "Contact Us", link: "/contact"},{label: "Blogs", link: "/blogs"},{label: "Cart", link: "/cart"}]} />
        </nav>
    );
};

export default Navbar;
