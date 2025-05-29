import {Button} from "@heroui/react";
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"




type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity}: CartItemProps) {

    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

return (
    <div className="flex align-center items-center gap-3">
        <img 
            src={item.imgUrl}
            className="rounded object-cover"
            style={{ width: "125px", height: "75px"}} />
        <div className="me-auto">
            <div>
                {item.name} 
                {quantity > 1 && <span className="text-default-500" style={{fontSize: "0.65rem"}}>  x{quantity} </span>}
            </div>
            <div className="text-default-500" style={{fontSize: "0.65rem"}}>{formatCurrency(item.price)}</div>
        </div>
        <div> {formatCurrency(item.price * quantity)} </div>
        <Button color="danger" variant="bordered" size="sm" style={{minWidth: "0"}} onClick={() => removeFromCart(item.id)}>
            &times;
        </Button>
    </div>
)

}