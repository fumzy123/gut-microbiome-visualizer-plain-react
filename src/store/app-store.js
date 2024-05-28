import { create } from 'zustand';

// Create a Store
export const useSideBarStore = create((set) => ({
  rotation: [0, 0, 0],
  setRotation: (newRotation) => set({ rotation: newRotation }),
}));
