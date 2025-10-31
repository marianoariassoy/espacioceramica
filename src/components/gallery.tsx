import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Image from "@/components/Image";

interface data {
  id: number;
  image: string;
}

const gallery = ({ section, setFile }: { section: number; setFile: any }) => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/galleries/" + section;

  useEffect(() => {
    async function getUsers() {
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

    getUsers();
  }, []);

  if (loading) return <Loader />;

  return (
    <article className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-20">
      {data.map((item: data) => {
        return (
          <button
            className="hover:opacity-80 cursor-pointer transition-opacity"
            key={item.id}
            onClick={() => setFile(item.image)}
          >
            <Image src={item.image} alt="Espacio Ceramica" />
          </button>
        );
      })}
    </article>
  );
};

export default gallery;
