import { create } from "zustand";

export const useLocationStore = create((set, get) => ({
  location: null,
  setLocation: (newLocation) => set({ location: newLocation }),
}))