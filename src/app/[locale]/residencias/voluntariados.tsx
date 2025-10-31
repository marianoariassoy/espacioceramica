"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import Modal from "@/components/modal";
import Gallery from "@/components/gallery";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Image from "@/components/Image";

interface image {
  id: number;
  image: string;
}

interface data {
  id: string;
  title: string;
  images: image[];
}

const page = () => {
  const locale = useLocale();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState("#voluntariados");
  const [file, setFile] = useState("");
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/residences/" + locale;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading)
    return (
      <div className="pb-20">
        <Loader />
      </div>
    );

  const goTo = (id: string) => {
    setArticle(id);
    const article = document.querySelector(id);
    if (!article) return;
    article.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="sticky top-10 flex flex-col w-full bg-[#f6f6f7] py-2 z-10">
        <Item
          title={locale === "es" ? "Voluntariados" : "Volunteers"}
          active={article === "#voluntariados"}
          action={() => goTo("#voluntariados")}
        />
        <Item
          title={locale === "es" ? "Pasantías" : "Passants"}
          active={article === "#pasantias"}
          action={() => goTo("#pasantias")}
        />
      </div>

      <div className="w-full flex flex-col">
        <article
          className="flex flex-col justify-start items-start lg:flex-row gap-4 pt-20"
          id="voluntariados"
        >
          <div className="lg:w-1/4"></div>
          <div className="lg:w-1/2">
            <Image src="/images/voluntariados.jpg" alt="Voluntariados" />
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12">
            {locale === "es" ? (
              <p>
                A lo largo del año recibimos a voluntarios interesados en
                acompañarnos en las distintas etapas del proceso de producción y
                así profundizar en el oficio desde una experiencia en el
                territorio, compartiendo junto a nosotros la cotidianeidad del
                día y el taller.
              </p>
            ) : (
              <p>
                A long time we received volunteers interested in joining us in
                the different stages of production and so deepening our office
                experience from a territory experience, sharing with us the
                daily life and the workshop.
              </p>
            )}
          </div>
        </article>

        <Gallery section={2} setFile={setFile} />

        <section id="pasantias">
          {data.map((item: data, index: number) => {
            return (
              <article
                key={item.id}
                className="flex flex-col lg:flex-row gap-4 pt-20"
              >
                <div className="lg:w-1/4">
                  <h2 className="text-sm font-[--lastik-regular] uppercase">
                    {item.title}
                  </h2>
                </div>
                <div className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-2">
                  {item.images.map((image: image) => {
                    return (
                      <button
                        className="cursor-pointer aspect-[5/7]"
                        onClick={() => setFile(image.image)}
                        key={image.id}
                      >
                        <Image src={image.image} alt={item.title} />
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </div>

      <Footer />
      {file ? <Modal file={file} setFile={setFile} /> : null}
    </section>
  );
};

export default page;
