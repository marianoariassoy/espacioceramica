import { useState, useEffect } from "react";

import Image from "@/components/Image";
import Loader from "@/components/loading";

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

const hornos = ({ setFile, locale }: { setFile: any; locale: string }) => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <Loader />;

  return (
    <div
      className="w-full flex flex-col gap-y-20 pt-20 scroll-mt-12"
      id="hornos"
    >
      {data.map((item: data, index: number) => {
        return (
          <article key={index} className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/4">
              <h2 className="text-sm font-[--lastik-regular] uppercase mb-4">
                {item.title}
              </h2>
              <p className="text-sm leading-snug lg:pr-8">{item.text}</p>
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
  );
};

export default hornos;
