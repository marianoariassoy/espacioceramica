"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "@/components/nav";

const header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    const main = document.querySelector("main") as HTMLElement;
    const header = document.querySelector("#header") as HTMLElement;

    if (main) {
      main.style.marginTop = isOpen ? "0" : "450px";
    }
    if (header) {
      header.style.zIndex = isOpen ? "30" : "100";
    }
  };

  return (
    <header
      className="py-2 fixed top-0 text-sm z-30 w-full bg-white/50 backdrop-blur"
      id="header"
    >
      <button
        className="absolute z-50 right-6 top-1 lg:top-0 text-3xl hover:underline cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? "Cerrar" : "Menú"}
      </button>

      <div className="grid grid-cols-1 gap-y-1 lg:grid-cols-4 px-6">
        <div></div>
        <div></div>
        <div></div>
        <div>
          {pathname !== "/" && pathname !== "/residencias" ? (
            <Link href="/" className="hover:opacity-80 transition-all">
              <img
                src="/logo/logo.svg"
                alt="Logo"
                className="h-8 -mt-2 lg:mt-0"
              />
            </Link>
          ) : null}
        </div>
      </div>

      <div
        className={`absolute w-full transition-all px-6 ${
          isOpen ? "top-0" : "top-[-650px]"
        }`}
        id="nav"
      >
        <Nav ig={true} action={toggleMenu} />
      </div>
    </header>
  );
};

export default header;
