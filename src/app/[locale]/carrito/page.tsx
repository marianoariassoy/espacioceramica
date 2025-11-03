"use client";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import CartResume from "@/components/CartResume";

const Page = () => {
  const { items } = useCart();
  const t = useTranslations("Cart");
  const router = useRouter();

  if (items.length === 0) {
    router.push("/tienda");
    return null;
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row items-stretch gap-x-4 gap-y-8 h-full max-w-5xl m-auto mt-8">
      <div className="lg:w-3/5 flex flex-col gap-y-8">
        <h1 className="text-xl font-[--lastik-regular] uppercase">
          {t("info")}
        </h1>
        <div className="p-6 border border-gray-300 flex flex-col gap-y-6 bg-white">
          <h2 className="font-medium">{t("email")}</h2>
          <div className="flex flex-col gap-y-1">
            <span className="text-xs opacity-70 font-medium">EMAIL</span>
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="bg-black/10 p-2 h-12 text-sm"
            />
            <span className="opacity-70 text-sm">{t("notifications")}</span>
          </div>

          <button className="bg-black text-white p-2 uppercase font-medium text-sm border hover:bg-white hover:text-black h-12 cursor-pointer">
            {t("step")}
          </button>
        </div>
      </div>
      <div className="lg:w-2/5">
        <CartResume />
      </div>
    </section>
  );
};

export default Page;
