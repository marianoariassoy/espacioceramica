import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";

const satoshiFont = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--satoshi-variable",
  display: "swap",
});

const lastikFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lastik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lastik-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--lastik-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espacio Cerámica",
  description:
    "Espacio cerámica es nuestro taller, un proyecto de búsqueda e investigación que surgió en el 2008, donde reunimos nuestras obsesiones en torno al oficio. Desde el comienzo construimos, a través de la experiencia, nuestra profesión, ampliando y profundizando nuestros conocimientos con cada nueva horneada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${satoshiFont.variable} ${lastikFont.variable} antialiased `}
        style={{ backgroundColor: "#f6f6f7" }}
      >
        <Header />
        <main className="transition-all px-4 ">{children}</main>
      </body>
    </html>
  );
}
