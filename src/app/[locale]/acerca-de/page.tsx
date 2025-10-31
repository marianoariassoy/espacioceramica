"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import Loader from "@/components/loading";
import Gallery from "@/components/gallery";

interface data {
  id: string;
  image: string;
  image_2: string;
  title: string;
  text: string;
  ig: string;
}

const page = () => {
  const locale = useLocale();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState("#article-0");
  const [file, setFile] = useState("");
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/about/" + locale;

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

  useEffect(() => {
    document.title = "Acerca de Espacio Cerámica";
  }, []);

  if (loading) return <Loader />;

  const goTo = (id: string) => {
    setArticle(id);
    const article = document.querySelector(id);
    if (!article) return;
    article.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="fixed top-12 w-full py-2 flex flex-col bg-[#f6f6f7] z-10">
        <Item
          title="ESPACIO CERÁMICA"
          active={article === "#article-0"}
          action={() => goTo("#article-0")}
        />
        {data.map((item: data, index: number) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              active={article === "#article-" + (index + 1)}
              action={() => goTo("#article-" + (index + 1))}
            />
          );
        })}
      </div>

      <div className="flex flex-col mt-20">
        <article
          className="flex flex-col lg:flex-row gap-4 pt-20"
          id="article-0"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">
              ESPACIO CERÁMICA
            </h2>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/acerca-de.jpg"
              className="object-cover object-center aspect-[5/7]"
              alt="Espacio Cerámica"
            />
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12">
            {locale === "es" ? (
              <p>
                Espacio Cerámica es un taller de producción y experimentación de
                cerámica a leña, fundado en 2008 por los ceramistas Victoria
                Drisaldi (Buenos Aires) y Fernando López (Rosario). Actualmente
                se encuentra en Gaiman, en la margen sur del río Chubut, una
                región árida propia de la estepa patagónica. <br />
                <br />
                El taller nació en este entorno rural, donde también se
                construyeron varios hornos a leña. De este modo, el trabajo se
                centra especialmente en la quema en horno Anagama —de una sola
                cámara y diseño oriental—, herramienta ancestral que se
                resignifica desde una mirada contemporánea, revelando la huella
                material y la cualidad expresiva de las piezas.
                <br />
                <br />
                La ubicación geográfica del taller responde a esta búsqueda
                estética consciente, basada en la comunión entre el oficio y el
                modo de vida que posibilita el contexto. Así, la alfarería se
                desarrolla con materiales locales, explorando pastas propias y
                vidriados de alta temperatura a leña.
                <br />
                <br />
                Lo que se crea en Espacio cerámica, nuestros objetos, son
                producción directa del lugar habitado. Se trata de objetos que
                sólo pueden haberse hecho acá, en esta región, en esta zona
                geográfica donde el taller crece y funciona. Entendemos el
                oficio en su relación inseparable con el territorio, como una
                manera de habitarlo, cuidarlo, para trabajar la materia, y para
                darle usos y significaciones nuevas.
              </p>
            ) : (
              <p>
                Espacio Cerámica is a ceramics workshop founded in 2008 by
                Victoria Drisaldi and Fernando López. It is located in Gaiman,
                in the southern part of the Chubut region, a region of great
                natural beauty. The workshop was born in this environment, where
                the workshops grow and operate. We understand the office in its
                inseparable relationship with the territory, as a way of living,
                caring, working the material, and giving it new meanings.
                <br />
                <br />
                The geographic location of the workshop responds to this
                conscious aesthetic search, based on the community between the
                office and the way of life that allows the context. As such, the
                workshop develops with local materials, exploring local pastures
                and greenhouses of high temperature.
                <br />
                <br />
                What we create in Espacio Cerámica, our objects, are direct
                production of the place habited. We understand the office in its
                inseparable relationship with the territory, as a way of living,
                caring, working the material, and giving it new meanings.
              </p>
            )}
          </div>
        </article>

        <Gallery section={1} setFile={setFile} />

        {data.map((item: data, index: number) => {
          return (
            <article
              className="flex flex-col lg:flex-row gap-4 pt-20"
              id={`article-${index + 1}`}
              key={item.id}
            >
              <div className="lg:w-1/4">
                <h2 className="text-sm font-[--lastik-regular] uppercase">
                  {item.title}
                </h2>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                {item.image && (
                  <button
                    className="hover:opacity-80 cursor-pointer transition-opacity"
                    onClick={() => setFile(item.image)}
                  >
                    <img
                      src={item.image}
                      className="object-cover object-center aspect-[5/7]"
                      alt={item.title}
                    />
                  </button>
                )}
                {item.image_2 && (
                  <button
                    className="hover:opacity-80 cursor-pointer transition-opacity"
                    onClick={() => setFile(item.image)}
                  >
                    <img
                      src={item.image_2}
                      className="object-cover object-center aspect-[5/7]"
                      alt={item.title}
                    />
                  </button>
                )}
              </div>
              <div className="text-sm lg:w-1/4 flex flex-col gap-y-4 lg:pr-12">
                <a
                  href={"https://instagram.com/" + item.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @{item.ig}
                </a>
                <p className="whitespace-break-spaces">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      <Footer />
      {file ? <Modal file={file} setFile={setFile} /> : null}
    </section>
  );
};

export default page;
