"use client";

import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";

export default function ParkingPass() {
  const reservation = {
    id: "SPOT-2026-001",
    event: "Interstellar Re-Release",
    venue: "PVR Orion Mall",
    slot: "P-7",
  };

  const qrData = JSON.stringify(reservation);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
            <span className="text-green-400">
              ✓ Parking Reserved
            </span>
          </div>

          <h2 className="text-4xl font-bold">
            SPOT Parking Pass
          </h2>

        </div>

        <div className="grid gap-4">

          <div className="rounded-xl border border-white/10 p-4">
            <p className="text-sm text-gray-400">
              Reservation ID
            </p>

            <h3 className="text-xl font-semibold">
              {reservation.id}
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 p-4">
            <p className="text-sm text-gray-400">
              Event
            </p>

            <h3 className="text-xl font-semibold">
              {reservation.event}
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 p-4">
            <p className="text-sm text-gray-400">
              Venue
            </p>

            <h3 className="text-xl font-semibold">
              {reservation.venue}
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 p-4">
            <p className="text-sm text-gray-400">
              Allocated Slot
            </p>

            <h3 className="text-xl font-semibold text-green-400">
              {reservation.slot}
            </h3>
          </div>

        </div>

        <div className="mt-10 flex justify-center rounded-2xl bg-white p-6">

          <QRCode
            value={qrData}
            size={220}
          />

        </div>

        <div className="mt-8 text-center">

          <Button>
            Download Pass
          </Button>

        </div>
      </div>
    </div>
  );
}