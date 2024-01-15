import { User } from "@prisma/client";
import { create } from "zustand";
import { getUser } from "./api";

interface UserStore {
  user?: User;
  setUser: (id: string) => void;
  reset: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  setUser: async (id) => {
    const user = await getUser(id);
    set({ user });
  },
  reset: () => {
    set({ user: undefined });
  },
}));
