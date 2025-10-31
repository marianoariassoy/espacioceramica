"use client";

import { useLocale } from "next-intl";
import Info from "@/components/info";
import Info2 from "@/components/info2";
import Envio from "@/components/envio";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/loading";
import Image from "@/components/Image";

interface image {
  id: number;
  image: string;
}

interface data {
  id: number;
  image: string;
  title: string;
  text: string;
  text_2: string;
  size: string;
  price_ars: string;
  price_usd: string;
  author: string;
  availability: boolean;
  images: image[];
}

const page = () => {
  const locale = useLocale();
  const [data, setData] = useState<data>();
  const [loading, setLoading] = useState(true);
  const [goToImage, setGoToImage] = useState(1);
  const { slug } = useParams();
  const apiURL =
    process.env.NEXT_PUBLIC_API_URL + "/product/" + slug + "/" + locale;

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
        threshold: 0.5,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [data]);

  if (loading) return <Loader />;
  if (!data) return null;

  const goTo = (id: number) => {
    setGoToImage(id);
    const image = document.querySelector(`#image-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row-reverse pt-30 lg:pt-40 pb-2">
        <div className="lg:fixed lg:left-6 lg:w-2/5 flex flex-col gap-y-10 lg:pr-20 pb-8">
          <h1 className="text-3xl lg:text-4xl font-[--lastik-regular] uppercase">
            {data.title}
          </h1>
          <div>
            <Info title="Detalle" description={data.text} />
            <Info
              title="Precio"
              description={"ARS " + data.price_ars + " / USD " + data.price_usd}
            />
            <Info
              title={locale === "es" ? "Autor" : "Author"}
              description={data.author}
            />
            <Info2
              title={locale === "es" ? "Dimensiones" : "Size"}
              description={data.size}
              text={data.text_2}
            />
            <div className="flex gap-x-4 mb-2 pb-2 text-sm border-b border-black">
              <div className="w-1/3"> </div>
              <div className="w-2/3 font-[--lastik-regular]">
                <button className="cursor-pointer hover:text-white hover:bg-black">
                  {locale === "es" ? "AGREGAR AL CARRITO" : "ADD TO CART"}
                </button>
              </div>
            </div>

            <Envio lan={locale} />
          </div>
        </div>
        <div className="lg:w-3/5 flex">
          <div className="flex-1 flex flex-col gap-y-2 lg:pr-30">
            {data.images.map((image: image, index: number) => {
              return (
                <div id={`image-${index + 1}`} key={image.id}>
                  <Image src={image.image} alt={data.title} />
                </div>
              );
            })}
          </div>
          <div className="fixed right-6 w-14 flex-col gap-y-1 hidden lg:flex">
            {data.images.map((image: image, index: number) => {
              return (
                <button
                  key={image.id}
                  onClick={() => goTo(index + 1)}
                  className={`${
                    goToImage === index + 1 ? "opacity-100" : "opacity-50"
                  } hover:opacity-100 cursor-pointer`}
                >
                  <Image src={image.image} alt={data.title} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
