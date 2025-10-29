"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import Lan from "@/components/lan";

const Nav = () => {
  const pathname = usePathname();

  const closeMenu = () => {
    const main = document.querySelector("main") as HTMLElement;
    const nav = document.querySelector("#nav") as HTMLElement;

    if (main) {
      main.style.marginTop = "0";
    }
    if (nav) {
      nav.style.top = "-650px";
    }
  };

  return (
    <div
      className="absolute left-0 px-4 transition-all w-full py-2 bg-white top-[-650px] flex justify-between z-50 h-[400px]"
      id="nav"
    >
      <div>
        <nav>
          <ul className="text-2xl font-[--lastik-regular] flex flex-col leading-6">
            {nav.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={`hover:underline uppercase ${
                    pathname === item.url ? "underline" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 lg:hidden">
          <Lan />
        </div>
      </div>
      <div>
        <button className="hover:underline cursor-pointer" onClick={closeMenu}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Nav;
