"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: string;
  image: string;
  image_2: string;
  title: string;
  text: string;
  ig: string;
  file: string;
}

const espacioCeramica = ({
  locale,
  section,
}: {
  locale: string;
  section: number;
}) => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/intros/" + locale;

  useEffect(() => {
    async function getItems() {
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

    getItems();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 pt-20">
      <div className="lg:w-1/4">
        <h2 className="text-sm font-[--lastik-regular] uppercase mb-4">
          {data[section].title}
        </h2>
      </div>
      <div className="lg:w-1/2 aspect-[7/5]">
        {data[section].image && (
          <img
            src={data[section].image}
            alt={data[section].title}
            className="block w-full h-full object-center object-cover"
          />
        )}
      </div>
      <p className="text-sm lg:w-1/4 lg:pr-12 whitespace-break-spaces leading-snug">
        {data[section].text}
      </p>
    </div>
  );
};

export default espacioCeramica;
