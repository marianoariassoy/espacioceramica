"use client";
import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import Loader from "@/components/loading";
import Image from "@/components/Image";

interface data {
  id: string;
  image: string;
  image_2: string;
  title: string;
  text: string;
  ig: string;
  file: string;
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

      <div className="flex flex-col mt-20">
        {data.map((item: data, index: number) => {
          return (
            <article
              className="flex flex-col lg:flex-row gap-4 pt-20  scroll-mt-12"
              id={`article-${index}`}
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
                    className="cursor-pointer aspect-[5/7]"
                    onClick={() => setFile(item.image)}
                  >
                    <Image src={item.image} alt={item.title} />
                  </button>
                )}
                {item.image_2 && (
                  <button
                    className="cursor-pointer aspect-[5/7]"
                    onClick={() => setFile(item.image_2)}
                  >
                    <Image src={item.image_2} alt={item.title} />
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
                {item.file ? (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline italic hover:opacity-70 "
                  >
                    {locale === "es" ? "Descargar CV" : "Download CV"}
                  </a>
                ) : null}
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
