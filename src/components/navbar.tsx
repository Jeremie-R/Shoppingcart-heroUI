import { Link as RouterLink } from "react-router-dom";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";



export const Navbar = () => {

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

      <Button color="primary" variant="bordered">Cart (3)</Button>

    </HeroUINavbar>
  );
};
