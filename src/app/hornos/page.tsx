"use client";

import Item from "@/components/item";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ImageAspect from "@/components/ImageAspect";

import { useState, useEffect } from "react";

const page = () => {
  const [article, setArticle] = useState("");

  const goTo = (id: string) => {
    setArticle(id);
    const article = document.querySelector(id);
    if (!article) return;
    article.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Hornos Espacio Cerámica";
  }, []);

  return (
    <section>
      <div className="fixed top-12 lg:top-0 py-2 z-40 flex flex-col -mt-1">
        <Item
          title="LEÑA"
          active={article === "#lena"}
          action={() => goTo("#lena")}
        />
        <Item
          title="ANAGAMA"
          active={article === "#anagama"}
          action={() => goTo("#anagama")}
        />
        <Item
          title="NOBORIGAMA"
          active={article === "#noborigama"}
          action={() => goTo("#noborigama")}
        />
      </div>

      <div className="w-full flex flex-col py-30">
        <article className="flex flex-col justify-start items-start lg:flex-row gap-4 pt-30">
          <div className="lg:w-1/4"></div>
          <div className="lg:w-1/2">
            <img
              src="/images/hornos.jpg"
              className="h-full w-full object-cover object-center"
              alt="Hornos"
            />
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12">
            <p>
              Estando en Buenos Aires compartimos tres años junto a Im, maestro
              y artesano coreano quien nos introdujo a dos tipos de hornos de
              origen Oriental, el Anagama y el Noborigama, que establecen una
              forma de apro- ximación muy específica al oficio en la que
              desarrolla- mos una cerámica de raíz, evitando procesos indus-
              triales. Junto a él aprendimos a construirlos, a prepa- rarlos
              para la quema y a limpiarlos. Fabricamos nues- tra propia
              herramienta de trabajo y también la cuida- mos. Tanto el Anagama
              como el Noborigama, donde la diferencia elemental radica en el
              número de cámaras y la proximidad de la ceniza a las piezas,
              permiten una horneada a alta temperatura, más allá de los 1200 °C.
              El tiempo del fuego requiere de una preparación previa. Encendemos
              los hornos una o dos veces al año, ardiendo por 100 horas, y
              retirando las piezas cinco días después, el tiempo en que tarda el
              horno en enfriarse. Este diálogo entre la materialidad y el
              proceso de quema queda grabado en la cerámica y define su
              identidad y carácter, tanto el material como nosotros mismos somos
              sensibilizados por el proceso de fuego.
            </p>
          </div>
        </article>

        <article className="flex flex-col lg:flex-row gap-4 pt-30" id="lena">
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">LEÑA</h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ImageAspect alt="Hornos" file="/images/hornos-lenia-1.jpg" />
            <ImageAspect alt="Hornos" file="/images/hornos-lenia-2.jpg" />
            <ImageAspect alt="Hornos" file="/images/hornos-lenia-3.jpg" />
          </div>
        </article>

        <article className="flex flex-col lg:flex-row gap-4 pt-30" id="anagama">
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">ANAGAMA</h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ImageAspect
              alt="Hornos Anagama"
              file="/images/hornos-anagama-1.jpg"
            />
            <ImageAspect
              alt="Hornos Anagama"
              file="/images/hornos-anagama-2.jpg"
            />
            <ImageAspect
              alt="Hornos Anagama"
              file="/images/hornos-anagama-3.jpg"
            />
          </div>
        </article>

        <article
          className="flex flex-col lg:flex-row gap-4 pt-30"
          id="noborigama"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">NOBORIGAMA</h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ImageAspect
              alt="Hornos Noborigama"
              file="/images/hornos-noborigama-1.jpg"
            />
            <ImageAspect
              alt="Hornos Noborigama"
              file="/images/hornos-noborigama-2.jpg"
            />
            <ImageAspect
              alt="Hornos Noborigama"
              file="/images/hornos-noborigama-3.jpg"
            />
          </div>
        </article>
      </div>

      <Nav ig={false} action={() => null} />
      <Footer />
    </section>
  );
};

export default page;
