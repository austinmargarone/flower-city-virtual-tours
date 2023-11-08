import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-slate-400 dark:bg-black">
      <Navbar />
      <section>
        <div>{children}</div>
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
