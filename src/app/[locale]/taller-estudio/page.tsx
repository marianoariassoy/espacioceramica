"use client";

import { useLocale } from "next-intl";
import Item from "@/components/item";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import Gallery from "@/components/gallery";
import Hornos from "./hornos";
import Intro from "@/components/intro";

const page = () => {
  const locale = useLocale();
  const [article, setArticle] = useState("#espacio-ceramica");
  const [file, setFile] = useState("");

  useEffect(() => {
    document.title = "Taller / Estudio Espacio Cerámica";
  }, []);

  const goTo = (id: string) => {
    setArticle(id);
    const article = document.querySelector(id);
    if (!article) return;
    article.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="fixed top-12 w-full bg-[#f6f6f7] py-2 z-10">
        <Item
          title={locale === "es" ? "Espacio Cerámica" : "Studio"}
          active={article === "#espacio-ceramica"}
          action={() => goTo("#espacio-ceramica")}
        />
        <Item
          title={locale === "es" ? "Hornos" : "Kilns"}
          active={article === "#hornos"}
          action={() => goTo("#hornos")}
        />
      </div>

      <div className="scroll-mt-12" id="espacio-ceramica">
        <Intro locale={locale} section={1} />
      </div>

      <Gallery section={1} setFile={setFile} />
      <Intro locale={locale} section={3} />
      <Hornos locale={locale} setFile={setFile} />

      <Footer />
      {file ? <Modal file={file} setFile={setFile} /> : null}
    </section>
  );
};

export default page;
