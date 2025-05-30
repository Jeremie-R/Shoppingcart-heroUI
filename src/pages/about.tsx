import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Spacer } from "@heroui/react";
import { Jeremie } from "@/components/jeremie";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col inline-block max-w-lg text-center justify-center gap-4">
          <h1 className={title()}>About</h1>
          <p>This project is an alteration from a tutorial,
            check out <a href="https://github.com/Jeremie-R/Shoppingcart-heroUI">Github</a> for more info.
          </p>

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
