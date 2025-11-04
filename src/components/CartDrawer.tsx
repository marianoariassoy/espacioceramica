"use client";
import CartResume from "./CartResume";
import ButtonSubmit from "./ButtonSubmit";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function CartDrawer() {
  const t = useTranslations("Cart");
  const router = useRouter();

  const closeDrawer = () => {
    const cart = document.querySelector("#cart") as HTMLElement;
    if (!cart) return;
    cart.style.right = "-100%";
  };

  const continueShopping = () => {
    closeDrawer();
    router.push("/tienda");
  };

  const checkout = () => {
    closeDrawer();
    router.push("/checkout");
  };

  return (
    <div
      className="fixed top-0 right-[-100%] h-screen z-40 p-4 bg-white shadow w-full max-w-sm flex flex-col gap-y-8 transition-all"
      id="cart"
    >
      <div className="flex justify-end">
        <button
          className="hover:underline cursor-pointer"
          onClick={closeDrawer}
        >
          {t("close")}
        </button>
      </div>

      <CartResume />

      <div className="flex flex-col gap-y-2">
        <ButtonSubmit label={t("continue")} onClick={continueShopping} />
        <ButtonSubmit label={t("checkout")} onClick={checkout} />
      </div>
    </div>
  );
}
