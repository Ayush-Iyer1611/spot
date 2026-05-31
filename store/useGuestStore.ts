import { create } from "zustand";

interface Guest {
  ticketId: string;
  name: string;
  event: string;
  vehicleType: string;
  arrivalTime: string;
}

interface GuestState {
  guests: Guest[];
  setGuests: (guests: Guest[]) => void;
}

export const useGuestStore = create<GuestState>((set) => ({
  guests: [],
  setGuests: (guests) => set({ guests }),
}));