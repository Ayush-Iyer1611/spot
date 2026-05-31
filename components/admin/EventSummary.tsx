"use client";

import Link from "next/link";
import { useEventStore } from "@/store/useEventStore";

export default function EventSummary() {

  const event = useEventStore(
    (state) => state.event
  );

  if (!event) {

    return (

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">

        <h2 className="text-3xl font-bold">
          No Active Event
        </h2>

        <p className="mt-3 text-gray-400">
          Create an event to start managing parking.
        </p>

        <Link
          href="/admin/setup"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3"
        >
          Create Event
        </Link>

      </div>

    );
  }

  return (

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-blue-400">
            Active Event
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {event.eventName}
          </h2>

          <p className="mt-3 text-gray-400">
            {event.venue}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">

          <div>
            <p className="text-gray-500">
              Event Date
            </p>

            <p className="font-semibold">
              {event.eventDate}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Start Time
            </p>

            <p className="font-semibold">
              {event.startTime}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Parking Capacity
            </p>

            <p className="font-semibold">
              {event.totalSlots}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Status
            </p>

            <p className="font-semibold text-green-400">
              Live
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}