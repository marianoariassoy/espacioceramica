import Credits from "@/components/credits";

const page = () => {
  return (
    <section className="flex flex-col items-start lg:items-center lg:flex-row gap-x-12 gap-y-8 pt-10 relative">
      <div className=" absolute top-0 hidden lg:block">
        <Credits />
      </div>
      <div className="block lg:hidden">
        <Credits />
      </div>
      <div className="lg:w-1/3 flex flex-col text-sm">
        <div className="flex lg:justify-center">
          <img src="/logo/logo.svg" alt="Logo" className="h-12" />
        </div>
      </div>
      <div className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4] overflow-hidden">
        <img
          src="/images/home.jpg"
          alt="Imagen"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default page;
