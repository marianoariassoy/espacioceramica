"use client";

import Image from "@/components/Image";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    document.title = "Contacto Espacio Cerámica";
  }, []);

  return (
    <section className="pt-40 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-x-30 gap-y-8">
      <div className="aspect-[7/5]">
        <Image src="/images/ellos.jpg" alt="Ellos" />
      </div>
      <div className="text-sm flex flex-col gap-y-4">
        <article className="grid grid-cols-2 gap-4">
          <div>Espacio Cerámica</div>
          <div className="flex flex-col">
            <a
              href="https://instagram.com/espacioceramica"
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
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-4">
          <div>Fernando Lopez</div>
          <div className="flex flex-col">
            <a
              href="https://instagram.com/proyecto___liebre"
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
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-4">
          <div>Victoria Drisaldi</div>
          <div className="flex flex-col">
            <a
              href="https://instagram.com/victoriadrisaldi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @victoriadrisaldi
            </a>
            <a
              href="mailto:espaciocerámica@gmail.com"
              className="hover:underline"
            >
              mariavictoriadrisaldi@gmail.com
            </a>
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default page;
