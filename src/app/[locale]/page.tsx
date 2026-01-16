"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import Image from "@/components/Image";
import Loader from "@/components/loading";

interface data {
  id: number;
  image: string;
}

const page = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/intros/ESP";

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
    <section className="flex flex-col items-start lg:items-center lg:flex-row gap-x-12 gap-y-8 pb-4 relative">
      <div className="lg:w-1/3">
        <div className="flex mt-20 lg:mt-0 lg:justify-center">
          <img src="/logo/logo.png" alt="Logo" className="w-2/3" />
        </div>
      </div>
      <Link
        href="/tienda"
        className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4]"
      >
        <Image src={data[0].image} alt="Portada Espacio Cerámica" />
      </Link>
    </section>
  );
};

export default page;
