"use client";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";

const cart = ({ title }: { title: string }) => {
  const { items } = useCart();

  return (
    <div className="flex items-center gap-x-1">
      {items.length > 0 ? (
        <Link
          href="/carrito"
          aria-label="Ver carrito"
          className="hover:underline"
        >
          {title}
        </Link>
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
