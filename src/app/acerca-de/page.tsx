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
          <div className="text-sm lg:w-1/4">
            <p>
              Espacio cerámica es nuestro taller, un proyecto de búsqueda e
              investigación que surgió en el 2008, donde reunimos nuestras
              obsesiones en torno al oficio. Desde el comienzo construimos, a
              través de la experiencia, nuestra profesión, ampliando y
              profundizando nuestros conocimientos con cada nueva horneada. Así,
              todos los espacios que ocupamos se vinculan de algún modo con la
              cerámica. Actualmente nos encontramos en Gaiman, provincia de
              Chubut. Llegamos a la Patagonia después de un gran recorrido por
              el que nos fue conduciendo el hacer, rastreando la materia prima
              con la que desarrollamos nuestra cerámica de raíz, fuimos del
              Norte, a Villa Elisa en Buenos Aires, hasta instalarnos en el Sur
              de nuestro país. Sostenemos una relación de dependencia con el
              contexto en el que vivimos que se evidencia en la materia y sus
              procesos. Extraemos y trabajamos la arcilla directa del
              territorio, las propiedades que encontramos en el caolín de Gaiman
              nos permiten hornear las piezas a alta temperatura, entre los 1150
              y 1300 °C. Durante el proceso de quema se manifiesta del mismo
              modo esta necesidad del cuerpo que hay en el oficio, la forma en
              la cual estibamos las piezas dentro del horno,y la atención y la
              escucha que requiere el fuego, porque es este el que nos da los
              indicios para intencionar la horneada. Es, en todo sentido, un
              suceso. El anagama y el noborigama, dos tipos de hornos con los
              que trabajamos y que tienen su origen en Oriente, se encienden una
              o dos veces al año. Las piezas arden por cien horas y nosotros
              alimentamos ese fuego. Establecemos la hoja de ruta de la quema,
              dejando lugar a cierto grado de azar, donde el resultado nunca es
              dos veces el mismo. El registro matérico de la temperatura y la
              ceniza en contacto con la arcilla es la cualidad expresiva de
              nuestras piezas. Nuestro taller es un testimonio vivo de nuestra
              práctica, que se cruza e intercede con lo cotidiano. Nuestros
              tiempos están dictados por la cerámica, desde la recolección de la
              arcilla, su preparación, la producción de las piezas, el acopio de
              leña, hasta la culminación cuando las retiramos del horno. Todo
              ello atravesado por el contexto, el paisaje del valle, el río
              Chubut y los vientos patagónicos. Finalmente, las piezas de
              Espacio Cerámica llevan consigo el reflejo de estas experiencias
              como huella permanente.
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
          <div className="text-sm lg:w-1/4 flex flex-col gap-y-4">
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
          <div className="text-sm lg:w-1/4 flex flex-col gap-y-4">
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
