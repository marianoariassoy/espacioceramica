"use client";
import { useCart } from "@/context/CartContext";

const cart = ({ title }: { title: string }) => {
  const { items } = useCart();

  const openCart = () => {
    const cart = document.querySelector("#cart") as HTMLElement;
    if (!cart) return;
    cart.style.right = "0";
  };
  return (
    <div className="flex items-center gap-x-1">
      {items.length > 0 ? (
        <button
          aria-label="Ver carrito"
          className="hover:underline cursor-pointer"
          onClick={openCart}
        >
          {title}
        </button>
      ) : (
        <span>{title}</span>
      )}

      <span className="bg-black text-white w-5 text-xs flex justify-center items-center h-5 rounded-full">
        {items.length}
      </span>
    </div>
  );
};

export default cart;
