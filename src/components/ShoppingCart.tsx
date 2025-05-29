import { useShoppingCart } from "../context/ShoppingCartContext";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import { Button } from "@heroui/button";


type ShoppingCartProps = {
    isOpen: boolean
}


export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart } = useShoppingCart()

    return (
         <Drawer isOpen={isOpen} onOpenChange={closeCart} backdrop={"blur"}>
        <DrawerContent >
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Your cart</DrawerHeader>
              <DrawerBody>
                <p>
                  hi
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onClick={closeCart}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    )
}