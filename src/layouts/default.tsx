import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShoppingCartProvider>
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16" style={{ backgroundColor: "#F5F7F9" }}>
        {children}
      </main>
    </div>
    </ShoppingCartProvider>
  );
}
