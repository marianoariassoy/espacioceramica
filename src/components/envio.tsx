"use client";

import { useState } from "react";

const envio = ({ lan }: { lan: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-2 mb-2 border-b border-black text-sm">
      <div
        className="flex gap-4 justify-between cursor-pointer hover:opacity-70"
        onClick={() => setOpen(!open)}
      >
        <div>{lan === "es" ? "Detalles del envío" : "Delivery details"}</div>
        <div>{open ? "-" : "+"}</div>
      </div>

      {open ? (
        <div className="my-4 leading-4 text-xs">
          {lan === "es" ? (
            <p>
              Cada pieza de cerámica que enviamos viaja con el mismo cuidado con
              el que fue creada. Primero la envolvemos cuidadosamente en papel
              de seda y luego en varias capas de burbujas de aire, para proteger
              cada detalle.
              <br />
              Después, la colocamos dentro de una caja de cartón resistente,
              completamente acolchada con viruta de papel o espuma, de modo que
              la pieza quede firme y no se mueva. <br />
              Esa primera caja va dentro de una segunda, un poco más grande, con
              un nuevo relleno amortiguante entre ambas. Este sistema de doble
              caja nos permite asegurar que la cerámica esté protegida frente a
              golpes o movimientos durante el transporte. Por último, sellamos
              todo con cinta reforzada y rotulamos el paquete con la indicación
              “Frágil” y “Este lado arriba”. <br />
              Así garantizamos que cada pieza llegue a destino tal como salió de
              nuestro taller: intacta, lista para ser parte de tu espacio.
            </p>
          ) : (
            <p>
              Each ceramic piece we send via the same care as it was made. First
              we wrap it carefully in paper towels and then in several layers of
              air-filled bags to protect each detail.
              <br />
              Then we put it inside a cardboard box completely sealed with paper
              or spray, in order to make it firm and not move. <br />
              That first box goes inside a second, a bit bigger, with a new air
              filling between both. This double box system allows us to ensure
              that the ceramic is protected against shocks or movements during
              transportation. Finally, we sell everything with a strong tape and
              label the package with the indication “Soft” and “This side up”.
              <br />
              So we guarantee that each piece arrives at destination as it left
              our workshop: intact, ready to be part of your space.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default envio;
