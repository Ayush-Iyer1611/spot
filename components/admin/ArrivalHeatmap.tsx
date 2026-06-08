"use client";

import { useGuestStore } from "@/store/useGuestStore";

export default function ArrivalHeatmap() {

  const guests = useGuestStore(
    (state) => state.guests
  );

  const timeBuckets = [
  "09:00",
  "09:05",
  "09:15",
  "09:20",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
];

  const arrivals = timeBuckets.map(
    (time) => {

      const count = guests.filter(
        (guest: any) =>
          guest.arrivalTime === time
      ).length;

      return {
        time,
        count,
      };
    }
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold">
        Arrival Heatmap
      </h2>

      <p className="mt-2 text-gray-400">
        Expected congestion throughout the event.
      </p>

      <div className="mt-8 space-y-4">

        {arrivals.map((slot) => (

          <div
            key={slot.time}
            className="flex items-center gap-4"
          >

            <div className="w-20 text-sm text-gray-400">
              {slot.time}
            </div>

            <div className="flex-1 rounded-full bg-white/5">

              <div
                className="h-6 rounded-full bg-blue-500 transition-all"
                style={{
                  width: `${Math.max(
                    slot.count * 25,
                    slot.count > 0 ? 15 : 0
                  )}%`,
                }}
              />

            </div>

            <div className="w-10 text-right">
              {slot.count}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}