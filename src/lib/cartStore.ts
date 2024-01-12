import { CartItem } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  count: number;
  cart: Record<string, CartItem>;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      count: 0,
      cart: {},
      addItem: (item) => {
        const cart = { ...get().cart };
        if (cart[item.id]) {
          cart[item.id].quantity += 1;
        } else {
          cart[item.id] = item;
        }
        set({ cart, count: get().count + 1 });
      },
      removeItem: (itemId) => {
        const cart = { ...get().cart };
        if (cart[itemId] && cart[itemId].quantity > 0) {
          cart[itemId].quantity -= 1;
        }
        if (cart[itemId].quantity === 0) {
          delete cart[itemId];
        }

        set({ cart, count: get().count - 1 });
      },
      deleteItem: (itemId) => {
        const cart = get().cart;
        const count = get().count - cart[itemId].quantity;
        delete cart[itemId];
        set({ cart, count });
      },
    }),
    {
      name: "trisandya-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
