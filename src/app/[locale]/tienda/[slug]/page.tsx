"use client";

import Info from "@/components/info";
import Info2 from "@/components/info2";
import Envio from "@/components/envio";
import { useState, useEffect } from "react";

const page = () => {
  const [goToImage, setGoToImage] = useState(1);

  const goTo = (id: number) => {
    setGoToImage(id);
    const image = document.querySelector(`#image-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[id^='image-']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.replace("image-", ""));
            setGoToImage(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // se activa cuando 50% de la imagen está visible
        rootMargin: "0px 0px 0px 0px", // sin margen negativo
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row-reverse pt-30 lg:pt-40 pb-2">
        <div className="lg:fixed lg:left-6 lg:w-2/5 flex flex-col gap-y-10 lg:pr-20 pb-8">
          <h1 className="text-3xl lg:text-4xl font-[--lastik-regular] uppercase">
            Tetera Kyusu
          </h1>
          <div>
            <Info title="Detalle" description="Arcilla en Horno Anagama" />
            <Info title="Precio" description="ARS 80,000.00 / USD 1000.00" />
            <Info title="Autor" description="Victoria Drisaldi" />
            <Info2
              title="Dimensiones"
              description={`Ø 44 x A 177 cm
Ø 17”” x H 68””
Consultar por tamaño a medida`}
            />
            <div className="flex gap-x-4 mb-2 pb-2 text-sm border-b border-black">
              <div className="w-1/3"> </div>
              <div className="w-2/3 font-[--lastik-regular]">
                <button className="cursor-pointer hover:text-white hover:bg-black">
                  AGREGAR AL CARRITO
                </button>
              </div>
            </div>

            <Envio />
          </div>
        </div>
        <div className="lg:w-3/5 flex">
          <div className="flex-1 flex flex-col gap-y-2 lg:pr-30">
            <div id="image-1">
              <img
                src="/images/pasantia-1.jpg"
                alt="Tetera Kyusu"
                className="w-full"
              />
            </div>
            <div id="image-2">
              <img
                src="/images/pasantia-2.jpg"
                alt="Tetera Kyusu"
                className="w-full"
              />
            </div>
            <div id="image-3">
              <img
                src="/images/pasantia-3.jpg"
                alt="Tetera Kyusu"
                className="w-full"
              />
            </div>
            <div id="image-4">
              <img
                src="/images/voluntariado-1.jpg"
                alt="Tetera Kyusu"
                className="w-full"
              />
            </div>
            <div id="image-5">
              <img
                src="/images/voluntariado-2.jpg"
                alt="Tetera Kyusu"
                className="w-full"
              />
            </div>
          </div>
          <div className="fixed right-6 w-14 flex-col gap-y-1 hidden lg:flex">
            <button onClick={() => goTo(1)}>
              <img
                src="/images/pasantia-1.jpg"
                alt="Tetera Kyusu"
                className={`${
                  goToImage === 1 ? "opacity-100" : "opacity-50"
                } hover:opacity-100 cursor-pointer`}
              />
            </button>
            <button onClick={() => goTo(2)}>
              <img
                src="/images/pasantia-2.jpg"
                alt="Tetera Kyusu"
                className={`${
                  goToImage === 2 ? "opacity-100" : "opacity-50"
                } hover:opacity-100 cursor-pointer`}
              />
            </button>
            <button onClick={() => goTo(3)}>
              <img
                src="/images/pasantia-3.jpg"
                alt="Tetera Kyusu"
                className={`${
                  goToImage === 3 ? "opacity-100" : "opacity-50"
                } hover:opacity-100 cursor-pointer`}
              />
            </button>
            <button onClick={() => goTo(4)}>
              <img
                src="/images/voluntariado-1.jpg"
                alt="Tetera Kyusu"
                className={`${
                  goToImage === 4 ? "opacity-100" : "opacity-50"
                } hover:opacity-100 cursor-pointer`}
              />
            </button>
            <button onClick={() => goTo(5)}>
              <img
                src="/images/voluntariado-2.jpg"
                alt="Tetera Kyusu"
                className={`${
                  goToImage === 5 ? "opacity-100" : "opacity-50"
                } hover:opacity-100 cursor-pointer`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
