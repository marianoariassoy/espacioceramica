"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import Loader from "@/components/loading";

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
  const [article, setArticle] = useState("#article-0");
  const [file, setFile] = useState("");
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/horns/" + locale;

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
    document.title = "Hornos Espacio Cerámica";
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
      <div className="fixed top-12 w-full bg-[#f6f6f7] py-2 z-10">
        {data.map((item: data, index: number) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              active={article === "#article-" + index}
              action={() => goTo("#article-" + index)}
            />
          );
        })}
      </div>

      <div className="w-full flex flex-col pt-20">
        <article className="flex flex-col justify-start items-start lg:flex-row gap-4 pt-20">
          <div className="lg:w-4/12 text-sm lg:pr-20">
            {locale === "es" ? (
              <p>
                Estando en Buenos Aires compartimos tres años junto a Im,
                maestro y artesano coreano quien nos introdujo a dos tipos de
                hornos de origen Oriental, el Anagama y el Noborigama, que
                establecen una forma de apro- ximación muy específica al oficio
                en la que desarrolla- mos una cerámica de raíz, evitando
                procesos indus- triales. Junto a él aprendimos a construirlos, a
                prepa- rarlos para la quema y a limpiarlos. Fabricamos nues- tra
                propia herramienta de trabajo y también la cuida- mos.
                <br />
                <br />
                Tanto el Anagama como el Noborigama, donde la diferencia
                elemental radica en el número de cámaras y la proximidad de la
                ceniza a las piezas, permiten una horneada a alta temperatura,
                más allá de los 1200 °C. El tiempo del fuego requiere de una
                preparación previa. Encendemos los hornos una o dos veces al
                año, ardiendo por 100 horas, y retirando las piezas cinco días
                después, el tiempo en que tarda el horno en enfriarse. Este
                diálogo entre la materialidad y el proceso de quema queda
                grabado en la cerámica y define su identidad y carácter, tanto
                el material como nosotros mismos somos sensibilizados por el
                proceso de fuego.
              </p>
            ) : (
              <p>
                Sitting in Buenos Aires, we share three years with Im, master
                and coreano artist who introduced us to two types of Oriental
                horns, the Anagama and the Noborigama, which establish a form of
                approximation very specific to the office in which we develop a
                ceramic root, avoiding industrial processes. Together with him,
                we learn to build them, to prepare them for firing and to clean
                up them. We also make our own tool of work and also care for
                them.
                <br />
                <br />
                Both the Anagama and the Noborigama, where the elemental
                difference originates in the number of cameras and the proximity
                of the cinnabar to the pieces, allow a fireda at high
                temperatures, beyond the 1200 °C. The time of the fire requires
                a preparation. We heat the horns once a year, burning for 100
                hours, and removing the pieces five days after, the time it
                takes the fire to dry. This dialogue between materiality and the
                process of quema that is recorded in the ceramics and defines
                its identity and character, both the material and us ourselves
                are sensitive to the process of fire.
              </p>
            )}
          </div>
          <div className="lg:w-2/3">
            <img
              src="/images/hornos.jpg"
              className="h-full w-full object-cover object-center"
              alt="Hornos"
            />
          </div>
        </article>

        {data.map((item: data, index: number) => {
          return (
            <article
              key={item.id}
              className="flex flex-col lg:flex-row gap-4 pt-20"
              id={`article-${index}`}
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
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => setFile(image.image)}
                      key={image.id}
                    >
                      <img
                        src={image.image}
                        className="object-cover object-center aspect-[5/7]"
                        alt={item.title}
                      />
                    </button>
                  );
                })}
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
