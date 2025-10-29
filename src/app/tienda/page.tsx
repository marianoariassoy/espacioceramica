"use client";

import Item from "@/components/item";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Footer from "@/components/footer";

const page = () => {
  const [category, setCategory] = useState(0);
  const [horno, setHorno] = useState(0);
  const [autor, setAutor] = useState(0);

  useEffect(() => {
    document.title = "Tienda Espacio Cerámica";
  }, []);

  return (
    <section className="relative">
      <div className="w-full sticky top-12 flex flex-col mb-40 bg-[#f6f6f7] py-2 z-10">
        <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap">
          <Item
            title="Ver Todo"
            active={category === 0 ? true : false}
            action={() => setCategory(0)}
          />
          <Item
            title="Teteras"
            active={category === 1 ? true : false}
            action={() => setCategory(1)}
          />
          <Item
            title="Vajilla"
            active={category === 2 ? true : false}
            action={() => setCategory(2)}
          />
          <Item
            title="Jarrones"
            active={category === 3 ? true : false}
            action={() => setCategory(3)}
          />
          <Item
            title="Floreros"
            active={category === 4 ? true : false}
            action={() => setCategory(4)}
          />
          <Item
            title="Vajilla de Té"
            active={category === 5 ? true : false}
            action={() => setCategory(5)}
          />
          <Item
            title="Botellas"
            active={category === 6 ? true : false}
            action={() => setCategory(6)}
          />
          <Item
            title="Objetos"
            active={category === 7 ? true : false}
            action={() => setCategory(7)}
          />
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap my-2 lg:my-0">
          <Item
            title="Fernando López"
            active={autor === 1 ? true : false}
            action={() => setAutor(1)}
          />
          <Item
            title="Victoria Drisaldi"
            active={autor === 2 ? true : false}
            action={() => setAutor(2)}
          />
        </div>
        <div className="flex gap-x-2 text-sm font-[--lastik-regular]">
          <div>
            (
            <input
              type="text"
              className="border-b border-black border-dashed lg:w-64 px-2 focus:outline-none"
            />
            )
          </div>

          <button className="cursor-pointer hover:text-white hover:bg-black">
            BUSCAR
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </section>
  );
};

export default page;
