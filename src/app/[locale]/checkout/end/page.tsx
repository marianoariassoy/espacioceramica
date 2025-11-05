"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import Loader from "@/components/loading";

const page = () => {
  const t = useTranslations("Cart");
  const { items, clearCart, total, buyer } = useCart();
  const sent = useRef(false);
  const [sendingMail, setSendingMail] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    if (items.length === 0) return;
    const handleSend = async () => {
      const payment = buyer.pay_type;

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyer, items, total, payment }),
      });

      const data = await res.json();

      if (data.ok) {
        setSendingMail(false);
        window.localStorage.setItem("espacioceramica-cart", JSON.stringify([]));
      } else {
        setError("Error al enviar el correo");
      }
    };

    handleSend();
    clearCart();
  }, []);

  return (
    <section className="max-w-5xl m-auto mt-8 font-medium text-lg text-center whitespace-break-spaces leading-5">
      {t("thanks")}
      {sendingMail ? (
        <div className="w-full">
          <Loader />
        </div>
      ) : null}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </section>
  );
};

export default page;
