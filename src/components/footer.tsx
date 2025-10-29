"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";

const footer = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-20 mt-40">
      <nav className="mb-20">
        <ul className="text-2xl font-[--lastik-regular] flex flex-col leading-6">
          {nav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className={`hover:underline uppercase ${
                  pathname === item.url ? "underline" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-sm max-w-3xl leading-4">
        <div className="flex flex-col gap-y-2">
          <span>Espacio Cerámica </span>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @espacioceramica
            </a>
            <a
              href="mailto:espaciocerámica@gmail.com"
              className="hover:underline"
            >
              espaciocerámica@gmail.com
            </a>
          </div>
          <span>Chubut, Patagonia Argentina.</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span>Fernando Lopez</span>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @proyecto___liebre
            </a>
            <a
              href="mailto:fernandolopez@gmail.com"
              className="hover:underline"
            >
              fernandolopez@gmail.com
            </a>
          </div>
          <span>Chubut, Patagonia Argentina.</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span>Victoria Drisaldi</span>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @victoriadrisaldi
            </a>
            <a
              href="mailto:mariavictoriadrisaldi@gmail.com"
              className="hover:underline"
            >
              mariavictoriadrisaldi@gmail.com
            </a>
          </div>
          <span>Chubut, Patagonia Argentina.</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 items-end gap-x-12 gap-y-4 text-sm max-w-3xl pb-4 leading-4">
        <div className="flex flex-col">
          <Link href={"/"} className="hover:underline">
            Creditos
          </Link>
          <Link href={"/"} className="hover:underline">
            FAQs
          </Link>
          <Link href={"/"} className="hover:underline">
            Políticas de Privacidad
          </Link>
        </div>
        <div className="flex flex-col">
          <span>Encontranos en</span>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @espacioceramica
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
