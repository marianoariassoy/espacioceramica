"use client";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, total, removeItem } = useCart();

  return (
    <div className="fixed top-0 right-0 h-screen z-20 p-4 bg-[#f6f6f7] shadow pt-16">
      <h2 className="text-xl font-bold mb-4">Tu carrito</h2>
      {items.length === 0 && <p>No hay productos aún.</p>}
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.title} x{item.quantity}
          </span>
          <span>${item.price_ars * item.quantity}</span>
          <button onClick={() => removeItem(item.id)}>❌</button>
        </div>
      ))}
      <div className="mt-4 font-bold">Total: ${total}</div>
    </div>
  );
}
