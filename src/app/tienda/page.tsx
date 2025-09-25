"use client";

import Item from "@/components/item";
import { useState, useEffect } from "react";
import Credits from "@/components/credits";
import Card from "@/components/card";

const page = () => {
  const [category, setCategory] = useState(0);
  const [horno, setHorno] = useState(0);
  const [autor, setAutor] = useState(0);

  useEffect(() => {
    document.title = "Tienda Espacio Cerámica";
  }, []);

  return (
    <section className="relative">
      <div className="absolute top-2 hidden lg:block z-50">
        <Credits />
      </div>

      <div className="w-full py-20 lg:py-40 lg:pt-50 flex justify-center">
        <div className="flex flex-col">
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
              title="Objeto"
              active={category === 7 ? true : false}
              action={() => setCategory(7)}
            />
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap py-1 my-1 lg:my-0 lg:py-0">
            <Item
              title="Leña"
              active={horno === 1 ? true : false}
              action={() => setHorno(1)}
            />
            <Item
              title="Anagama"
              active={horno === 2 ? true : false}
              action={() => setHorno(2)}
            />
            <Item
              title="Noborigama"
              active={horno === 3 ? true : false}
              action={() => setHorno(3)}
            />
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-8 flex-wrap">
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
        </div>
      </div>

      <div className="border-t border-black pt-4 grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
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
    </section>
  );
};

export default page;
