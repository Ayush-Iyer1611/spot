import { create } from "zustand";

interface EventData {
  eventName: string;
  venue: string;

  eventDate: string;

  startTime: string;
  endTime: string;

  totalSlots: number;

  carSlots: number;
  bikeSlots: number;
  evSlots: number;
  vipSlots: number;

  parkingFee: number;
}

interface EventState {
  event: EventData | null;

  setEvent: (
    event: EventData
  ) => void;
}

export const useEventStore =
  create<EventState>((set) => ({

    event:
      typeof window !== "undefined"
        ? JSON.parse(
            localStorage.getItem(
              "event"
            ) || "null"
          )
        : null,

    setEvent: (event) => {

      localStorage.setItem(
        "event",
        JSON.stringify(event)
      );

      set({ event });

    },

  }));