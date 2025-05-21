import { formatCurrency } from "../utilities/formatCurrency";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import {Button, ButtonGroup} from "@heroui/button";



type StoreItemProps = {
  id: number;
  name: string; 
  price: number;
  imgUrl: string;        
}

export function StoreItem({ id, name, price, imgUrl}: StoreItemProps) {

    const quantity = 0;

    return (
        <>
            <Card className="py-0">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imgUrl}
                    width={300}
                    height={200} 
                    style={{ objectFit: "cover" }}
                />
                <CardHeader className="pb-2 pt-4 px-4 flex-row justify-between align-items">
                    <h3 className="text-large font-medium mt-2">{name}</h3>
                    <p className="text-small text-default-500">{formatCurrency(price)}</p>
                </CardHeader>
                <CardBody className="overflow-visible py-4">
                
                {quantity === 1 ? (
                    //no item in cart
                    <Button color="primary">+ Add to Cart</Button>

                    ): ( <div className="flex items-center justify-center w-full flex-col" style={{gap: "0.5rem"}}>
                        {/* some item in cart */}
                        <div className="flex items-center justify-center w-full" style={{gap: "0.5rem"}}>
                            
                            <Button>-</Button>
                            <div>
                                <span className="">{quantity}</span> in cart
                            </div>
                            <Button>+</Button>


                        </div>

                        <Button color="danger" variant="bordered">Remove</Button>


                        
                    </div>)
                }

                </CardBody>
    </Card>
        </>
    );
}