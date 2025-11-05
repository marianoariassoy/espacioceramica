"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ItemType, InfoType } from "@/types/types";

type CartContextType = {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
  total: number;
  setBuyer: (info: InfoType) => void;
  buyer: InfoType;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [buyer, setBuyer] = useState<InfoType>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    delv_type: "",
    pay_type: "",
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("espacioceramica-cart");
    const storedBuyer = localStorage.getItem("espacioceramica-buyer");
    if (storedCart) setItems(JSON.parse(storedCart));
    if (storedBuyer) setBuyer(JSON.parse(storedBuyer));
  }, []);

  useEffect(() => {
    localStorage.setItem("espacioceramica-cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("espacioceramica-buyer", JSON.stringify(buyer));
  }, [buyer]);

  const addItem = (item: ItemType) => {
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
        setBuyer,
        buyer,
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
