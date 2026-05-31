"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slots = Array.from(
  { length: 20 },
  (_, i) => `P-${i + 1}`
);

export default function ParkingReservation() {
  const [vehicleType, setVehicleType] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <div className="mx-auto max-w-5xl">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-3xl font-bold">
          Parking Reservation
        </h2>

        <p className="mt-2 text-gray-400">
          Tell us how you're arriving.
        </p>

        {/* VEHICLE TYPE */}

        <div className="mt-8">
          <label className="mb-3 block text-sm text-gray-400">
            Vehicle Type
          </label>

          <select
            value={vehicleType}
            onChange={(e) =>
              setVehicleType(e.target.value)
            }
            className="w-full rounded-lg border border-white/10 bg-black p-3"
          >
            <option value="">
              Select Vehicle
            </option>

            <option>
              Car
            </option>

            <option>
              Bike
            </option>

            <option>
              EV
            </option>

            <option>
              Passenger Only
            </option>
          </select>
        </div>

        {/* GRID */}

        <div className="mt-10">

          <h3 className="mb-6 text-xl font-semibold">
            Select Parking Slot
          </h3>

          <div className="grid grid-cols-4 gap-4 md:grid-cols-5">

            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() =>
                  setSelectedSlot(slot)
                }
                className={`rounded-xl border p-4 transition
                ${
                  selectedSlot === slot
                    ? "border-green-400 bg-green-500 text-black"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {selectedSlot && (
          <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4">

            <p className="text-green-400">
              Selected Slot:
            </p>

            <h4 className="mt-2 text-2xl font-bold">
              {selectedSlot}
            </h4>

            <Link href="/pass">
              <Button className="mt-6">
                Generate Parking Pass
              </Button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}