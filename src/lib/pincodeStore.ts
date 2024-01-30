
import { ServiceArea } from "@prisma/client";
import { create } from "zustand";
import { getPincode } from "./api";


interface PincodeStore {
  pincodes: ServiceArea[];
  setPinCodes: () => void;
}

export const usePincodeStore = create<PincodeStore>((set, get) => ({
    pincodes: [],
    setPinCodes: async () => {
      const pincodes = await getPincode();
      set({ pincodes });
    },
  }));