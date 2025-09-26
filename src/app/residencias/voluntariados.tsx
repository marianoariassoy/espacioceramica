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

  return (
    <section>
      <div className="sticky top-1 z-50 flex flex-col  mt-30">
        <Item
          title="Voluntariados"
          active={article === "#voluntariados"}
          action={() => goTo("#voluntariados")}
        />
        <Item
          title="Pasantías"
          active={article === "#pasantias"}
          action={() => goTo("#pasantias")}
        />
      </div>

      <div className="w-full flex flex-col pb-30">
        <article className="flex flex-col justify-start items-start lg:flex-row gap-4 pt-30">
          <div className="lg:w-1/4"></div>
          <div className="lg:w-1/2">
            <img
              src="/images/voluntariados.jpg"
              className="h-full w-full object-cover object-center"
              alt="Voluntariados"
            />
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12">
            <p>
              A lo largo del año recibimos a voluntarios interesados en
              acompañarnos en las distintas etapas del proceso de producción y
              así profundizar en el oficio desde una experiencia en el
              territorio, compartiendo junto a nosotros la cotidianeidad del día
              y el taller.
            </p>
          </div>
        </article>

        <article
          className="grid grid-cols-2 lg:grid-cols-4 gap-2  pt-30"
          id="voluntariados"
        >
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-1.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-2.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-3.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-4.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-5.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-6.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-7.jpg" />
          <ImageAspect alt="Voluntariado" file="/images/voluntariado-8.jpg" />
        </article>

        <article
          className="flex flex-col lg:flex-row gap-4 pt-30"
          id="pasantias"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">
              KUMO CERÁMICA, 2022
            </h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ImageAspect alt="Kumo" file="/images/pasantia-1.jpg" />
            <ImageAspect alt="Kumo" file="/images/pasantia-2.jpg" />
            <ImageAspect alt="Kumo" file="/images/pasantia-3.jpg" />
          </div>
        </article>

        <article className="flex flex-col lg:flex-row gap-4 pt-30">
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">
              CLEMENTINA, 2022
            </h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ImageAspect alt="Clementina" file="/images/clementina-1.jpg" />
            <ImageAspect alt="Clementina" file="/images/clementina-2.jpg" />
            <ImageAspect alt="Clementina" file="/images/clementina-3.jpg" />
          </div>
        </article>
      </div>

      <Nav ig={false} action={() => null} />
      <Footer />
    </section>
  );
};

export default page;
