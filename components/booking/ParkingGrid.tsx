"use client";

import { useState } from "react";

const parkingSlots = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  occupied: Math.random() > 0.7,
}));

export default function ParkingGrid() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <section className="px-8 pb-24">
      
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          Smart Parking Allocation
        </h2>

        <p className="mt-4 text-gray-400">
          Real-time parking visualization and slot reservation.
        </p>
      </div>

      {/* STATS */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
          <p className="text-sm text-gray-400">
            Total Slots
          </p>

          <h3 className="text-2xl font-bold">
            24
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
          <p className="text-sm text-gray-400">
            Occupied
          </p>

          <h3 className="text-2xl font-bold text-red-400">
            {parkingSlots.filter((slot) => slot.occupied).length}
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
          <p className="text-sm text-gray-400">
            Available
          </p>

          <h3 className="text-2xl font-bold text-green-400">
            {parkingSlots.filter((slot) => !slot.occupied).length}
          </h3>
        </div>
      </div>

      {/* PARKING GRID */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
        
        {parkingSlots.map((slot) => {
          const isSelected = selectedSlot === slot.id;

          return (
            <button
              key={slot.id}
              disabled={slot.occupied}
              onClick={() => setSelectedSlot(slot.id)}
              className={`
                h-20 rounded-xl border text-sm font-medium transition
                ${
                  slot.occupied
                    ? "bg-red-500/20 border-red-500/20 text-red-300 cursor-not-allowed"
                    : isSelected
                    ? "bg-green-500 text-black border-green-400"
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                }
              `}
            >
              P-{slot.id}
            </button>
          );
        })}
      </div>

      {/* SELECTED SLOT */}
      {selectedSlot && (
        <div className="mt-10 text-center">
          
          <div className="inline-flex items-center gap-3 rounded-xl bg-green-500/20 border border-green-500/20 px-6 py-4">
            
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <p className="text-green-300 font-medium">
              Parking Slot P-{selectedSlot} Reserved
            </p>
          </div>
        </div>
      )}
    </section>
  );
}