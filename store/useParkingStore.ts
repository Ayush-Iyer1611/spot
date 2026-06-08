import { create } from "zustand";

interface ParkingState {
  checkedIn: string[];

  checkInGuest: (
    ticketId: string
  ) => void;
}

export const useParkingStore =
  create<ParkingState>((set) => ({

    checkedIn: [],

    checkInGuest: (ticketId) =>
      set((state) => ({

        checkedIn: [
          ...state.checkedIn,
          ticketId,
        ],

      })),

  }));