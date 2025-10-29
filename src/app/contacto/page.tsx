import { metadata } from "../layout";

metadata.title = "Contacto Espacio Cerámica";

const page = () => {
  return (
    <section className="pt-40 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-x-30 gap-y-8">
      <div>
        <img src="/images/ellos.jpg" className="w-full" alt="Ellos" />
      </div>
      <div className="text-sm flex flex-col gap-y-4">
        <article className="grid grid-cols-2 gap-4">
          <div>Espacio Cerámica</div>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @espacioceramica
            </a>
            <a
              href="mailto:espaciocerámica@gmail.com"
              className="hover:underline"
            >
              espaciocerámica@gmail.com
            </a>
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-4">
          <div>Fernando Lopez</div>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @proyecto___liebre
            </a>
            <a
              href="mailto:fernandolopez@gmail.com"
              className="hover:underline"
            >
              fernandolopez@gmail.com
            </a>
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
        <article className="grid grid-cols-2 gap-4">
          <div>Victoria Drisaldi</div>
          <div className="flex flex-col">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @victoriadrisaldi
            </a>
            <a
              href="mailto:espaciocerámica@gmail.com"
              className="hover:underline"
            >
              mariavictoriadrisaldi@gmail.com
            </a>
            <span>Chubut, Patagonia Argentina.</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default page;
