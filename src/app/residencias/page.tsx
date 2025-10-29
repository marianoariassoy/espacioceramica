import { metadata } from "../layout";
import Link from "next/link";
import Voluntariados from "./voluntariados";
metadata.title = "Residencias Espacio Cerámica";

const page = () => {
  return (
    <>
      <section className="flex flex-col lg:items-center lg:flex-row gap-x-12 gap-y-8 relative">
        <div className="lg:w-1/3 flex flex-col text-sm min-h-50vh">
          <div className="flex lg:justify-center mt-20 lg:mt-0">
            <img src="/logo/logo-residencias.svg" alt="Logo" className="h-20" />
          </div>
        </div>
        <div className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4] overflow-hidden mb-10">
          <img
            src="/images/residencias.jpg"
            alt="Residencias"
            className="h-full w-full object-cover object-center transition-opacity"
          />
        </div>
      </section>

      <Voluntariados />
    </>
  );
};

export default page;
