import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { formatPrice } from "@/utils/formatPrice";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderNumber = Math.floor(Math.random() * 10000) + 10000;
    const { buyer, items, total, payment } = body;

    const transporter = nodemailer.createTransport({
      host: "mda07.ferozo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    if (items.length > 0) {
      const itemsHtml = items
        .map(
          (i: any) =>
            `<tr><td>${i.title}</td><td>${i.quantity}</td><td>${formatPrice(
              i.price_ars,
              "ARS",
            )}</td><td>${formatPrice(
              i.price_ars * i.quantity,
              "ARS",
            )}</td></tr>`,
        )
        .join("");

      let html = `<div style="background-color: #f6f6f7; padding: 20px; color: #000000;">
      <h3>¡Gracias por tu compra, ${buyer.name}!</h3>
      <h2>Número de pedido: #${orderNumber}</h2>
      <hr />
      <h3>Detalles de la compra:</h3>
      <p><b>Forma de pago:</b> ${payment} <br />
      <b>Email:</b> ${buyer.email} <br />
      <b>Teléfono:</b> ${buyer.phone} <br />
      <b>Dirección:</b> ${buyer.address} <br />
      <b>Ciudad:</b> ${buyer.city} <br />
      <b>Código postal:</b> ${buyer.zip}</p>
      <hr />
      <h3>Resumen de tu pedido:</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Producto</th><th>Cantidad</th><th>Precio unitario</th><th>Subtotal</th></tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
      </table>
      <h3>Total: ${formatPrice(total, "ARS")}</h3>
      <hr />
     `;

      if (payment === "paypal")
        html += `<h3>Datos PayPal:</h3> <p>Para pagar, haz click en este enlace: <a
                  href="https://www.paypal.com/paypalme/DaianaLopez991"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  @DaianaLopez991
                </a></p>`;
      else
        html += ` <h3>Datos bancarios:</h3>
      <p>Entidad Banco del Chubut S.A. <br />
CBU 0830010234003144210017  <br />
Titular Lopez Fernando Gabriel  <br />
Tipo y N° de cuenta CA $ 01000031442100106  <br />
Alias proyectoliebre  <br />
CUIT 20278809723 </p>
`;

      html += `<hr />
<p>Espacio Cerámica <br />
@espacioceramica <br />
espacioceramicapatagonia@gmail.com <br />
Chubut, Patagonia Argentina.</p> </div>`;

      await transporter.sendMail({
        from: `"Espacio Cerámica" <${process.env.SMTP_USER}>`,
        to: buyer.email,
        subject: "Confirmación de compra",
        html,
      });

      await transporter.sendMail({
        from: `"Espacio Cerámica" <${process.env.SMTP_USER}>`,
        to: "espacioceramicapatagonia@gmail.com",
        subject: `Nueva compra de ${buyer.name}`,
        html,
      });

      return NextResponse.json({ ok: true });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
