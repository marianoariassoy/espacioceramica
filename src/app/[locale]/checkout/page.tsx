"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
// import { useRouter } from "@/i18n/navigation";
import CartResume from "@/components/CartResume";

const Page = () => {
  const [payType, setPayType] = useState("bankTransfer");
  const [step, setStep] = useState(1);
  const t = useTranslations("Cart");
  const c = useTranslations("Contact");
  // const router = useRouter();

  // if (items.length === 0) {
  //   router.push("/tienda");
  //   return null;
  // }

  const Label = ({ title }: { title: string }) => {
    return (
      <span className="text-xs opacity-70 font-medium uppercase">{title}</span>
    );
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-stretch gap-x-4 gap-y-8 h-full max-w-5xl m-auto mt-8">
      <div className="lg:w-3/5 flex flex-col gap-y-8 pb-4">
        <h1 className="text-lg font-[--lastik-regular] uppercase">
          {t("title")}
        </h1>

        <div className="w-full text-sm flex items-center gap-x-2 font-medium">
          <button
            className={`cursor-pointer ${
              step === 1 ? "underline" : "hover:underline"
            }`}
            onClick={() => setStep(1)}
          >
            {t("email")}
          </button>
          <span className="opacity-70">|</span>
          <button
            className={`cursor-pointer ${
              step === 2 ? "underline" : "hover:underline"
            }`}
            onClick={() => setStep(2)}
          >
            {t("info")}
          </button>
          <span className="opacity-70">|</span>
          <button
            className={`cursor-pointer ${
              step === 3 ? "underline" : "hover:underline"
            }`}
            onClick={() => setStep(3)}
          >
            {t("payType")}
          </button>
        </div>

        <div
          className={`p-6 border border-gray-300 flex flex-col gap-y-6 bg-white ${
            step === 1 ? "" : "opacity-30"
          }`}
          id="step-1"
        >
          <h2 className="font-medium">{t("email")}</h2>
          <div className="flex flex-col gap-y-1">
            <Label title={c("email")} />
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              required
              className="bg-black/10 p-2 h-12 text-sm"
            />
            <span className="opacity-70 text-sm">{t("notifications")}</span>
          </div>

          <button
            className="bg-black text-white p-2 uppercase font-medium text-sm border hover:bg-white hover:text-black h-12 cursor-pointer"
            onClick={() => setStep(2)}
          >
            {t("step")}
          </button>
        </div>

        <div
          className={`p-6 border border-gray-300 flex flex-col gap-y-6 bg-white ${
            step === 2 ? "" : "opacity-30"
          }`}
        >
          <h2 className="font-medium">{t("info")}</h2>
          <div className="flex flex-col gap-y-1">
            <Label title={c("name")} />
            <input type="name" className="bg-black/10 p-2 h-12 text-sm" />
            <Label title={c("phone")} />
            <input type="phone" className="bg-black/10 p-2 h-12 text-sm" />
            <Label title={c("address")} />
            <input
              type="address"
              className="bg-black/10 p-2 h-12 text-sm uppercase"
            />
            <Label title={c("city")} />
            <input
              type="city"
              className="bg-black/10 p-2 h-12 text-sm uppercase"
            />
            <Label title={c("zip")} />
            <input
              type="zip"
              className="bg-black/10 p-2 h-12 text-sm uppercase"
            />
          </div>
          <button
            className="bg-black text-white p-2 uppercase font-medium text-sm border hover:bg-white hover:text-black h-12 cursor-pointer"
            onClick={() => setStep(3)}
          >
            {t("step")}
          </button>
        </div>

        <div
          className={`p-6 border border-gray-300 flex flex-col gap-y-6 bg-white ${
            step === 3 ? "" : "opacity-30"
          }`}
        >
          <h2 className="font-medium">{t("payType")}</h2>
          <div>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => setPayType("bankTransfer")}
                className={`w-3 h-3 rounded-full hover:bg-black/100 cursor-pointer ${
                  payType === "bankTransfer" ? "bg-black/100" : "bg-black/10"
                }`}
              ></button>
              <span className="opacity-70 font-medium">
                {t("bankTransfer")}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => setPayType("paypal")}
                className={`w-3 h-3 rounded-full hover:bg-black/100 cursor-pointer ${
                  payType === "paypal" ? "bg-black/100" : "bg-black/10"
                }`}
              ></button>
              <span className="opacity-70 font-medium">{t("paypal")}</span>
            </div>
          </div>
          {payType === "bankTransfer" && (
            <div className="flex flex-col">
              <div className="text-sm">
                <strong>Entidad</strong> Banco del Chubut S.A. <br />
                <strong>CBU</strong> 0830010234003144210017 <br />
                <strong>Titular</strong> Lopez Fernando Gabriel <br />
                <strong>Tipo y N° de cuenta</strong> CA $ 01000031442100106{" "}
                <br />
                <strong>Alias</strong> proyectoliebre <br />
                <strong>CUIT</strong> 20278809723
              </div>
              <Link
                href="checkout/end"
                className="bg-black text-white p-2 uppercase font-medium text-sm border hover:bg-white hover:text-black h-12 cursor-pointer mt-8 flex justify-center items-center"
              >
                {t("endPurchase")}
              </Link>
            </div>
          )}
          {payType === "paypal" && <div className="text-sm">Paypal</div>}
        </div>
      </div>
      <div className="lg:w-2/5">
        <CartResume />
      </div>
    </section>
  );
};

export default Page;
