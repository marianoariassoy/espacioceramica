"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import Loader from "@/components/loading";
import Image from "@/components/Image";

interface image {
  id: number;
  image: string;
}

interface data {
  id: string;
  title: string;
  text: string;
  image: string;
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
        {data.slice(1).map((item: data, index: number) => {
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
        <article
          className="flex flex-col lg:flex-row gap-4 pt-20"
          id="article-0"
        >
          <div className="lg:w-1/4"></div>
          <div className="lg:w-1/2">
            {data[0].image && (
              <img src={data[0].image} alt="Hornos" className="w-full" />
            )}
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12 whitespace-break-spaces">
            {data[0].text}
          </div>
        </article>

        {data.slice(1).map((item: data, index: number) => {
          return (
            <article
              key={item.id}
              className="flex flex-col lg:flex-row gap-4 pt-20"
              id={`article-${index + 1}`}
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
      </div>

      <Footer />
      {file ? <Modal file={file} setFile={setFile} /> : null}
    </section>
  );
};

export default page;
