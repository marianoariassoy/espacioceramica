"use client";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import Image from "@/components/Image";
import { useRouter } from "@/i18n/navigation";

const Page = () => {
  const { items, total, removeItem, incrementQuantity, decrementQuantity } =
    useCart();
  const t = useTranslations("Cart");
  const router = useRouter();

  if (items.length === 0) {
    router.push("/tienda");
    return null;
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row items-stretch gap-y-8 gap-x-12 h-full">
      <div className="lg:w-3/5 flex flex-col gap-y-8">
        <h1 className="text-xl font-[--lastik-regular] uppercase">
          {t("title")}
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
      <div className="lg:w-2/5 flex flex-col gap-y-8">
        <h2 className="text-xl font-[--lastik-regular] uppercase">
          {t("order")}
        </h2>
        <div className="p-6 border border-gray-300 bg-white">
          {items.map((item) => (
            <article key={item.id} className="flex justify-between mb-2">
              <div className="flex gap-2">
                <Link
                  href={`/tienda/${item.slug}`}
                  className="aspect-square w-20"
                >
                  <Image src={item.image} alt={item.title} />
                </Link>
                <div className="leading-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <h4 className="text-sm">{item.author}</h4>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span>${item.price_ars * item.quantity}</span>
                <div className="flex gap-x-1">
                  <span className="mr-1"> x{item.quantity}</span>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-black text-white p-2 uppercase rounded-full w-6 h-6 justify-center items-center flex text-sm hover:bg-black/70 cursor-pointer font-medium"
                  >
                    -
                  </button>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-black text-white p-2 uppercase rounded-full w-6 h-6 justify-center items-center flex text-sm hover:bg-black/70 cursor-pointer font-medium"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="underline cursor-pointer text-sm opacity-70 hover:opacity-100"
                >
                  {t("remove")}
                </button>
              </div>
            </article>
          ))}
          <div className="flex justify-between border-t border-b border-gray-300 py-4 font-medium mt-8">
            <span>{t("total")}</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
