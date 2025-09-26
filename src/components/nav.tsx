"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";

const Nav = ({ ig, action }: { ig: boolean; action: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-y-20 lg:gap-y-30 pt-2 pb-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-2">
        <nav>
          <ul className="text-4xl font-[--lastik-regular]">
            {nav.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={`hover:underline uppercase ${
                    pathname === item.url ? "underline" : ""
                  }`}
                  onClick={action}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div></div>
        <div></div>
        {ig ? (
          <div className="flex flex-col text-sm leading-4">
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
        ) : (
          <div></div>
        )}
      </div>

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
    </div>
  );
};

export default Nav;
