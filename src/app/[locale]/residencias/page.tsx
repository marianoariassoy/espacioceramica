"use client";

import Voluntariados from "./voluntariados";
import Image from "@/components/Image";

const page = () => {
  return (
    <>
      <section className="flex flex-col lg:items-center lg:flex-row gap-x-12 gap-y-8 relative mb-20">
        <div className="lg:w-1/3 flex flex-col text-sm min-h-50vh">
          <div className="flex lg:justify-center mt-20 lg:mt-0">
            <img src="/logo/logo-residencias.svg" alt="Logo" className="h-20" />
          </div>
        </div>
        <div className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4] overflow-hidden">
          <Image src="/images/residencias.jpg" alt="Residencias" />
        </div>
      </section>

      <Voluntariados />
    </>
  );
};

export default page;
