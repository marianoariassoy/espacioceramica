"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface image {
  id: number;
  image: string;
}

export type CartItem = {
  id: number;
  image: string;
  title: string;
  text: string;
  text_2: string;
  size: string;
  price_ars: number;
  price_usd: number;
  author: string;
  availability: boolean;
  images: image[];
  quantity: number;
  stock: number;
  slug: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("espacioceramica-cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("espacioceramica-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    const existing = items.find((p) => p.id === item.id);
    if (existing) {
      const quantity = items.find((p) => p.id === item.id)?.quantity;
      const stock = items.find((p) => p.id === item.id)?.stock;
      if (quantity === stock) return;
    }
    setItems((prev) => {
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const decrementQuantity = (id: number) => {
    const quantity = items.find((p) => p.id === id)?.quantity;
    if (quantity === 1) return;
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
    );
  };

  const incrementQuantity = (id: number) => {
    const quantity = items.find((p) => p.id === id)?.quantity;
    const stock = items.find((p) => p.id === id)?.stock;
    if (quantity === stock) return;
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setItems([]);
  const total = items.reduce((acc, i) => acc + i.price_ars * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        total,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
