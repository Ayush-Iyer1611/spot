"use client";

import Papa from "papaparse";

import { useGuestStore } from "@/store/useGuestStore";
import { useEventStore } from "@/store/useEventStore";

import EventSummary from "./EventSummary";
import ArrivalHeatmap from "./ArrivalHeatmap";

const totalParkingSlots = 20;

export default function AdminDashboard() {
  const guests = useGuestStore(
    (state) => state.guests
  );
  const event = useEventStore(
  (state) => state.event
);

const capacity =
  event?.totalSlots || 0;

  const setGuests = useGuestStore(
    (state) => state.setGuests
  );

  const totalGuests = guests.length;

  const cars = guests.filter(
    (g: any) => g.vehicleType === "Car"
  ).length;

  const bikes = guests.filter(
    (g: any) => g.vehicleType === "Bike"
  ).length;

  const evs = guests.filter(
    (g: any) => g.vehicleType === "EV"
  ).length;

  

  const occupied = totalGuests;

  const available =
    capacity - occupied;

  const revenue =
    occupied * 50;
const parkingSlots = Array.from(
  { length: totalParkingSlots },
  (_, index) => {

    const guest = guests[index];

    if (guest) {
      return {
        slot: `P-${index + 1}`,
        status: "occupied",
        guestName: guest.name,
      };
    }

    return {
      slot: `P-${index + 1}`,
      status: "free",
      guestName: "",
    };
  }
);
  return (
    <div className="space-y-10">
        <EventSummary />
        <ArrivalHeatmap />

      {/* KPI CARDS */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Capacity</p>
          <h2 className="mt-2 text-4xl font-bold">
            {capacity}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Occupied</p>
          <h2 className="mt-2 text-4xl font-bold">
            {occupied}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Available</p>
          <h2 className="mt-2 text-4xl font-bold">
            {available}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-400">Revenue</p>
          <h2 className="mt-2 text-4xl font-bold">
            ₹{revenue}
          </h2>
        </div>

      </div>

      {/* CSV UPLOAD */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold">
          Upload Guest List
        </h2>

        <p className="mt-2 text-gray-400">
          Upload organizer CSV file
        </p>

        <input
          type="file"
          accept=".csv"
          className="mt-6 block"
          onChange={(e) => {

            const file =
              e.target.files?.[0];

            if (!file) return;

            Papa.parse(file, {
              header: true,

              complete: (results) => {

                const filteredGuests =
                  (results.data as any[])
                  .filter(
                    (guest) =>
                      guest.name
                  );

                setGuests(
                  filteredGuests
                );

              },
            });

          }}
        />

      </div>

      {/* PARKING MATRIX */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <h2 className="mb-6 text-2xl font-bold">
          Parking Matrix
        </h2>

        <div className="grid grid-cols-5 gap-4">

          {parkingSlots.map((slot) => (

  <div
    key={slot.slot}
    className={`h-20 rounded-xl flex flex-col items-center justify-center font-semibold

    ${
      slot.status === "occupied"
        ? "bg-red-500/20 border border-red-500/30"
        : "bg-green-500/20 border border-green-500/30"
    }`}
  >

    <span>
      {slot.slot}
    </span>

    <span className="text-xs text-gray-400 mt-1">
      {
        slot.guestName ||
        "Available"
      }
    </span>

  </div>

))}

        </div>

      </div>

      {/* ATTENDEES */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <h2 className="mb-6 text-2xl font-bold">
          Attendees
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="py-3 text-left">
                Name
              </th>

              <th className="py-3 text-left">
                Vehicle
              </th>

              <th className="py-3 text-left">
                Slot
              </th>

              <th className="py-3 text-left">
                Arrival
              </th>

            </tr>

          </thead>

          <tbody>

            {guests.length === 0 ? (

              <tr>

                <td
                  colSpan={4}
                  className="py-6 text-center text-gray-500"
                >
                  No guest list uploaded
                </td>

              </tr>

            ) : (

              guests.map(
                (
                  person: any,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-b border-white/10"
                  >

                    <td className="py-3">
                      {person.name}
                    </td>

                    <td>
                      {person.vehicleType}
                    </td>

                    <td>
  P-{index + 1}
</td>

                    <td>
                      {person.arrivalTime}
                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

      {/* ANALYTICS */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold">
          Event Analytics
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div>
            <p>Tickets Sold</p>

            <h3 className="text-3xl font-bold">
              {totalGuests}
            </h3>
          </div>

          <div>
            <p>Parking Requests</p>

            <h3 className="text-3xl font-bold">
              {occupied}
            </h3>
          </div>

          <div>
            <p>Cars</p>

            <h3 className="text-3xl font-bold">
              {cars}
            </h3>
          </div>

          <div>
            <p>Bikes</p>

            <h3 className="text-3xl font-bold">
              {bikes}
            </h3>
          </div>

          <div>
            <p>EVs</p>

            <h3 className="text-3xl font-bold">
              {evs}
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}