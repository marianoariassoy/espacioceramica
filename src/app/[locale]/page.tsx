import { Link } from "@/i18n/navigation";

const page = () => {
  return (
    <section className="flex flex-col items-start lg:items-center lg:flex-row gap-x-12 gap-y-8  relative">
      <div className="lg:w-1/3">
        <div className="flex mt-20 lg:mt-0 lg:justify-center">
          <img src="/logo/logo.svg" alt="Logo" className="h-12" />
        </div>
      </div>
      <Link
        href="/tienda"
        className="flex lg:w-2/3 aspect-[4/5] lg:aspect-[5/4] overflow-hidden"
      >
        <img
          src="/images/home.jpg"
          alt="Imagen"
          className="h-full w-full object-cover object-center hover:opacity-80 transition-all"
        />
      </Link>
    </section>
  );
};

export default page;
