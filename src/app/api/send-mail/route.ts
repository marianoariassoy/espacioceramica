import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
            `<tr><td>${i.title}</td><td>${i.quantity}</td><td>$${
              i.price_ars
            }</td><td>$${i.price_ars * i.quantity}</td></tr>`
        )
        .join("");

      const html = `
      <h3>Gracias por tu compra, ${buyer.name}!</h3>
      <p><b>Forma de pago:</b> ${payment}</p>
      <p><b>Email:</b> ${buyer.email}</p>
      <hr />
      <h3>Resumen de tu pedido:</h3>
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>Producto</th><th>Cantidad</th><th>Precio unitario</th><th>Subtotal</th></tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
      </table>
      <h3>Total: $${total}</h3>
    `;

      await transporter.sendMail({
        from: `"Mi Tienda" <${process.env.SMTP_USER}>`,
        to: buyer.email,
        subject: "Confirmación de compra",
        html,
      });

      await transporter.sendMail({
        from: `"Mi Tienda" <${process.env.SMTP_USER}>`,
        to: "tutienda@gmail.com",
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
