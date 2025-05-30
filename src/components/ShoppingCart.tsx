import { useShoppingCart } from "../context/ShoppingCartContext";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"


type ShoppingCartProps = {
    isOpen: boolean
}


export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart, cartItems } = useShoppingCart()

    return (
         <Drawer isOpen={isOpen} onOpenChange={closeCart} backdrop={"blur"}>
        <DrawerContent >
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Your cart</DrawerHeader>
              <DrawerBody className="gap-4">


                {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                   ))} 
                <div className="">
                        Total {" "}
                        { formatCurrency(cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item ? item.price * cartItem.quantity : 0)
                            },0)
                        )}
                </div>



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