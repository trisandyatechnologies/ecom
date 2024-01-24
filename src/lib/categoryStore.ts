import { ItemCategory } from "@prisma/client";
import { create } from "zustand";
import { getcategories } from "./api";

interface categoryStore {
  categories: ItemCategory[];
  setCategories: () => void;
}

export const useCategoryStore = create<categoryStore>((set, get) => ({
  categories: [],
  setCategories: async () => {
    const categories = await getcategories();
    set({ categories });
  },
}));
