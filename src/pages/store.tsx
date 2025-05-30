import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import storeItems from "../data/items.json";
import { StoreItem } from "@/components/storeItem";



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

         
          

        </div>
      </section>
    </DefaultLayout>
  );
}
