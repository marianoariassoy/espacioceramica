import Credits from "@/components/credits";
import { metadata } from "../layout";

metadata.title = "Residencias Espacio Cerámica";

const page = () => {
  return (
    <section className="flex flex-col lg:items-center lg:flex-row gap-x-12 gap-y-8 pt-10 relative">
      <div className="absolute top-0 hidden lg:block">
        <Credits />
      </div>
      <div className="block lg:hidden">
        <Credits />
      </div>
      <div className="lg:w-1/3 flex flex-col text-sm">
        <div className="flex lg:justify-center">
          <img src="/logo/logo-residencias.svg" alt="Logo" className="h-20" />
        </div>
      </div>
      <div className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4] overflow-hidden">
        <img
          src="/images/residencias.jpg"
          alt="Imagen"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default page;
