"use client";

import Item from "@/components/item";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ImageAspect from "@/components/ImageAspect";
import { useState, useEffect } from "react";

const page = () => {
  const [article, setArticle] = useState("");

  const goTo = (id: string) => {
    setArticle(id);
    const article = document.querySelector(id);
    if (!article) return;
    article.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Acerca de Espacio Cerámica";
  }, []);

  return (
    <section>
      <div className="fixed top-12 lg:top-0 py-2 flex z-40 flex-col -mt-1">
        <Item
          title="ESPACIO CERÁMICA"
          active={article === "#espacio-ceramica"}
          action={() => goTo("#espacio-ceramica")}
        />
        <Item
          title="VICTORIA DRISALDI"
          active={article === "#victoria-drisaldi"}
          action={() => goTo("#victoria-drisaldi")}
        />
        <Item
          title="FERNANDO LOPEZ"
          active={article === "#fernando-lopez"}
          action={() => goTo("#fernando-lopez")}
        />
      </div>

      <div className="flex flex-col py-30">
        <article
          className="flex flex-col lg:flex-row gap-4 pt-30"
          id="espacio-ceramica"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">
              ESPACIO CERÁMICA
            </h2>
          </div>
          <div className="lg:w-1/2">
            <ImageAspect alt="Espacio Cerámica" file="/images/acerca-de.jpg" />
          </div>
          <div className="text-sm lg:w-1/4 lg:pr-12">
            <p>
              <strong>Espacio Cerámica </strong>
              es un taller de producción y experimentación de cerámica a leña,
              fundado en 2008 por los ceramistas Victoria Drisaldi (Buenos
              Aires) y Fernando López (Rosario). Actualmente se encuentra en
              Gaiman, en la margen sur del río Chubut, una región árida propia
              de la estepa patagónica. <br />
              <br />
              El taller nació en este entorno rural, donde también se
              construyeron varios hornos a leña. De este modo, el trabajo se
              centra especialmente en la quema en horno Anagama —de una sola
              cámara y diseño oriental—, herramienta ancestral que se
              resignifica desde una mirada contemporánea, revelando la huella
              material y la cualidad expresiva de las piezas.
              <br />
              <br />
              La ubicación geográfica del taller responde a esta búsqueda
              estética consciente, basada en la comunión entre el oficio y el
              modo de vida que posibilita el contexto. Así, la alfarería se
              desarrolla con materiales locales, explorando pastas propias y
              vidriados de alta temperatura a leña.
              <br />
              <br />
              Lo que se crea en Espacio cerámica, nuestros objetos, son
              producción directa del lugar habitado. Se trata de objetos que
              sólo pueden haberse hecho acá, en esta región, en esta zona
              geográfica donde el taller crece y funciona. Entendemos el oficio
              en su relación inseparable con el territorio, como una manera de
              habitarlo, cuidarlo, para trabajar la materia, y para darle usos y
              significaciones nuevas.
            </p>
          </div>
        </article>

        <article
          className="flex flex-col lg:flex-row gap-4 pt-30"
          id="victoria-drisaldi"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">
              VICTORIA DRISALDI
            </h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <ImageAspect
              alt="Victoria Drisaldi"
              file="/images/acerca-de-1.jpg"
            />
            <ImageAspect
              alt="Victoria Drisaldi"
              file="/images/acerca-de-2.jpg"
            />
          </div>
          <div className="text-sm lg:w-1/4 flex flex-col gap-y-4 lg:pr-12">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @victoriadrisaldi
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
              modo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea com.
            </p>
          </div>
        </article>

        <article
          className="flex flex-col lg:flex-row gap-4 pt-30"
          id="fernando-lopez"
        >
          <div className="lg:w-1/4">
            <h2 className="text-sm font-[--lastik-regular]">FERNANDO LOPEZ</h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <ImageAspect alt="Fernando Lopez" file="/images/acerca-de-3.jpg" />
            <ImageAspect alt="Fernando Lopez" file="/images/acerca-de-4.jpg" />
          </div>
          <div className="text-sm lg:w-1/4 flex flex-col gap-y-4 lg:pr-12">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @proyecto___liebre
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
              modo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea com.
            </p>
          </div>
        </article>
      </div>

      <Nav ig={false} action={() => null} />
      <Footer />
    </section>
  );
};

export default page;
