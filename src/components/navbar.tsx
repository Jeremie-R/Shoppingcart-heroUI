import { Link as RouterLink } from "react-router-dom";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useShoppingCart } from '../context/ShoppingCartContext'




export const Navbar = () => {

      const { openCart, cartQuantity } = useShoppingCart()


  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="sf:flex gap-4" justify="center" style={{ backgroundColor: "white" }}>

        <NavbarItem>
          <Link as={RouterLink} to="/">
           Home
         </Link>
        </NavbarItem>
        <NavbarItem>
         <Link as={RouterLink} to="/store">
           Store
         </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={RouterLink} to="/about">
           About
          </Link>
       </NavbarItem>
      </NavbarContent>

      <Button color="primary" variant="bordered" onClick={openCart}>Cart ({cartQuantity})</Button>

    </HeroUINavbar>
  );
};
