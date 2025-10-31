"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Nav from "@/components/nav";
import Lan from "@/components/lan";
// import Cart from "@/components/cart";
import { useTranslations } from "next-intl";

const header = () => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const openMenu = () => {
    const main = document.querySelector("main") as HTMLElement;
    const nav = document.querySelector("#nav") as HTMLElement;

    if (main) {
      main.style.marginTop = "400px";
    }
    if (nav) {
      nav.style.top = "0";
    }
  };

  return (
    <header
      className="sticky py-2 top-0 z-30 w-full flex items-center justify-between px-4 bg-[#f6f6f7]"
      id="header"
    >
      <div className="flex-1">
        <button className="hover:underline cursor-pointer" onClick={openMenu}>
          {t("menu")}
        </button>
      </div>
      <div className="">
        {pathname !== "/" && pathname !== "/residencias" ? (
          <Link href="/" className="hover:opacity-80 transition-all">
            <img src="/logo/logo.svg" alt="Logo" className="h-8" />
          </Link>
        ) : null}
      </div>
      <div className="flex justify-end items-center gap-x-8 flex-1">
        <span className="hidden lg:block">
          <Lan />
        </span>
        <div>{t("cart")}</div>
      </div>

      <Nav />
    </header>
  );
};

export default header;
