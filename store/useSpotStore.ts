import { create } from "zustand";

interface SpotState {
  selectedEvent: string;
  selectedSlot: string;

  setEvent: (event: string) => void;
  setSlot: (slot: string) => void;
}

export const useSpotStore = create<SpotState>((set) => ({
  selectedEvent: "",
  selectedSlot: "",

  setEvent: (event) =>
    set({ selectedEvent: event }),

  setSlot: (slot) =>
    set({ selectedSlot: slot }),
}));