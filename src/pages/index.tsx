import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { Jeremie } from "@/components/jeremie";
import { Spacer } from "@heroui/react";





export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col inline-block max-w-lg text-center justify-center gap-4">
          <h1 className={title()}>Home</h1>
          <p>This page is just to demo rooting, the application is the store page.</p>
          <Link to="/store">
            <Button color="primary" variant="bordered" >Store</Button>
        </Link>


        <Spacer x={80} />
        <Spacer x={80} />
        <Spacer x={80} />
        <Spacer x={80} />
        <Spacer x={80} />
        <p className="text-tiny text-default-500" >A project from</p>
        
        <Jeremie />

        </div>
      </section>
    </DefaultLayout>
  );
}
