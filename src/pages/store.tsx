import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import storeItems from "../data/items.json";
import { StoreItem } from "@/components/storeItem";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";


export default function StorePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col inline-block text-center justify-center gap-4">
          <h1 className={title()}>Store</h1>


          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4"> 
            {storeItems.map(item => (
              <StoreItem {...item} />
            ))}
          </div>

         
          {/* <Table>
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn>Price</TableColumn>
            </TableHeader>
            <TableBody>
              {storeItems.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}

        </div>
      </section>
    </DefaultLayout>
  );
}
