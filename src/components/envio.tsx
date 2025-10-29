"use client";

import { useState } from "react";

const envio = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-2 mb-2 border-b border-black text-sm">
      <div
        className="flex gap-4 justify-between cursor-pointer hover:opacity-70"
        onClick={() => setOpen(!open)}
      >
        <div>Detalles del envío</div>
        <div>{open ? "-" : "+"}</div>
      </div>

      {open ? (
        <div className="my-4 leading-4 text-xs">
          Cada pieza de cerámica que enviamos viaja con el mismo cuidado con el
          que fue creada. Primero la envolvemos cuidadosamente en papel de seda
          y luego en varias capas de burbujas de aire, para proteger cada
          detalle.
          <br /> <br />
          Después, la colocamos dentro de una caja de cartón resistente,
          completamente acolchada con viruta de papel o espuma, de modo que la
          pieza quede firme y no se mueva. <br /> <br />
          Esa primera caja va dentro de una segunda, un poco más grande, con un
          nuevo relleno amortiguante entre ambas. Este sistema de doble caja nos
          permite asegurar que la cerámica esté protegida frente a golpes o
          movimientos durante el transporte. Por último, sellamos todo con cinta
          reforzada y rotulamos el paquete con la indicación “Frágil” y “Este
          lado arriba”. <br /> <br />
          Así garantizamos que cada pieza llegue a destino tal como salió de
          nuestro taller: intacta, lista para ser parte de tu espacio.
        </div>
      ) : null}
    </div>
  );
};

export default envio;
